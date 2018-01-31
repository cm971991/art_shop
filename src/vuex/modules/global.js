import * as types from '../mutation-types'

// 该模块的初始状态
const state = {
  showNav: true,
  navType: '',
  footerType: ''
}

// getters
const getters = {
  showNav: state => {
    return state.showNav
  },
  navType: state => {
    return state.navType
  },
  footerType: state => {
    return state.footerType
  }
}

// 相关的 mutations
const mutations = {
  [types.SHOW_NAV] (state, direction) {
    state.showNav = direction
  },
  [types.UPDATE_NAVTYPE] (state, direction) {
    state.navType = direction
  },
  [types.UPDATE_FOOTER] (state, direction) {
    state.footerType = direction
  }
}

export default {
  state,
  mutations,
  getters
}
