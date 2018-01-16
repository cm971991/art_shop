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
        <template v-for="i in 3">
          <ul>
            <li>
              <div class="choice-item">
                <p class="daytime">2018-01-16</p>
              </div>

              <div>
                <template v-for="j in 2">
                  <div class="item clearfix">
                    <div class="f_l choice">
                      <label></label>
                    </div>
                    <div class="f_l info-box">
                      <div class="f_l thumb">
                        <a href="/artworks/1k6wwe?agentcode=null">
                          <div class="img"
                               style="background-image: url(&quot;https://cdn.ywart.com/yw/201607041135276303ff377a9.jpg_small01&quot;);"></div>
                        </a>
                      </div>
                      <div class="f_l detail">
                        <div class="title">战俘R</div>
                        <p class="pc-name">
                          <a href="/artist/1yxjw9">祖萌</a>
                        </p>
                        <p>20x30cm</p>
                        <p class="number _hidden">
                          <span>1</span>件
                        </p>
                        <p style="display: none;">版号:null</p>
                        <p style="display: none;">画框装裱: null</p>
                        <p style="display: none;">已售</p>
                      </div>
                      <div class="f_l price-unit">
                        <p class="now price" style="display:inline-block">
                          ¥ <span>5,050</span>
                        </p>
                        <p class="old" style="vertical-align: bottom; display: none;">
                          <del class="price">¥
                            <del>5,050</del>
                          </del>
                        </p>
                      </div>
                      <div class="f_l op">
                        <a href="javascript:;" class="del">移除</a>
                      </div>
                    </div>
                  </div>
                  <a class="mz" style="display: none;">
                    <div><img/></div>
                    <span></span>
                  </a>
                </template>
              </div>
            </li>
          </ul>
        </template>
      </div>
      <!-- endregion 商品列表 -->
    </section>
    <!-- endregion 购物车列表 -->


  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
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
