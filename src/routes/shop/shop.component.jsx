import React from 'react'

import { useContext } from 'react'
import { ProductCard } from '../../components/product-card/product-card.component'

import { CategoriesContext } from '../../context/categories.context'

import '../shop/shop-styles.scss'

export const Shop = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <div className='products-container'>
      {categories.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
