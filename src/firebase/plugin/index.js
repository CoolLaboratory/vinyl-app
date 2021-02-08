// firebase auth plugin
/** @param {firebase.default.auth.Auth} auth */
export default function makeAuthPlugin(auth) {
  return {
    install: (app) => { 
      console.log('makeAuthPlugin')
      app.config.globalProperties.$auth = auth 
    }
  }
}