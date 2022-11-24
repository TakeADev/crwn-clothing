import React from 'react'
import '../form-input/form-input.styles.scss'

function FormInput({ label, inputOptions }) {
  return (
    <div className='group'>
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className='form-input' {...inputOptions} />
    </div>
  )
}

export default FormInput
