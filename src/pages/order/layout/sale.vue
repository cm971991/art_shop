<template>
  <div class="buy_order_panel clearfix">
    <div class="title-header">使用优惠</div>
    <div class="preferential-box">
      <ul class="box-title">
        <li>代金券</li>
        <li class="active">艺网码</li>
      </ul>
      <ul class="box-tab">
        <li class="bonus-box _hidden">
          <div class="voucher-box clearfix" style="height: 160px;">
            <template v-for="i in 4">
              <div class="list_d voucher-item" :class="[{ ndei: i<=3 },{ dei: i>3 }]">
                <div class="tr canuse">
                  <p class="p1">
                    <span>¥</span>
                    <span>300</span>
                    <span>(新用户注册)</span>
                  </p>
                  <p class="p2">
                    <span>使用条件：</span>
                    <span>满9000可用</span>
                  </p>
                  <hr>
                  <p class="p3">适用于全部(<span>每笔订单限用一张</span>)</p>
                  <p class="p4">2017-12-12 11:27-2019-01-02 03:09</p>
                  <img src="https://cdn.ywart.com/Voucher/dbg.png">
                </div>
                <span><i class="fa fa-check"></i></span>
              </div>
            </template>
            <p style="background-color: rgb(255, 255, 255);">
              <span>全部代金券 ▼</span>
            </p>
          </div>
          <div class="bottom-box">
            <p class="yh" style="display: none;">优惠券抵扣：-￥<span></span></p>
          </div>
        </li>
        <li class="panel-pay-price active">
          <div class="coupons clearfix">
            <div class="item">
              <div class="input-div">
                <input type="text" class="sale-code" placeholder="使用爱艺码">
                <input type="button" value="使&nbsp;用" class="button use">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
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
  .MyContain {
    background-color: #fff;
  }
</style>
