import React from 'react'
import { useState } from 'react'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import { FormInput } from '../form-input/form-input.component'
import { Button } from '../button/button.component'

import '../sign-up-form/sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  //Resets form fields to default values. Empty strings
  const resetFormFields = () => {
    setformFields(defaultFormFields)
  }

  //When field changes, updates form field state with value
  const handleChange = (e) => {
    const { name, value } = e.target

    setformFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    //Prevents default form action on submit
    e.preventDefault()

    //Sends alert if inputted pasword and confirm password do not match
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      //creates user object with email and password from form inputs
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      //Creates a user document including user object and extends display name from form input
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
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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
            type: 'password',
            required: true,
            name: 'password',
            onChange: handleChange,
            value: password,
          }}
        />
        <FormInput
          label={'Confirm Password: '}
          inputOptions={{
            type: 'password',
            required: true,
            name: 'confirmPassword',
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
