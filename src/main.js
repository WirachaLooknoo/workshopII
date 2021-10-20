import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import compositionApi from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(compositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
