/**
 * @typedef {import('firebase').default} firebase
 * @typedef {firebase.default.User} firebaseUser
 * @typedef {firebase.default.auth.Auth} firebaseAuth
 * 
 * @typedef {import('vue')} Vue
 * @typedef {import('vue').App} VueApp
 */

import { createApp  } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import titleMixin from './mixins/titleMixin';


/**@type {VueApp} app */
let app


(async function () {
  const { auth } = await import(/* webpackChunkName: "chunk-firebase" */ './firebase');

  app = createApp(App).use(store).use(router)
  app.mixin(titleMixin)


  auth.onAuthStateChanged(boot({app, auth}))
})()

/**
 * @param {{
 *  app: VueApp,
 *  auth: firebaseAuth
 * }}
 * 
 * @returns { (user: firebaseUser|null) => void }
 */
const boot = ({app, auth}) => (user) => {
  // console.log(app.mount('#app'))
  if (user) { 
    console.log('revisiter')
    app
      .provide('user', user)
      .mount('#app')
  }
  else {
    console.log('first time visiter')

    const mountWithNewUser = (userCredential) => {
      // Signed in..
      console.log('AnonymusAuthentication for current user.');

      app
        .provide('user', userCredential.user)
        .mount('#app')

    }
    auth.signInAnonymously()
        .then(mountWithNewUser)
  }
}