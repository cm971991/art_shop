<template>
  <section class="order-list">
    <div class="section-title">近期订单</div>
    <div class="section-content clearfix">
      <div class="order-item">
        <router-link :to="{ path:'/user/userCenter' }">
          <div class="order-title">
            <span class="f_l">订单号：C0120180123010637</span>
            <span class="f_r">已完成</span>
          </div>
          <div class="order-content">
            <img src="https://cdn.ywart.com/yw/2017101916161817799721669.jpg@260h_260w_1e_1c_1wh_90Q">
            <div class="info">
              <p class="artwork-name">晨</p>
              <p class="price">¥630</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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
