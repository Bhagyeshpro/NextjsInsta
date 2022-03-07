// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_p_i8uT7xzasROkAOJwPOnXmlEMM87bU',
  authDomain: 'mern-offensivegrm-d65e0.firebaseapp.com',
  projectId: 'mern-offensivegrm-d65e0',
  storageBucket: 'mern-offensivegrm-d65e0.appspot.com',
  messagingSenderId: '18147136767',
  appId: '1:18147136767:web:b199b915065e887fdfa8ca',
  measurementId: 'G-ZQ8WL4PLEN',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
