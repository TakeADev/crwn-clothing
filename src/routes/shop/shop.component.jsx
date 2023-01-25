import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { CategoriesPreview } from '../../routes/categories-preview/categories-preview.component'
import { Category } from '../category/category.component'

import '../shop/shop-styles.scss'

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
