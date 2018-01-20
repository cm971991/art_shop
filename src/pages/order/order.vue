<template>
  <section class="order-contain">
    <div class="order-status">
      <span class="active">下单</span>
      <b></b><b></b>
      <span>支付</span>
      <b></b><b></b>
      <span>寄送</span>
      <b></b><b></b>
      <span>完成</span>
    </div>

    <!-- region 收货人信息 -->
    <consignee></consignee>
    <!-- endregion 收货人信息 -->

    <!-- region 购买商品 -->
    <buy-product></buy-product>
    <!-- endregion 购买商品 -->

    <!-- region 备注 -->
    <textarea class="remark" placeholder="购买备注：如有其它需求请留言给我们..."></textarea>
    <!-- endregion 备注 -->

    <!-- region 使用优惠 -->
    <sale></sale>
    <!-- endregion 使用优惠 -->

    <!-- region 计算价格 -->
    <result></result>
    <!-- endregion 计算价格 -->

  </section>
</template>

<script>
  import consignee from './layout/consignee'
  import buyProduct from './layout/buyProduct'
  import sale from './layout/sale'
  import result from './layout/result'

  export default {
    components: {consignee, buyProduct, sale, result},
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
  @import "../../assets/styles/pages/order";
</style>
