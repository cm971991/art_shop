<template>
  <div class="contactUs-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc-content clearfix">
      <h2>联系我们</h2>
      <div class="main-block">
        <p>地址：北京市东城区工人体育馆南配楼</p>
        <p><span>电话:<a href="tel:4006057033">400-605-7033</a></span></p>
        <p><span></span></p>
        <p><span>客户服务：</span></p>
        <p><span>电话:<a href="tel:4006057033">400-605-7033</a>（工作日9:00-17:30）<br>Email:<a
            href="mailto:service@ywart.com">service@ywart.com</a></span></p>
        <p></p>
        <p><span>艺术家合作：</span></p>
        <p><span>电话:</span><a href="tel:01065532511">010-65532511</a><br>Email:<a
            href="mailto:ywart@ywart.com">ywart@ywart.com</a></p>
        <p><span></span></p>
        <p><span>公关/市场/媒介合作：</span></p>
        <p><span>电话:<a href="tel:01065533381">010-65533381</a><br>Email:<a
            href="mailto:yanxin.wang@ywart.com">yanxin.wang@ywart.com</a></span></p>
        <p><span></span></p>
        <p><span></span></p>
        <p><span>爱艺致力于给客户最专业和最贴心的艺术品在线购买服务，我们一定有不完善的地方，请相信我们正在努力。</span></p>
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
  @import "../../../assets/styles/pages/contactUs";
</style>
