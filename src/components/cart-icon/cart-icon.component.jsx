import React from 'react'
import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'

import '../cart-icon/cart-icon.styles.scss'

export const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext)
  const toggleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen)
  }
  return (
    <div className='cart-icon-container' onClick={toggleCartIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
