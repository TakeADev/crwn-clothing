import { createContext, useReducer } from 'react'
import { createAction } from '../utils/reducer/reducer.utils'

export const CartContext = createContext({
  cartIsOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
})

const INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN',
}

export const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return {
        ...state,
        ...payload,
      }
    }
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN: {
      return {
        ...state,
        cartIsOpen: payload,
      }
    }
    default: {
      throw new Error(`Unhandled type ${type} in cartReducer`)
    }
  }
}

const addCartItem = (cartItems, productToAdd) => {
  //Finds if cart items array already has a specific product (productToAdd)
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  //If theres an existing cart item in the array, return the array and add one to quantity of item, else return the original item
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  //Returns array of cart items and adds quantity field to object if product to add is not already in the array
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingCartItem.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id && cartItem.quantity !== 1
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id)
}

export const CartProvider = ({ children }) => {
  const [{ cartIsOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE)

  const setCartIsOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, bool))
  }

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )

    dispatch({
      type: 'SET_CART_ITEMS',
      payload: {
        cartCount: newCartCount,
        cartTotal: newCartTotal,
        cartItems: newCartItems,
      },
    })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
    cartItems,
    cartCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
