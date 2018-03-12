import Mock from 'mockjs'
import url from '../api/api_config'

const Random = Mock.Random
/**
 * 手机号登录
 */
export const loginData = Mock.mock(url.getUrl('loginByAccount'), {
  'code': '0000',
  'msg': 'success',
  'data': {
    'userId': Random.natural(1, 1000),
    'userName': Random.cname(),
    'token': Random.guid()
  }
})

/**
 * 首页banner图
 */
export const bannerData = Mock.mock(url.getUrl('getBanner'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 1; i <= 6; i++) {
      array.push({'imgUrl': '../../static/images/index/swiper/swiper_' + i + '.jpg'})
    }
    return array
  }
})

/**
 * 首页推荐
 */
export const categoryData = Mock.mock(url.getUrl('getCategoryList'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 1; i <= 4; i++) {
      array.push(
        {
          'goodsId': Random.id(),
          'goodsName': Random.ctitle(1, 10),
          'imgUrl': '../../static/images/index/category/category_' + i + '.jpg',
          'createTime': Random.datetime('yyyy'),
          'type': '布面油画',
          'size': Random.string('number', 2, 3) + 'x' + Random.string('number', 2, 3),
          'price': Random.integer(0, 100000),
          'brandId': Random.id(),
          'brandName': Random.cname()
        }
      )
    }
    return array
  }
})

/**
 * 首页最新上架
 */
export const newsData = Mock.mock(url.getUrl('getNews'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 1; i <= 20; i++) {
      array.push(
        {
          'goodsId': Random.id(),
          'goodsName': Random.ctitle(1, 10),
          'imgUrl': '../../static/images/index/news/news_' + i + '.jpg',
          'createTime': Random.datetime('yyyy'),
          'type': '宣纸设色',
          'size': Random.string('number', 2, 3) + 'x' + Random.string('number', 2, 3),
          'price': Random.integer(0, 100000),
          'brandId': Random.id(),
          'brandName': Random.cname()
        }
      )
    }
    return array
  }
})

/**
 * 首页最新上架
 */
export const specialsData = Mock.mock(url.getUrl('getSpecials'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 1; i <= 8; i++) {
      array.push(
        {
          'topicId': Random.id(),
          'topicName': Random.ctitle(5, 10),
          'imgUrl': '../../static/images/index/specials/specials_' + i + '.jpg',
          'desc': Random.ctitle(10, 50)
        }
      )
    }
    return array
  }
})

/**
 * 首页艺术家
 */
export const artistData = Mock.mock(url.getUrl('getArtist'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 1; i <= 3; i++) {
      array.push(
        {
          'brandId': Random.id(),
          'brandName': Random.cname(),
          'brandCount': Random.integer(0, 50),
          'imgUrls': ['../../static/images/index/artist/artist_' + (i + 1) + '_1.jpg',
            '../../static/images/index/artist/artist_' + (i + 1) + '_2.jpg',
            '../../static/images/index/artist/artist_' + (i + 1) + '_3.jpg']
        }
      )
    }
    return array
  }
})

/**
 * 首页艺视野
 */
export const insightData = Mock.mock(url.getUrl('getInsight'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 1; i <= 2; i++) {
      let imgName = 'leftsight'
      if (i === 2) {
        imgName = 'wujie'
      }
      array.push(
        {
          'topicId': Random.id(),
          'topicName': Random.ctitle(10, 20),
          'imgUrl': '../../static/images/index/insight/' + imgName + '.jpg',
          'desc': Random.ctitle(50, 70)
        }
      )
    }
    return array
  }
})
