<template>
  <div class="order-panel clearfix">
    <div class="title-header">价格计算</div>
    <div class="result f_r">
      <div class="detailed">
        <p>商品：¥<em>29,850</em></p>
        <p>总装裱费：¥<em>0</em></p>
        <p>物流费：¥<em>600</em></p>
        <p class="preferential">艺网码优惠：-¥<em>0</em></p>
        <p class="voucher-used">代金券抵扣：-¥<em>300</em></p>
      </div>
      <div class="sum">
        <b>合计：</b>
        <em>¥30,450</em>
      </div>
      <div class="submit">
        <button type="button" @click="submitOrder">提交订单</button>
      </div>
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
    methods: {
      submitOrder () {
        this.$router.push({path: './orderDetail'})
      }
    }
  }
</script>
