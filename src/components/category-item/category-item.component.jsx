import './category-item.styles.scss'

export const CategoryItem = ({ category: { id, imageUrl, title } }) => (
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
