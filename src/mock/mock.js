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
    for (let i = 0; i < 6; i++) {
      array.push({'imgUrl': '../../static/images/index/swiper/swiper_' + (i + 1) + '.jpg'})
    }
    return array
  }
})

/**
 * 首页banner图
 */
export const categoryData = Mock.mock(url.getUrl('getCategoryList'), {
  'code': '0000',
  'msg': 'success',
  'data': function () {
    let array = []
    for (let i = 0; i < 4; i++) {
      array.push(
        {
          'goodsId': Random.id(),
          'goodsName': Random.ctitle(1, 10),
          'imgUrl': '../../static/images/index/category/category_' + (i + 1) + '.jpg',
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
