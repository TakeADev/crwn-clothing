import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

export const CartIcon = () => {
  const { setCartIsOpen, cartCount } = useContext(CartContext)

  return (
    <CartIconContainer onClick={setCartIsOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
