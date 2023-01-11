import React from 'react'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'

import '../cart-dropdown/cart-dropdown.styles.scss'

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to='/checkout'>
        <Button>CHECKOUT</Button>
      </Link>
    </div>
  )
}
