import React from 'react'

import '../button/button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

export const Button = ({ children, buttonType, onClick, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}
