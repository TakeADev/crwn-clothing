import React from 'react'
import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles.jsx'

import { UserContext } from '../../context/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { cartIsOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutHandler}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {cartIsOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
