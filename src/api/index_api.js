import url from './api_config'
import ex from './exception'
import { bannerData, categoryData } from '../mock/mock'

export default {
  /**
   * 首页banner图
   * @param successFunc
   */
  getBanner (successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getBanner'))
      .then(res => {
        console.log('bannerData:', bannerData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('getBanner ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  },
  /**
   * 首页推荐
   * @param successFunc
   */
  getCategoryList (successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getCategoryList'))
      .then(res => {
        console.log('categoryData:', categoryData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('getCategoryList ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  }
}
