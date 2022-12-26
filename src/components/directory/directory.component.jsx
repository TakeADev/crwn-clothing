import './directory.styles.scss'

import { CategoryItem } from '../category-item/category-item.component'

export const Directory = ({ categories }) => {
  return (
    <div>
      <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  )
}
