// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/index'
import router from './router'
import VueLazyLoad from 'vue-lazyload' // 图片懒加载
import Util from './assets/utils/index'

Vue.use(VueLazyLoad, {
  error: require('./assets/images/common/img_error.png')
  // loading: require('./assets/images/common/loading.gif')
})
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
