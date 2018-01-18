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
        <label class="f_l choice-all">
          <span></span> 全选
        </label>
        <div class="f_r">
          <span class="info">已选商品
            <span>0</span>件（不含运费、装裱费）
          </span>
          <span class="price">
            <span>¥</span><em>0</em>
          </span>
          <button class="ok">结算</button>
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
                  <div class="item clearfix">
                    <div class="f_l choice">
                      <label></label>
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
                        <a class="del">移除</a>
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
             style="display: inline-block;">
        <span></span> 全选
      </label>
      <a class="dels">移除</a>
      <div class="f_r">
        <span class="info">已选商品
          <span>0</span>件（不含运费、装裱费）
        </span>
        <span class="price">¥
          <em>0</em>
        </span>
        <button>结算
          <span class="_hidden" style="display: none;">
            (<span>0</span>)
          </span>
        </button>
      </div>
    </div>
    <!-- endregion 底部全选 -->
  </section>
</template>

<script>
  import cartList from '../../../static/data/shopping/cartList'

  export default {
    components: {},
    data () {
      return {
        cartList: cartList
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less">
  @import "../../assets/styles/pages/cart";
</style>
