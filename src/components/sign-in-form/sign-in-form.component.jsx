import React from 'react'
import '../sign-in-form/sign-in-form.styles.scss'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { useState } from 'react'
import { signInAuthUserInWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

function SignInForm() {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    alert('Welcome ' + user.displayName)
  }

  const defaultFormFields = {
    email: '',
    password: '',
  }

  const resetFormFields = () => setformFields(defaultFormFields)

  const [formFields, setformFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = (e) => {
    const { name, value } = e.target

    setformFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signInAuthUserInWithEmailAndPassword(email, password)
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
