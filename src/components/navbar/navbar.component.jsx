import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>This is the navbar</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar
