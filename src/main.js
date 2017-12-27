// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/index'
import router from './router'
import Util from './assets/utils/index'

Vue.config.productionTip = false
Vue.use(Util)
/* eslint-disable no-new */
window.$globalHub = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
