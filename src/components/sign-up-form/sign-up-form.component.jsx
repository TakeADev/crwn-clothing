import React from 'react'
import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (e) => {
    const { name, value } = e.target

    setformFields({ ...formFields, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return alert('Passwords do not match')
    }
    console.log(formFields)
    createAuthUserWithEmailAndPassword(email, password)
    setformFields(defaultFormFields)
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name: </label>
        <input
          required
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <label>Email: </label>
        <input
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />

        <label>Password: </label>
        <input
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />

        <label>Confirm Password: </label>
        <input
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
