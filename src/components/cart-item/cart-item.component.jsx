import React from 'react'

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
} from './cart-item.styles'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
