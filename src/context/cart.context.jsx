import { type } from '@testing-library/user-event/dist/type'
import { createContext, useState, useEffect, useReducer } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 1,
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
    case 'ADD_CART_ITEM': {
      return {
        ...state,
        ...payload,
      }
    }
    case 'REMOVE_CART_ITEM': {
      return {
        ...state,
        ...payload,
      }
    }
    case 'CLEAR_CART_ITEM': {
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

const updateCartValues = (cartItems) => {
  const getCartCount = (items) => {
    const newCartCount = items.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    console.log(newCartCount)
    return newCartCount
  }

  const getCartTotal = (items) => {
    return items.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
  }

  return {
    cartCount: getCartCount(cartItems),
    cartTotal: getCartTotal(cartItems),
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

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((item) => item.id !== cartItemToClear.id)

export const CartProvider = ({ children }) => {
  // const [cartIsOpen, setCartIsOpen] = useState(false)
  // const [cartItems, setCartItems] = useState([])
  // const [cartCount, setCartCount] = useState(0)
  // const [cartTotal, setCartTotal] = useState(0)

  const [{ cartIsOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE)

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   )
  //   setCartCount(newCartCount)
  // }, [cartItems])

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.price * cartItem.quantity,
  //     0
  //   )
  //   setCartTotal(newCartTotal)
  // }, [cartItems])

  const setCartIsOpen = () => {
    const newCartIsOpen = (open) => {
      return { cartIsOpen: (open = !open) }
    }
    dispatch({ type: 'TOGGLE_CART_OPEN', payload: newCartIsOpen(cartIsOpen) })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = (items) => {
      return {
        cartItems: addCartItem(items, productToAdd),
      }
    }
    dispatch({ type: 'ADD_CART_ITEM', payload: newCartItems(cartItems) })
  }

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = (items) => {
      return {
        cartItems: removeCartItem(items, cartItemToRemove),
      }
    }
    dispatch({ type: 'REMOVE_CART_ITEM', payload: newCartItems(cartItems) })
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = (items) => {
      return { cartItems: clearCartItem(items, cartItemToClear) }
    }
    dispatch({ type: 'CLEAR_CART_ITEM', payload: newCartItems(cartItems) })
  }
  const setCartItems = (items) => {
    dispatch({ type: 'SET_CART_ITEMS', payload: items })
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
