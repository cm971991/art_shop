import Waterfall from '../model/waterfall'
import api from '../api/makeArt_api'
import Base from './base_service'

export default class extends Base {
  getMakeArtList (params) {
    api.getMakeArtList(params,
      (res) => {
        if (res.errcode === '00000') {
          console.log('res:', res)
          let list = []
          let pb = res.data.pb.data
          if (!pb) {
            this.vm.$modal.show('dialog', {title: '提示', text: res.errmsg})
            return
          }
          pb.forEach((v, i) => {
            let cateName = v.cateList.reduce((pre, cur) => {
              if (pre.catName) {
                return pre.catName + ',' + cur.catName
              } else {
                return pre + ',' + cur.catName
              }
            })
            let model = new Waterfall(
              v.goodsInfoId,
              v.goodsInfoName,
              v.goodsInfoImgId,
              v.goodsInfoPreferPrice,
              cateName,
              this.vm.$utils.Date.timestampToTime(v.goodsInfoCreateTime, 'yyyy'),
              v.brand.brandId,
              v.brand.brandName)
            list.push(model)
          })
          this.vm.$children[1].productList = list
        } else {
          this.vm.$modal.show('dialog', {title: '提示', text: res.errmsg})
        }
      })
  }
}
