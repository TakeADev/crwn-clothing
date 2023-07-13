import { createContext, useState, useEffect, useReducer } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
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

export const CART_ACTION_TYPES = {
  ADD_CART_ITEM: 'ADD_CART_ITEM',
}

const INITIAL_STATE = {
  cartItems: [],
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  const { cartItems } = state

  switch (type) {
    case CART_ACTION_TYPES.ADD_CART_ITEM: {
      console.log('hit')
      //Finds if cart items array already has a specific product (productToAdd)
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === payload.id
      )
      console.log(existingCartItem)
      //If theres an existing cart item in the array, return the array and add one to quantity of item, else return the original item
      if (existingCartItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }

      //Returns array of cart items and adds quantity field to object if product to add is not already in the array
      return [...cartItems, { ...payload, quantity: 1 }]
    }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
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
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItemss, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const [{ cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_CART_ITEM, payload: productToAdd })
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
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
