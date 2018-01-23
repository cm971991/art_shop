// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/index'
import {router, defaultTitle} from './router'
import VueLazyLoad from 'vue-lazyload' // 图片懒加载
import VModal from 'vue-js-modal'
import Util from './assets/utils/index'

Vue.use(VueLazyLoad, {
  error: require('./assets/images/common/img_error.png')
  // loading: require('./assets/images/common/loading.gif')
})
Vue.use(VModal, {dialog: true})
Vue.config.productionTip = false
Vue.use(Util)

const commit = store.commit
router.afterEach((to) => {
  // 设置标题
  if (to.meta.title || defaultTitle !== document.title) {
    Vue.$utils.Common.setTitle(to.meta.title || defaultTitle)
  }
  setTimeout(() => {
    commit('SHOW_NAV', to.meta.showNav)
    commit('UPDATE_FOOTER', to.meta.footer)
  }, 100)
})

/* eslint-disable no-new */
window.$globalHub = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
