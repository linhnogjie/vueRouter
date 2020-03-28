import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as filters from './filter/filter.js'
import constant from './const/const.js'

Vue.config.productionTip = false
Object.keys(filters).forEach((key) => {
  Vue.filter(key,filters[key])
})
Vue.use(constant)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
