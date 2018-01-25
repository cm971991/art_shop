import Mock from 'mockjs'
import url from './api/api_config'

const Random = Mock.Random

export const loginData = Mock.mock(url.getUrl('loginByAccount'), {
  'code': '0000',
  'msg': 'success',
  'data': {
    'userId': Random.natural(1, 1000),
    'userName': Random.cname(),
    'token': Random.guid()
  }
})
