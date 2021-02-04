import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: ''
  },
  mutations: {
    setWelcomeMessage: function(state, msg) {
      state.msg = msg
    }
  },
  actions: {
    getWelcomeMessage: async function({commit}) {
      const { remoteConfig } = await import('../firebase')
      const welcomeMessage = remoteConfig.getValue('welcome_message').asString()
      
      console.log(welcomeMessage)
      commit(
        'setWelcomeMessage', 
        welcomeMessage
      )
      
    }
  },
  getters: {
    getMsg: function(state) { return state.msg }
  },
  modules: {
  }
})
