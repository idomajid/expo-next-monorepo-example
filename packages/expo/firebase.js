// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEe3LelKaS8oygw2arg4T8ui2xnaWl98E',
  authDomain: 'monorepo-forum-example.firebaseapp.com',
  projectId: 'monorepo-forum-example',
  storageBucket: 'monorepo-forum-example.appspot.com',
  messagingSenderId: '1046227606826',
  appId: '1:1046227606826:web:1932dc454ffd3a792d9253'
}

// Initialize Firebase

let app

//what is this ?
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
}

const auth = getAuth()
const db = getDatabase()

export { auth, db }
