import React from 'react'
import { Link } from 'react-router-dom'

import { ProductCard } from '../product-card/product-card.component'

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewPreviews,
} from './category-preview.styles'

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
        </Link>
      </h2>
      <CategoryPreviewPreviews>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewPreviews>
    </CategoryPreviewContainer>
  )
}
