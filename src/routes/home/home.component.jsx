import { Outlet } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Directory } from '../../components/directory/directory.component'

const categories = [
  {
    id: uuidv4(),
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: uuidv4(),
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: uuidv4(),
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id: uuidv4(),
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: uuidv4(),
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
]

export const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  )
}
