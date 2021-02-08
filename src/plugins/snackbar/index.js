import Snackbar from '@/plugins/snackbar/Snackbar.vue'

export default {
  /**
   * 
   * @param { import('@/main').VueApp} app 
   * @param {*} options 
   */
  install: (app) => {
    // Plugin code goes here

    app.component('snackbar', Snackbar)

    app.config.globalProperties.$snackbar = {
      show(message, action = { buttonText: '', onPressed: () => {} }) {
        window.snackbar.actionButtonText = action.buttonText
        window.snackbar.labelText = message
        window.snackbar.open()
      },

      hide() {}
    }
  
  }
}