import * as types from '../mutation-types'

// 该模块的初始状态
const state = {
  showNav: true,
  footerType: ''
}

// getters
const getters = {
  showNav: state => {
    return state.showNav
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
  [types.UPDATE_FOOTER] (state, direction) {
    state.footerType = direction
  }
}

export default {
  state,
  mutations,
  getters
}
