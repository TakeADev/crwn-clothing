import React from 'react'

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from '../../utils/firebase/firebase.utils'

function SignIn() {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopupUser}>Sign In with Google Popup</button>
    </div>
  )
}

export default SignIn
