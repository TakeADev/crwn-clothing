import React from 'react'
import '../sign-in-form/sign-in-form.styles.scss'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { useState } from 'react'
import { signUserInWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  auth,
} from '../../utils/firebase/firebase.utils'

function SignInForm() {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const defaultFormFields = {
    email: '',
    password: '',
  }

  const [formFields, setformFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => setformFields(defaultFormFields)

  const handleChange = (e) => {
    const { name, value } = e.target

    setformFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUserInWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='sign-in-container'>
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
        <Button type='submit' onClick={handleSubmit}>
          Sign In
        </Button>
        <Button onClick={logGooglePopupUser} buttonType='google'>
          Sign In with Google Popup
        </Button>
      </form>
    </div>
  )
}

export default SignInForm
