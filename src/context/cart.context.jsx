import { createContext, useReducer } from 'react'

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

export const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CART_ITEMS': {
      return {
        ...state,
        ...payload,
      }
    }
    case 'TOGGLE_CART_OPEN': {
      return {
        ...state,
        ...payload,
      }
    }
    default: {
      throw new Error(`Unhandled type ${type} in cartReducer`)
    }
  }
}
const getCartCount = (items) => {
  return items.reduce((total, cartItem) => total + cartItem.quantity, 0)
}

const getCartTotal = (items) => {
  return items.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
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

  const updateCartItemsReducer = (newCartItems) => {
    const updateCartItems = () => {
      return {
        ...{ cartItems: newCartItems },
        ...{ cartCount: getCartCount(newCartItems) },
        ...{ cartTotal: getCartTotal(newCartItems) },
      }
    }
    dispatch({ type: 'SET_CART_ITEMS', payload: updateCartItems() })
  }

  const setCartIsOpen = () => {
    const newCartIsOpen = (open) => {
      return { ...cartItems, cartIsOpen: (open = !open) }
    }
    dispatch({ type: 'TOGGLE_CART_OPEN', payload: newCartIsOpen(cartIsOpen) })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = () => {
      return addCartItem(cartItems, productToAdd)
    }
    return updateCartItemsReducer(newCartItems())
  }

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = () => {
      return removeCartItem(cartItems, cartItemToRemove)
    }
    return updateCartItemsReducer(newCartItems())
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = () => {
      return clearCartItem(cartItems, cartItemToClear)
    }
    return updateCartItemsReducer(newCartItems())
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
