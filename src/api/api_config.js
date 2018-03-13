export default {
  getUrl: (action) => {
    // 线上环境使用真实api地址 开发环境使用axios进行跨域调用/policeApi/ http://119.23.226.120:3000 http://api-art-app.artmkt.com
    let url = process.env.NODE_ENV === 'production' ? 'http://119.23.226.120:3000' : '/localApi'
    let actions = {
      // 账号登录
      'loginByAccount': () => {
        return url + '/login/cellphone?phone={0}&password={1}'
      },
      // 美物
      'getMakeArtList': () => {
        return url + '/goods/esList.app'
      },
      // 首页banner图
      'getBanner': () => {
        return url + '/index/getBanner'
      },
      // 首页推荐
      'getCategoryList': () => {
        return url + '/index/getCategoryList'
      },
      // 首页最新上架
      'getNews': () => {
        return url + '/index/getNews'
      },
      // 首页专题
      'getSpecials': () => {
        return url + '/index/getSpecials'
      },
      // 首页艺术家
      'getArtist': () => {
        return url + '/index/getArtist'
      },
      // 首页艺视野
      'getInsight': () => {
        return url + '/index/getInsight'
      }
    }
    return actions[action]()
  }
}
