import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { Button } from '../button/button.component'

import '../checkout-item/checkout-item.styles.scss'

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem

  const { addItemToCart, decreaseItemFromCart, removeItemFromCart } =
    useContext(CartContext)

  const increaseQuantity = () => addItemToCart(checkoutItem)
  const decreaseQuantity = () => decreaseItemFromCart(checkoutItem)
  const removeCartItem = () => removeItemFromCart(checkoutItem)

  return (
    <div className='checkout-item-container'>
      <img className='image-container' src={imageUrl} alt={name} />
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span className='arrow' onClick={decreaseQuantity}>
          &lt;
        </span>
        <span>{quantity}</span>
        <span className='arrow' onClick={increaseQuantity}>
          &gt;
        </span>
      </div>
      <span className='price'>${price}</span>
      <Button className='inverted' onClick={removeCartItem}>
        X
      </Button>
    </div>
  )
}

export default CheckoutItem
