import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

export const CartIcon = () => {
  const { setCartIsOpen, cartIsOpen, cartCount } = useContext(CartContext)

  const toggleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen)
  }

  return (
    <CartIconContainer onClick={toggleCartIsOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
