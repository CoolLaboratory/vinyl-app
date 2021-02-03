import { createApp,  } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import titleMixin from './mixins/titleMixin'


const app = createApp(App).use(store).use(router)
app.mixin(titleMixin)


app.mount('#app')
