import codes from './codes'

export default {
  errorMsg (code, msg) {
    if (window.$globalHub.$route.path !== '/' && window.$globalHub.$route.path !== '/login' && codes.AUTH_ERROR.some(x => x === code)) {
      window.$globalHub.$store.commit('ADMIN_LOGIN', true)
    } else {
      window.$globalHub.$modal.show('dialog', {title: '错误', text: msg || '传输异常，请稍后再试', buttons: [{title: '关闭'}]})
    }
  }
}
