import React from 'react'
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'
import { useState } from 'react'
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component'
import { FormInput } from '../form-input/form-input.component'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

export const SignInForm = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    alert('Welcome ' + user.displayName)
  }

  const defaultFormFields = {
    email: '',
    password: '',
  }

  //Resets form fields to default values. Empty strings
  const resetFormFields = () => setformFields(defaultFormFields)

  const [formFields, setformFields] = useState(defaultFormFields)
  const { email, password } = formFields

  //When field changes, updates form field state with value
  const handleChange = (e) => {
    const { name, value } = e.target

    setformFields({ ...formFields, [name]: value })
  }

  //Handles when form is submitted
  const handleSubmit = async (e) => {
    //Prevents default action of form field
    e.preventDefault()

    try {
      //Sets user object to variable after request to firebase
      const user = await signInAuthUserWithEmailAndPassword(email, password)

      //Resets form field to default
      resetFormFields()
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('No account found associated with this email')
          break
      }
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email: '}
          inputOptions={{
            type: 'email',
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
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}
