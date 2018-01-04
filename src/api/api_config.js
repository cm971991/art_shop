export default {
  getUrl: (action) => {
    // 线上环境使用真实api地址 开发环境使用axios进行跨域调用/policeApi/
    let url = process.env.NODE_ENV === 'production' ? 'http://119.23.226.120:3000' : '/localApi'
    let actions = {
      // 账号登录
      'loginByAccount': () => {
        return url + '/login/cellphone?phone={0}&password={1}'
      }
    }
    return actions[action]()
  }
}
