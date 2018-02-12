<template>
  <div class="userOrder-contain clearfix">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc_content clearfix">
      <div class="order-list">
        <div class="order-nav">
          <ul>
            <template v-for="(item,index) in orderNavList">
              <li class="_menu" :class="{ active: item.active }" @click="orderMenuClick(item)">
                <span>{{ item.title }}</span></li>
            </template>
          </ul>
        </div>
        <div class="order-content">
          <template v-for="i in 2">
            <div class="order-item">
              <ul>
                <li class="clearfix">
                  <div class="item-header clearfix">
                    <span class="time">2018-01-23</span>
                    <span class="tooltip">订单编号：
                    <a href="/Shopping/OrderDetail/6p6n2oz">C0120180123010637</a>
                  </span>
                    <span class="f_r">
                    <span>已完成</span>
                  </span>
                  </div>
                  <div class="f_l item-list">
                    <template v-for="j in 2">
                      <div class="item clearfix">
                        <div class="f_l thumb">
                          <a target="_blank" href="/artworks/1k6j21">
                            <img src="https://cdn.ywart.com/yw/2017101916161817799721669.jpg_small02"></a>
                        </div>
                        <div class="f_l detail">
                          <div>
                            <span><a href="/artworks/1k6j21" target="_blank">晨</a>,</span>
                            <span><a href="/artist/12k035">刘利华</a>,</span>
                            <span>纸本水彩</span>,
                            <span>25x19cm</span>
                          </div>
                          <div class="bottom-box">
                            <p>数量：<em>1</em></p>
                            <p>价格：¥<em>450</em></p>
                            <p>画框装裱: 黑色窄框 小号卡纸 ¥80</p>
                            <p>运费：¥<em>100</em></p>
                          </div>
                        </div>
                        <div class="f_r logistics">
                          <p>准备寄送</p>
                          <p class="bottom-box">
                            <a target="_blank" href="/artworks/1k6j21#comment" class="f_r">评论作品</a>
                          </p>
                        </div>
                      </div>
                    </template>
                  </div>
                  <div class="f_l price-sum" :style="{height: 2 * 180 + 'px'}">
                    <div class="middle-box">
                      <p><strong>总价：¥<em>532</em></strong></p>
                      <p>总装裱费：¥<em>80</em></p>
                      <p>运费：¥<em>100</em></p>
                      <p>已优惠：¥<em>98</em></p>
                    </div>
                  </div>
                  <div class="f_l operation" :style="{height: 2 * 180 + 'px'}">
                    <div class="middle-box">
                      <a class="btn" href="#">确认收货</a>
                      <a class="close-time" href="#">订单超时，已失效。</a>
                      <a class="btn" href="#">去支付</a>
                      <a href="#">取消订单</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  export default {
    components: {iMenu},
    data () {
      return {
        orderNavList: [
          {title: '进行中', type: 'doing', active: false},
          {title: '全部', type: 'all', active: true},
          {title: '已完成', type: 'completed', active: false},
          {title: '已取消', type: 'cancel', active: false}
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 订单导航点击事件
       * @param item
       */
      orderMenuClick (item) {
        this.orderNavList.forEach((v, i) => {
          v.active = false
        })
        item.active = true
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userOrder";
</style>
