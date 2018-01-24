import * as types from '../mutation-types'
import {deepCopy} from '../../assets/utils/util'

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
  },
  beautySearch: {
    price: '',
    size: '',
    category: '',
    color: '',
    shape: ''
  }
}

const defaultValue = deepCopy(state)
const defaultBeautyValue = deepCopy(state)

// getters
const getters = {
  search: state => {
    return state.search
  },
  beautySearch: state => {
    return state.beautySearch
  }
}

// 相关的 mutations
const mutations = {
  [types.INIT_SEARCH] () {
    window.$globalHub.$store.state.search = defaultValue
  },
  [types.UPDATE_SEARCH] (state, direction) {
    state.search = direction
  },
  [types.INIT_BEAUTY_SEARCH] () {
    window.$globalHub.$store.state.beautySearch = defaultBeautyValue
  },
  [types.UPDATE_BEAUTY_SEARCH] (state, direction) {
    state.beautySearch = direction
  }
}

export default {
  state,
  mutations,
  getters
}
