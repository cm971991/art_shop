<template>
  <div class="userCenter-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc-content clearfix">
      <top-info></top-info>
      <order-list></order-list>
      <wish-list></wish-list>
      <travel-list></travel-list>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  const topInfo = () => import('./layout/topInfo')
  const orderList = () => import('./layout/orderList')
  const wishList = () => import('./layout/wishList')
  const travelList = () => import('./layout/travelList')
  export default {
    components: {
      iMenu, topInfo, orderList, wishList, travelList
    },
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
  @import "../../../assets/styles/pages/userCenter";
</style>
