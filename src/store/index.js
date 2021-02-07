import { createStore } from 'vuex'

/**
 * 
 * @param {firebase.default.remoteConfig.RemoteConfig} remoteConfig 
 */
export const makeVueStore = ({remoteConfig}) => {
  console.log('makeVueStore')

  return createStore({
    state: {
      user: null,
      msg: ''
    },
    mutations: {
      setUser: function(state, user) {
        state.user = user
      },
      setWelcomeMessage: function(state, msg) {
        state.msg = msg
      }
    },
    actions: {
      setUser: function({commit}, {user}) {
        console.log('store:action => setUser')
        commit('setUser', user)
      },
      getWelcomeMessage: async function({commit}) {
        // const { remoteConfig } = await import('../firebase')
        console.log('store:action => getWelcomeMessage')
        const welcomeMessage = remoteConfig.getValue('welcome_message').asString()
        
        console.log(welcomeMessage)
        commit('setWelcomeMessage',  welcomeMessage )
      }
    },
    getters: {
      getMsg: function(state) { return state.msg }
    },
    modules: {
    }
  })
}