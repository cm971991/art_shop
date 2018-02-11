export default class Waterfall {
  constructor (goodsId, goodsName, imgUrl, price, cateName, createTime, brandId, brandName) {
    this.goodsId = goodsId        // 商品Id
    this.goodsName = goodsName    // 商品名称
    this.imgUrl = imgUrl          // 商品图片
    this.price = price            // 售价
    this.cateName = cateName      // 商品分类名称
    this.createTime = createTime  // 商品上架时间
    this.brandId = brandId        // 作者Id
    this.brandName = brandName    // 作者姓名
  }
}
