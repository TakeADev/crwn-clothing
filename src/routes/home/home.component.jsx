import { Outlet } from 'react-router-dom'

import { Directory } from '../../components/directory/directory.component'

export const Home = ({ categories }) => {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  )
}
