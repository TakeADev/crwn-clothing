import React from 'react'
import { useState } from 'react'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setformFields(defaultFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setformFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use.')
      } else {
        console.error('user creation encountered an error', err)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign up with your email and password</h1>
        <FormInput
          label={'Display Name: '}
          inputOptions={{
            type: 'text',
            required: true,
            name: 'displayName',
            onChange: handleChange,
            value: displayName,
          }}
        />
        <FormInput
          label={'Email: '}
          inputOptions={{
            type: 'text',
            required: true,
            name: 'email',
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label={'Password: '}
          inputOptions={{
            type: 'text',
            required: true,
            name: 'password',
            onChange: handleChange,
            value: password,
          }}
        />
        <FormInput
          label={'Confirm Password: '}
          inputOptions={{
            type: 'text',
            required: true,
            name: 'confirmPassword',
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
