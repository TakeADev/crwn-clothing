import React, { Fragment } from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/product-card/product-card.component'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import { selectCategory } from '../../store/categories/category.selector'

import { CategoryContainer, CategoryTitle } from './category.styles'

export const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategory)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  )
}
