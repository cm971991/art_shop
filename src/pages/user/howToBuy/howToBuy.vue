<template>
  <div class="howToBuy-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc-content clearfix">
      <h2>如何购买</h2>
      <div class="main-block">
        <div class="part"><p>购买说明</p></div>
        <div>
          <h4>第一步 注册：</h4>
          <p>获得爱艺账号只需一个手机号码或邮箱即可完成注册。</p>
        </div>
        <hr>
        <div>
          <h4>第二步 挑选艺术品两种方式：</h4>
          <p>1，搜索关键字或者艺术家的名字，能找到您想要的艺术品将选中的艺术品放进购物车，以免错过</p>
          <p>2，通过爱艺艺术品搜索器搜索，根据主色调，风格，类别，尺寸对爱艺万余件艺术品进行筛选</p>
          <p>*关于艺术品问题，可以拨打客服电话400-605-7033进行咨询，也可以通过页面右侧的在线客服与我们取得联系*</p>
        </div>
        <hr>
        <div>
          <h4>第三步 下单：</h4>
          <p><span>拍下艺术品点击“立刻购买”或者购物车结算，可以提交订单·提交订单前请填写收货地址，确认购物信息·请放心，此时并不会进行扣款。</span></p>
        </div>
        <hr>
        <div>
          <h4>第四步 支付：</h4>
          <p>爱艺支持微信支付和支付宝在线支付。</p>
          <p>如金额超出在线支付上限，请选择银行汇款方式，下单后通过网银或者柜台转账给爱艺，汇款时请在备注栏标注订单号。我们会在收到到款通知后与您电话确认。</p>
        </div>
        <hr>
        <h4>第五步 收货&amp;评价：</h4>
        <p>收到艺术品，在爱艺订单页面点击“确认收货”·对艺术品满意给出评价，如购买过程中遇到问题可以申请退款。</p>
        <p>*如果需要发票可以在购买后与客服联系，提供发票信息*</p>
        <hr>
        <div class="part"><p>关于退换货</p></div>
        <h4>1 取消订单</h4>
        <p>您在爱艺付款下单后，订单在未确认状态下可以取消订单，如果已经支付订单爱艺客服会在1个工作日内与您联系退款事宜，确认后将全额为您退款，一旦订单确认本次购买不可以取消。</p>
        <hr>
        <h4>2 如遇到物流破损</h4>
        <p>如果您在收到艺术品后发现艺术品出现损坏，可以拒收。爱艺客服将会在1个工作日内与您联系，艺术品退回确认后，爱艺将全额退款（包含运费）。</p>
        <p>当客户签收后发现破损，爱艺将不再接受退换，如有问题可以与爱艺客服联系。</p>
        <hr>
        <h4>3 货品不满意退货</h4>
        <p>由于爱艺所售商品特殊，爱艺不接受无理由退换货，如果客户有退货要求，需要在收到货5个工作日内提出，爱艺将根据具体情况与客户协商收取一定退货费用，费用不超过艺术品总值5%。</p>
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
  @import "../../../assets/styles/pages/howToBuy";
</style>
