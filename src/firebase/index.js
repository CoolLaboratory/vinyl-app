import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/remote-config'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyARt8QgYSl6xFcUXYjgW26-MLR2_WqSIZ0",
  authDomain: "my-vinyl-shop.firebaseapp.com",
  projectId: "my-vinyl-shop",
  storageBucket: "my-vinyl-shop.appspot.com",
  messagingSenderId: "681431290589",
  appId: "1:681431290589:web:fdd259487614766ace4134",
  measurementId: "G-33YF1XKZ9C"
}

 /**@type {firebase.app.App } fireApp*/
const fireApp = firebase.initializeApp(firebaseConfig)


// utils
const auth = fireApp.auth()
const db = fireApp.firestore()
const storage = fireApp.storage()
const analytics = fireApp.analytics()
const remoteConfig = fireApp.remoteConfig()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// Util Remote Config
remoteConfig.defaultConfig = {
  "welcome_message": "Welcome",
}

// export utils/refs
export default fireApp

export {
  db,
  auth,
  storage,
  analytics,
  remoteConfig,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}