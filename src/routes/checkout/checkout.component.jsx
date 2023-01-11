import React from 'react'
import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../context/cart.context'

import '../checkout/checkout.styles.scss'

export const Checkout = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} checkoutItem={item} />
      })}
    </div>
  )
}
