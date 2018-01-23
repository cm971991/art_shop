import api from '../api/login_api'
import Base from './base_service'

export default class extends Base {
  /**
   * 手机号登录
   */
  loginByAccount (params) {
    api.loginByAccount(params,
      (res) => {
        if (res.code === 200) {
          this.$store.commit('UPDATE_USERINFO', res.userInfo)
        } else {
          this.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
}
