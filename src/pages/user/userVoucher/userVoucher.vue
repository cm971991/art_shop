<template>
  <div class="userVoucher-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc_content clearfix">
      <table cellspacing="0">
        <tbody>
        <tr class="title">
          <td>代金券</td>
          <td>生效时间</td>
          <td>过期时间</td>
          <td>状态</td>
        </tr>
        <template v-for="i in 3">
          <tr>
            <td>
              <div>
                <p class="p1"><span>¥</span><span>100</span><span>(感恩节大回馈)</span></p>
                <p class="p2"><span>使用条件：</span><span>满3000可用</span></p>
                <hr>
                <p class="p3">适用于全部（<span>每笔订单限用一张</span>）</p></div>
            </td>
            <td>2017-11-29 22:51:56</td>
            <td>2017-12-29 04:48:10</td>
            <td><span>已过期</span></td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  export default {
    components: {iMenu},
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
  @import "../../../assets/styles/pages/userVoucher";
</style>
