import React from 'react'
import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../context/cart.context'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles.jsx'

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems &&
        cartItems.map((item) => {
          return <CheckoutItem key={item.id} checkoutItem={item} />
        })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}
