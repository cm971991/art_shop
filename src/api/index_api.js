import url from './api_config'
import ex from './exception'
import { bannerData, categoryData, newsData, specialsData, artistData, insightData } from '../mock/mock'

// const POST = window.$globalHub.$api.xHttp.post

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
  },
  /**
   * 首页最新上架
   * @param successFunc
   */
  getNews (successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getNews'))
      .then(res => {
        console.log('newsData:', newsData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('getNews ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  },
  /**
   * 首页专题
   * @param successFunc
   */
  getSpecials (successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getSpecials'))
      .then(res => {
        console.log('specialsData:', specialsData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('getSpecials ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  },
  /**
   * 首页艺术家
   * @param successFunc
   */
  getArtist (successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getArtist'))
      .then(res => {
        console.log('artistData:', artistData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('getArtist ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  },
  /**
   * 首页艺视野
   * @param successFunc
   */
  getInsight (successFunc) {
    window.$globalHub.$api.xHttp.post(url.getUrl('getInsight'))
      .then(res => {
        console.log('insightData:', insightData)
        successFunc(res)
      })
      .catch((e) => {
        console.log('getInsight ex:', e)
        ex.errorMsg(-1, e.msg)
      })
  }
}
