import React from 'react'

import { useContext } from 'react'

import { Button } from '../button/button.component'

import { CartContext } from '../../context/cart.context'

import '../product-card/product-card.styles.scss'

export const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  )
}
