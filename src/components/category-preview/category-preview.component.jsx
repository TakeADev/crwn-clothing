import React from 'react'

import '../category-preview/category-preview.styles.scss'

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-containser'>
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
    </div>
  )
}
