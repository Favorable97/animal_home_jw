import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
