import url from './api_config'
import ex from './exception'

export default {
  /**
   * 美物
   * @param params
   * @param successFunc
   */
  getMakeArtList (params, successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getMakeArtList'), params)
      .then(res => {
        successFunc(res)
      })
      .catch((e) => {
        console.log('getMakeArtList ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  }
}
