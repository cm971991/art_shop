/**
 * Created by hale on 2017年11月16日15:41:11
 */
import localStorage from './localStorage'
import Common from './common'
import Date from './date'
import PinYin from './pinyin'
import Validate from './validate'
import Dom from './dom'
import xHttp from './xHttp'

export default function (Vue) {
  if (!Vue.$utils) {
    Vue.$utils = {
      localStorage,
      Common,
      Date,
      PinYin,
      Validate,
      Dom
    }
  } else {
    Vue.$utils = {
      localStorage,
      Common,
      Date,
      PinYin,
      Validate,
      Dom
    }
  }
  Vue.mixin({
    created () {
      this.$utils = {
        localStorage,
        Common,
        Date,
        PinYin,
        Validate,
        Dom
      }
    }
  })

  if (!Vue.$api) {
    Vue.prototype.$api = {xHttp}
    Vue.$api = {xHttp}
  } else {
    $api:{
      xHttp
    }
  }
}
