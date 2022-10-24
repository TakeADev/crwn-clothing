import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const categories = [
    {
      id: uuidv4(),
      title: 'Hats',
    },
    {
      id: uuidv4(),
      title: 'Jackets',
    },
    {
      id: uuidv4(),
      title: 'Sneakers',
    },
    {
      id: uuidv4(),
      title: 'Womens',
    },
    {
      id: uuidv4(),
      title: 'Mens',
    },
  ]

  return (
    <div>
      <div className='categories-container'>
        <div className='background-image' />
        <div className='category-body-container'>
          {categories.map(({ title, id }) => (
            <div id={id} key={id}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
