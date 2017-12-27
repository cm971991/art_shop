import * as types from '../mutation-types'

// 该模块的初始状态
const state = {
  footerType: ''
}

// getters
const getters = {
  footerType: state => {
    return state.footerType
  }
}

// 相关的 mutations
const mutations = {
  [types.UPDATE_FOOTER] (state, direction) {
    state.footerType = direction
  }
}

export default {
  state,
  mutations,
  getters
}
