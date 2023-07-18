import React from 'react'
import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux/es/hooks/useSelector'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles.jsx'

import { CartContext } from '../../context/cart.context'
import { selectCurrentUser } from '../../store/user/user.selector'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
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
