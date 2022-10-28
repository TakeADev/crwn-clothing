import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDlsWYXg16xqB5tohzvocpbEBLR5Zpgh8Y',
  authDomain: 'crwn-clothing-db-58e1e.firebaseapp.com',
  projectId: 'crwn-clothing-db-58e1e',
  storageBucket: 'crwn-clothing-db-58e1e.appspot.com',
  messagingSenderId: '837990820943',
  appId: '1:837990820943:web:e8a78c81a170ae56da8e3a',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
