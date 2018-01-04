import Vue from 'vue'
import url from './api_config'

export default {
  loginByAccount (successFunc, errorFunc) {
    Vue.$api.xHttp.get(url.getUrl('loginByAccount').stringFormat('13776626715', 'java125'))
      .then(res => {
        successFunc(res)
      })
      .catch((ex) => {
        errorFunc(ex)
      })
  }
}
