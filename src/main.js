/**
 * @typedef {import('firebase').default} firebase
 * @typedef {firebase.default.User} firebaseUser
 * @typedef {firebase.default.auth.Auth} Auth
 * @typedef {firebase.default.analytics.Analytics} Analytics
 * @typedef {firebase.default.firestore.Firestore} Firestore
 * @typedef {firebase.default.remoteConfig.RemoteConfig} RemoteConfig
 * 
 * @typedef {import('vue')} Vue
 * @typedef {import('vue').App} VueApp
 */

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { makeVueRouter } from './router';
import { makeVueStore } from './store';
import titleMixin from './mixins/titleMixin';


(async function () {
  const { auth, analytics, db, remoteConfig, makeAuthPlugin } = await import(/* webpackChunkName: "chunk-firebase" */ './firebase');
  await remoteConfig.fetchAndActivate()



  auth.onAuthStateChanged(
    user => createMyApp({ App, user, auth, makeAuthPlugin, db, remoteConfig,  analytics, titleMixin })
  )

})()

/**
 * @param {{
 *  app: VueApp,
 *  auth: firebaseAuth, 
 * analytics: firebaseAnalytics
 * }}
 * 
 * @returns { (user: firebaseUser|null) => void }
 */
// const boot = ({ app, analytics, auth}) => (user) => {
//   // console.log('booting the apppppppp..........')

//   if (user) {
//     console.log('revisiter')
//     // console.log('user: ', user)

//     // Start tracking of the user...
//     analytics.setUserId(user.uid)
//     app.provide('user', user)
//       .mount('#app')
//   }
//   // else {
//     console.log('first time visiter'); // Signed in..
//     auth.signInAnonymously()
//     // app.provide('newUser', true)
//   // }
// }
/**
 * 
 * @param {{
  *   App: VueApp,
  *   auth: Auth,
  *   db: Firestore,
  *   remoteConfig: RemoteConfig,
  *   analytics: Analytics,
  *   titleMixin: any
  * }} 
  */
const createMyApp = ({ App, user, auth, makeAuthPlugin, db, remoteConfig, analytics, titleMixin }) => createApp(App)
  .use(makeVueStore({ db, remoteConfig }))
  .use(makeVueRouter({ auth, analytics }))
  .use(makeAuthPlugin(auth))
  .mixin(titleMixin)
  .provide(user)
  .mount('#app')
