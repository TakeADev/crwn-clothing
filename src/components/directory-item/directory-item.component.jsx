import { Link } from 'react-router-dom'

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
      <Link to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  </div>
)
