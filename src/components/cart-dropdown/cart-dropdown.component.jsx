import React from 'react'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'

import {
  CartDropdownContainer,
  CartDropdownItems,
  EmptyMessage,
} from './cart-dropdown.styles'

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartDropdownItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
