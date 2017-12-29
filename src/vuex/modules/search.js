import * as types from '../mutation-types'

// 该模块的初始状态
const state = {
  search: {
    price: '',
    size: '',
    color: '',
    shape: '',
    space: '',
    category: '',
    style: '',
    page: ''
  }
}

// getters
const getters = {
  search: state => {
    return state.search
  }
}

// 相关的 mutations
const mutations = {
  [types.UPDATE_SEARCH] (state, direction) {
    state.search = direction
  }
}

export default {
  state,
  mutations,
  getters
}
