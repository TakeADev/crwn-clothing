import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  Name,
} from './checkout-item.styles.jsx'

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext)

  const increaseQuantity = () => addItemToCart(checkoutItem)
  const removeCartItem = () => removeItemFromCart(checkoutItem)
  const clearCartItem = () => clearItemFromCart(checkoutItem)

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer alt={name}>
        <img src={imageUrl} alt={name} />
      </CheckoutItemImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeCartItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={clearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
