import React from 'react'

import { Button } from '../button/button.component'

import '../cart-dropdown/cart-dropdown.styles.scss'

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>CHECKOUT</Button>
    </div>
  )
}
