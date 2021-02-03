import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyARt8QgYSl6xFcUXYjgW26-MLR2_WqSIZ0",
  authDomain: "my-vinyl-shop.firebaseapp.com",
  projectId: "my-vinyl-shop",
  storageBucket: "my-vinyl-shop.appspot.com",
  messagingSenderId: "681431290589",
  appId: "1:681431290589:web:fdd259487614766ace4134",
  measurementId: "G-33YF1XKZ9C"
};

const fireApp = firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export default fireApp

export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}