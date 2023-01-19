import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
})

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const value = { categories, setCategories }

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
    }
    getCategoriesMap()
    console.log('test')
  })

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
