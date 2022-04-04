import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAzHz5S7TzwVdmRJ0uIvbkYa9Z83XD0R7A",
  authDomain: "order-management-system-e979d.firebaseapp.com",
  projectId: "order-management-system-e979d",
  storageBucket: "order-management-system-e979d.appspot.com",
  messagingSenderId: "227897856466",
  appId: "1:227897856466:web:4a3aa4c08d909a64caf80b"
})

export const auth = app.auth()
export default app
