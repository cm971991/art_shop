import url from './api_config'
import ex from './exception'

export default {
  /**
   * 登录
   * @param params
   * @param successFunc
   */
  loginByAccount (params, successFunc) {
    window.$globalHub.$api.xHttp.get(url.getUrl('loginByAccount').stringFormat(params.account, params.password))
      .then(res => {
        successFunc(res)
      })
      .catch((e) => {
        console.log('loginByAccount ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  }
}
