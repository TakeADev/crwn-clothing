import React from 'react'

import { useContext } from 'react'
import { ProductCard } from '../../components/product-card/product-card.component'

import { ProductsContext } from '../../context/products.context'

import '../shop/shop-styles.scss'

export const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
