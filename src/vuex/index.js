import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import config from '../../config/index'
import global from './modules/global'
import search from './modules/search'
import userInfo from './modules/userInfo'
import login from './modules/login'
import localStorage from '../assets/utils/localStorage'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { // 组合各个模块
    global, search, userInfo, login
  },
  // 插件
  plugins: [createPersistedState({
    key: config.build.assetsPublicPath + 'vuex',
    paths: ['global', 'search', 'userInfo', 'login'], // 缓存模块
    getState: (key) => localStorage.get(key),
    setState: (key, state) => localStorage.set(key, state)
  })]
})
