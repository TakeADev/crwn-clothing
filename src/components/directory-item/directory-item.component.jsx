import './directory-item.styles.scss'

export const DirectoryItem = ({ category: { id, imageUrl, title } }) => (
  <div className='directory-item-container' id={id}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='body'>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
)
