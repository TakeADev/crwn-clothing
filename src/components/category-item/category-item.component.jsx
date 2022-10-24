import './category-item.styles.scss'

const CategoryItem = ({ id, imageUrl, title }) => {
  return (
    <div className='category-container' id={id}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
