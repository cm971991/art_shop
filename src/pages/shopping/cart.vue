<template>
  <section class="cart-contain">
    <!-- region 头部信息 -->
    <div class="cart-head clearfix">
      <h1>我的购物车</h1>(<span>2</span>)
    </div>
    <!-- endregion 头部信息 -->

    <!-- region 购物车列表 -->
    <section class="cart-main">
      <!-- region 全选 -->
      <div class="cart-choice-all clearfix">
        <label class="f_l choice-all" :class="{ active: checkedProductNum === parseInt(cartListTotal) }"
               @click="choiceAll">
          <span></span> 全选
        </label>
        <div class="f_r">
          <span class="info">已选商品
            <span>{{ checkedProductNum }}</span>件（不含运费、装裱费）
          </span>
          <span class="price">
            <span>¥</span>
            <em>{{ totalPrice }}</em>
          </span>
          <button :class="{ active: checkedProductNum > 0 }" @click="Settle">结算</button>
        </div>
      </div>
      <!-- endregion 全选 -->
      <!-- region 商品列表 -->
      <div class="cart-list">
        <template v-for="cart in cartList">
          <ul>
            <li>
              <div class="choice-item">
                <p class="daytime">{{ cart.date }}</p>
              </div>

              <div>
                <template v-for="item in cart.list">
                  <div class="item clearfix" :class="{ active: item.ischecked }">
                    <div class="f_l choice">
                      <label @click="choiceItem(item)"></label>
                    </div>
                    <div class="f_l info-box">
                      <div class="f_l thumb">
                        <router-link :to="{ path: '/artworks/' + item.id +''}" target="_blank">
                          <div class="img"
                               :style="{ backgroundImage:'url('+ item.imgUrl +') '}"></div>
                        </router-link>
                      </div>
                      <div class="f_l detail">
                        <div class="title">{{ item.name }}</div>
                        <p class="pc-name">
                          <router-link :to="{ path: '/artist/' + item.artistId +''}" target="_blank">{{ item.artist }}
                          </router-link>
                        </p>
                        <p>{{ item.size }}cm</p>
                      </div>
                      <div class="f_l price-unit">
                        <p class="now price">
                          ¥ <span>{{ item.price }}</span>
                        </p>
                      </div>
                      <div class="f_l op">
                        <a class="del" @click="deleteItem(item)">移除</a>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </li>
          </ul>
        </template>
      </div>
      <!-- endregion 商品列表 -->
    </section>
    <!-- endregion 购物车列表 -->

    <!-- region 底部全选 -->
    <div class="cart-choice-all fix-bottom clearfix">
      <label class="f_l choice-all"
             :class="{ active: checkedProductNum === parseInt(cartListTotal) }"
             @click="choiceAll()">
        <span></span> 全选
      </label>
      <a class="dels" @click="deleteAll()">移除</a>
      <div class="f_r">
        <span class="info">已选商品
          <span>{{ checkedProductNum }}</span>件（不含运费、装裱费）
        </span>
        <span class="price">
          <span>¥</span>
          <em>{{ totalPrice }}</em>
        </span>
        <button :class="{ active: checkedProductNum > 0 }" @click="Settle">结算
          <span :style="{ display: checkedProductNum > 0 ? 'inline': 'none' }">
            (<span>{{ checkedProductNum }}</span>)
          </span>
        </button>
      </div>
    </div>
    <!-- endregion 底部全选 -->

    <v-dialog/>
  </section>
</template>

<script>
  import cartList from '../../../static/data/shopping/cartList'

  export default {
    components: {},
    data () {
      return {
        cartList: [], // 商品列表
        cartListTotal: 0, // 商品总数
        totalPrice: 0, // 总价
        checkedProductNum: 0, // 已选商品数量
        checkAll: false, // 是否全选
        checkAllCounter: 0 // 计算全选点击次数 单数：全选 双数：反选
      }
    },
    created () {
    },
    mounted () {
      this.$nextTick(() => {
        document.querySelector('.footer').style.display = 'none'
        this.cartList = cartList.data.list
        this.cartListTotal = cartList.data.total
      })
    },
    computed: {},
    methods: {
      /**
       * 单个商品选择
       * @param item
       */
      choiceItem (item) {
        if (typeof item.ischecked === 'undefined') {
          this.$set(item, 'ischecked', true)
        } else {
          item.ischecked = !item.ischecked
        }
        this.calcTotalPrice()
      },
      /**
       * 全选、反选
       */
      choiceAll () {
        this.checkAllCounter++
        this.cartList.forEach((cart) => {
          cart.list.forEach((item) => {
            this.checkAll = !(this.checkAllCounter % 2 === 0)
            if (typeof item.ischecked === 'undefined') {
              this.$set(item, 'ischecked', this.checkAll)
            } else {
              item.ischecked = this.checkAll
            }
          })
        })
        this.calcTotalPrice()
      },
      /**
       * 单个商品删除
       * @param item
       */
      deleteItem (item) {
        this.$modal.show('dialog', {
          title: '确认',
          text: '您确定要移除吗?',
          buttons: [
            {
              title: '确定',
              default: true,
              handler: () => {
                this.cartList.forEach((val) => {
                  let index = val.list.indexOf(item)
                  if (index !== -1) {
                    val.list.splice(index, 1)
                  }
                })
                this.calcTotalPrice()
                this.$modal.hide('dialog')
              }
            },
            {title: '取消'}
          ]
        })
        return false
      },
      /**
       * 全部删除
       */
      deleteAll () {
        if (this.checkedProductNum > 0) {
          this.$modal.show('dialog', {
            title: '确认',
            text: '你确定要移除选中的商品吗?',
            buttons: [
              {
                title: '确定',
                default: true,
                handler: () => {
                  let ids = []
                  this.cartList.forEach((val) => {
                    let list = val.list
                    list.forEach((item) => {
                      if (item.ischecked !== 'undefined' && item.ischecked) {
                        ids.push(item.id)
                      }
                    })
                  })
                  console.log('deleteAll ids:', ids)
                  this.calcTotalPrice()
                  this.$modal.hide('dialog')
                }
              },
              {title: '取消'}
            ]
          })
        }
        return false
      },
      /**
       * 结算
       */
      Settle () {
        let userInfo = this.$store.getters.userInfo
        if (userInfo && userInfo.userId && userInfo.tooken) {
          this.$router.push({path: '/order'})
        } else {
          this.$store.commit('SHOW_LOGIN', true)
        }
      },
      /**
       * 计算总价
       */
      calcTotalPrice () {
        this.checkedProductNum = 0
        this.totalPrice = 0
        this.cartList.forEach((cart) => {
          cart.list.forEach((item) => {
            if (item.ischecked) {
              this.checkedProductNum++
              this.totalPrice += parseInt(item.price)
            }
          })
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/pages/cart";
</style>
