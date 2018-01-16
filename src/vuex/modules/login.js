// 该模块的初始状态
import * as types from '../mutation-types'

const state = {
  loginDialogIsShow: false
}

const mutations = {
  [types.SHOW_LOGIN] (state, status) {
    state.loginDialogIsShow = status
  }
}

export default {
  state,
  mutations
}
