import React from 'react'
import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from './cart-icon.styles'

export const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext)
  const toggleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen)
  }

  return (
    <CartIconContainer onClick={toggleCartIsOpen}>
      <ShoppingIconContainer>
        <ShoppingIcon />
      </ShoppingIconContainer>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
