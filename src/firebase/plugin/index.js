// firebase auth plugin
/** @param {firebase.default.auth.Auth} auth */
export default function makeAuthPlugin(auth) {
  return {
    install: (app) => { app.config.globalProperties.$auth = auth }
  }
}