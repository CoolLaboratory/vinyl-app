import { createApp  } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import titleMixin from './mixins/titleMixin';


(async function () {
  const fireModule = await import(/* webpackChunkName: "chunk-firebase" */ './firebase');

  const app = createApp(App).use(store).use(router);
  app.mixin(titleMixin);
  app.mount('#app')

  fireModule.auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user)
    } else {
      console.log('No Authenticated user..');
      fireModule.auth.signInAnonymously().then((user) => {
        // Signed in..
        console.log('AnonymusAuthentication for current user.');
        console.log(user);
      })
    }
  });
  console.log(fireModule);
})()
