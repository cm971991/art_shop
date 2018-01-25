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
    price: {title: '', value: ''},
    size: {title: '', value: ''},
    category: {title: '', value: ''},
    color: {title: '', value: ''},
    shape: {title: '', value: ''}
  },
  brokerSearch: {
    price: {title: '', value: ''},
    size: {title: '', value: ''},
    category: {title: '', value: ''},
    color: {title: '', value: ''},
    shape: {title: '', value: ''}
  }
}

const defaultValue = deepCopy(state.search)
const defaultBeautyValue = deepCopy(state.beautySearch)
const defaultBrokerValue = deepCopy(state.brokerSearch)


// getters
const getters = {
  search: state => {
    return state.search
  },
  beautySearch: state => {
    return state.beautySearch
  },
  brokerSearch: state => {
    return state.brokerSearch
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
  },
  [types.INIT_BROKER_SEARCH] () {
    window.$globalHub.$store.state.brokerSearch = defaultBrokerValue
  },
  [types.UPDATE_BROKER_SEARCH] (state, direction) {
    state.brokerSearch = direction
  }
}

export default {
  state,
  mutations,
  getters
}
