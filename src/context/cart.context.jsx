import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: null,
})

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const value = { cartIsOpen, setCartIsOpen }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
