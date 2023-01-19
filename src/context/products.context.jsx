import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  products: null,
  setProducts: null,
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const value = { products, setProducts }

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
    }
    getCategoriesMap()
    console.log('test')
  })

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
