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
 * @typedef {import('vue').ComponentPublicInstance} VueInstance
 */

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { makeVueRouter } from './router';
import { makeVueStore } from './store';
// import titleMixin from './mixins/titleMixin';
import snackbar from './plugins/snackbar';


(async function () {
  const { auth, analytics, db, remoteConfig, makeAuthPlugin } = await import(/* webpackChunkName: "chunk-firebase" */ './firebase');
  await remoteConfig.fetchAndActivate()

  // auth.onAuthStateChanged((user) => {

    // return 
    createMyApp({ App, auth, makeAuthPlugin, db, remoteConfig,  analytics, snackbar })

  // })

})()

/**
 * 
 * @param {{
 *   App: VueApp,
 *   auth: Auth,
 *   db: Firestore,
 *   remoteConfig: RemoteConfig,
 *   analytics: Analytics
 * }} 
 */
const createMyApp = ({ App, auth, makeAuthPlugin, db, remoteConfig, analytics, snackbar }) => {
  console.log('Authentication state changed....')
  console.log('Recreate Vue instance')
  return createApp(App)
    .use(makeVueStore({ db, remoteConfig }))
    .use(makeVueRouter({ auth, analytics }))
    .use(makeAuthPlugin(auth))
    .use(snackbar)
    // .mixin(titleMixin)
    // .provide('user', user)
    .mount('#app')
}