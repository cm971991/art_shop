import api from '../api/index_api'
import Base from './base_service'

export default class extends Base {
  /**
   * 首页banner图
   */
  getBanner () {
    api.getBanner(
      (res) => {
        if (res.code === '0000') {
          this.vm.swiperSlides = res.data
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
  /**
   * 首页推荐
   */
  getCategoryList () {
    api.getCategoryList(
      (res) => {
        if (res.code === '0000') {
          this.vm.categoryList = res.data
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
}
