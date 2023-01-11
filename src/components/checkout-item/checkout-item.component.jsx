import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { Button } from '../button/button.component'

import '../checkout-item/checkout-item.styles.scss'

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext)

  const increaseQuantity = () => addItemToCart(checkoutItem)
  const removeCartItem = () => removeItemFromCart(checkoutItem)
  const clearCartItem = () => clearItemFromCart(checkoutItem)

  return (
    <div className='checkout-item-container'>
      <img className='image-container' src={imageUrl} alt={name} />
      <span className='name'>{name}</span>
      <div className='quantity'>
        <div className='arrow' onClick={removeCartItem}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={increaseQuantity}>
          &#10095;
        </div>
      </div>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={clearCartItem}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
