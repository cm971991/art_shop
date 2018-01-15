import * as types from '../mutation-types'
import {deepCopy} from '../../assets/utils/util'

// 该模块的初始状态
const state = {
  userInfo: {}
}

const defaultValue = deepCopy(state)

// getters
const getters = {
  userInfo: state => {
    return state.userInfo
  }
}

// 相关的 mutations
const mutations = {
  [types.INIT_USERINFO] () {
    window.$globalHub.$store.state.userInfo = defaultValue
  },
  [types.UPDATE_USERINFO] (state, direction) {
    state.userInfo = direction
  }
}

export default {
  state,
  mutations,
  getters
}
