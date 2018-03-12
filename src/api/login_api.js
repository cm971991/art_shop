import url from './api_config'
import ex from './exception'
import {loginData} from '../mock/mock'

export default {
  /**
   * 登录
   * @param params
   * @param successFunc
   */
  loginByAccount (params, successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('loginByAccount'), params)
      .then(res => {
        console.log('loginData:', loginData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('loginByAccount ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  }
}
