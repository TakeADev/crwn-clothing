import React from 'react'
import '../form-input/form-input.styles.scss'

export const FormInput = ({ label, inputOptions }) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
