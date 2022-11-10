import React from 'react'
import Navigation from '../../routes/navigation/navigation.component'

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name: </label>
        <input required type='text' />

        <label>Email: </label>
        <input required type='email' />

        <label>Password: </label>
        <input required type='password' />

        <label>Confirm Password: </label>
        <input required type='password' />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
