import React from 'react'
import { Fragment, useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

import { UserContext } from '../../context/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}
