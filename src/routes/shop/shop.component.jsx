import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/category.action'

import { CategoriesPreview } from '../../routes/categories-preview/categories-preview.component'
import { Category } from '../category/category.component'

export const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments()
      return categories
    }
    getCategories().then((val) => dispatch(setCategories(val)))
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}
