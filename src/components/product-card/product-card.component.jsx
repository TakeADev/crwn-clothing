import React from 'react'

import { useContext } from 'react'

import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component'

import { CartContext } from '../../context/cart.context'

import './product-card.styles'
import {
  Footer,
  ProductCardContainer,
  Name,
  Price,
} from './product-card.styles'

export const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}
