import React from 'react'

import { useContext, Fragment } from 'react'
import { CategoryPreview } from '../../components/category-preview/category-preview.component'

import { CategoriesContext } from '../../context/categories.context'

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}
