import Mock from 'mockjs'
import url from '../api/api_config'

const dir = process.env.NODE_ENV === 'production' ? 'iart/' : ''
const random = Mock.Random
/**
 * 手机号登录
 */
export const loginData = Mock.mock(url.getUrl('loginByAccount'), {
  'code': '0000',
  'msg': 'success',
  'data': {
    'userId': random.natural(1, 1000),
    'userName': random.cname(),
    'token': random.guid()
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
      array.push({'imgUrl': '../../' + dir + 'static/images/index/swiper/swiper_' + i + '.jpg'})
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
          'goodsId': random.id(),
          'goodsName': random.ctitle(1, 10),
          'imgUrl': '../../' + dir + 'static/images/index/category/category_' + i + '.jpg',
          'createTime': random.datetime('yyyy'),
          'type': '布面油画',
          'size': random.string('number', 2, 3) + 'x' + random.string('number', 2, 3),
          'price': random.integer(0, 100000),
          'brandId': random.id(),
          'brandName': random.cname()
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
          'goodsId': random.id(),
          'goodsName': random.ctitle(1, 10),
          'imgUrl': '../../' + dir + 'static/images/index/news/news_' + i + '.jpg',
          'createTime': random.datetime('yyyy'),
          'type': '宣纸设色',
          'size': random.string('number', 2, 3) + 'x' + random.string('number', 2, 3),
          'price': random.integer(0, 100000),
          'brandId': random.id(),
          'brandName': random.cname()
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
          'topicId': random.id(),
          'topicName': random.ctitle(5, 10),
          'imgUrl': '../../' + dir + 'static/images/index/specials/specials_' + i + '.jpg',
          'desc': random.ctitle(10, 50)
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
          'brandId': random.id(),
          'brandName': random.cname(),
          'brandCount': random.integer(0, 50),
          'imgUrls': ['../../' + dir + 'static/images/index/artist/artist_' + (i + 1) + '_1.jpg',
            '../../' + dir + 'static/images/index/artist/artist_' + (i + 1) + '_2.jpg',
            '../../' + dir + 'static/images/index/artist/artist_' + (i + 1) + '_3.jpg']
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
          'topicId': random.id(),
          'topicName': random.ctitle(10, 20),
          'imgUrl': '../../' + dir + 'static/images/index/insight/' + imgName + '.jpg',
          'desc': random.ctitle(50, 70)
        }
      )
    }
    return array
  }
})
