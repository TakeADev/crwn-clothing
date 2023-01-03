import { createContext, useState } from 'react'

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { cartIsOpen, setCartIsOpen, addItemToCart, cartItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
