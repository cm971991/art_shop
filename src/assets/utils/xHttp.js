import axios from 'axios'

function successParse (res, load) {
  try {
    return JSON.parse(res.data)
  } catch (e) {
    return res.data
  }
}

function errorParse (ex, load) {
  switch (ex.status) {
    // oauth权限
    // case 401:
    //   location.href = '../login'
    //   break
    // 请求参数错误
    // case 400:
    //   return Promise.reject(ex.data);
    // 系统错误
    default:
      return Promise.reject({msg: '传输异常，请稍后再试'})
  }
}

function send (url, method, body, options, load, loadMsg) {
  const opts = {...options}
  opts.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...opts.headers
  }
  switch (method) {
    case 'get':
      return axios.get(url, opts)
        .then(res => successParse(res, load))
        .catch(error => errorParse(error, load))
    case 'post':
      return axios.post(url, body, opts)
        .then(res => successParse(res, load))
        .catch(error => errorParse(error, load))
  }
}

export default {
  get (url, options, {load = true, loadMsg = '加载中...'} = {}) {
    return send(url, 'get', null, options, load, loadMsg)
  },
  post (url, body, options, {load = true, loadMsg = '加载中...'} = {}) {
    return send(url, 'post', body, options, load, loadMsg)
  }
}
