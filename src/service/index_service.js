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
          this.vm.$refs.banner.bannerList = res.data
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
          this.vm.$refs.category.categoryList = res.data
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
  /**
   * 首页最新上架
   * @param pageNo
   * @param pageSize
   */
  getNews (pageNo, pageSize) {
    api.getNews(
      (res) => {
        if (res.code === '0000') {
          this.vm.$refs.news.newsList = res.data.slice(pageNo, pageSize)
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
  /**
   * 首页专题
   */
  getSpecials () {
    api.getSpecials(
      (res) => {
        if (res.code === '0000') {
          this.vm.$refs.specials.specialsList = res.data
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
  /**
   * 首页艺术家
   */
  getArtist () {
    api.getArtist(
      (res) => {
        if (res.code === '0000') {
          this.vm.$refs.artist.artistList = res.data
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
  /**
   * 首页艺视野
   */
  getInsight () {
    api.getInsight(
      (res) => {
        if (res.code === '0000') {
          this.vm.$refs.insights.insightList = res.data
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.msg})
        }
      })
  }
}
