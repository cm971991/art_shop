import * as types from '../mutation-types'
import { deepCopy } from '../../assets/utils/util'

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

const defaultValue = deepCopy(state)

// getters
const getters = {
  search: state => {
    return state.search
  }
}

// 相关的 mutations
const mutations = {
  [types.INIT_SEARCH] () {
    window.$globalHub.$store.state.search = defaultValue
  },
  [types.UPDATE_SEARCH] (state, direction) {
    state.search = direction
  }
}

export default {
  state,
  mutations,
  getters
}
