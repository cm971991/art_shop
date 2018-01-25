import api from '../api/login_api'
import Base from './base_service'

export default class extends Base {
  /**
   * 手机号登录
   */
  loginByAccount (params) {
    api.loginByAccount(params,
      (res) => {
        if (res.code === '0000') {
          this.vm.$store.commit('UPDATE_USERINFO', res.data)
          this.vm.$router.go(-1)
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
}
