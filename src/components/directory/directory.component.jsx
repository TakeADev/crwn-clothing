import './directory.styles.scss'

import CategoryItem from '../category-item/category-item.component'

const Directory = ({ categories }) => {
  return (
    <div>
      <div className='categories-container'>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  )
}

export default Directory
