<template>
  <section class="order-detail-contain clearfix">
    <div class="order-status">
      <span>下单</span>
      <b></b><b></b>
      <span class="active">支付</span>
      <b></b><b></b>
      <span>寄送</span>
      <b></b><b></b>
      <span>完成</span>
    </div>
    <div class="order-panel">
      <div class="title-header">订单</div>
      <div class="panel-container">
        <p>
          <span>订单金额：</span><em>¥2,700</em>
          <span class="order-detail"
                :class="{ active: detailShow}"
                @click="showOrderDetail">订单详情</span>
        </p>
        <div class="detail-show" :class="{ active: detailShow}">
          <p><span>订单号：</span><em>C0120180122010617</em></p>
          <p><span>下单时间：</span><em>2018-01-22 10:05:56</em></p>
          <p><span>送货信息：</span><em>陈明</em><em>13776626715</em><em>江苏省</em><em>南京市</em><em>玄武区</em><em>其额我去诶我去而起我</em>
          </p>
          <table>
            <template v-for="i in 2">
              <tbody>
              <tr>
                <td>商品信息：</td>
                <td>无题 1</td>
                <td>魏书龙</td>
                <td>油画</td>
                <td>21x32cm</td>
                <td></td>
                <td style="display: none;">（画框装裱: null ¥0)</td>
                <td style="display: none;">落槌价:<i>1,850</i></td>
                <td style="display: none;">买家佣金:<i>0 (0%)</i></td>
                <td>¥<i>1,850</i></td>
              </tr>
              </tbody>
            </template>
          </table>
          <p style="display: none;"><span>买家总佣金：</span>¥<em>0</em></p>
          <p style="display: none;"><span>总装裱费：</span>¥<em>0</em></p>
          <p><span>物流费：</span>¥<em>200</em></p>
          <p><span>已优惠：</span>¥<em>0</em></p>
          <p><span>备注：</span><em class="memo"></em></p>
        </div>
      </div>
    </div>
    <div class="order-panel payment">
      <div class="title-header">支付方式</div>
      <template v-for="(item,index) in paymentList">
        <p :class="{ active: item.active }">
          <b @click="choosePayType(item)"></b>
          <span>
          <img v-lazy="item.imgUrl">
          <i>{{ item.name }}</i>
        </span>{{ item.desc }}
        </p>
      </template>
    </div>
    <p class="clearfix"><a class="go-pay" @click="goPay">去支付</a></p>
    <v-dialog/>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        detailShow: false,
        paymentList: [
          {
            name: '微信支付',
            type: '1',
            desc: '推荐微信用户使用，扫二维码在线支付',
            active: false,
            imgUrl: require('../../../assets/images/pages/order/pay_weixin.png')
          },
          {
            name: '支付宝支付',
            type: '2',
            desc: '推荐有支付宝账户的用户使用',
            active: false,
            imgUrl: require('../../../assets/images/pages/order/alipay.svg')
          },
          {
            name: '转账支付',
            type: '3',
            desc: '通过您的开户银行或相应的电子银行进行转账',
            active: false,
            imgUrl: require('../../../assets/images/pages/order/transfer.svg')
          },
          {
            name: '银联支付',
            type: '4',
            desc: '无需开通网银即可实现线上支付',
            active: false,
            imgUrl: require('../../../assets/images/pages/order/icon_Unionpay.png')
          }
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
       * 显示、隐藏 订单详情
       */
      showOrderDetail () {
        this.detailShow = !this.detailShow
      },
      /**
       *
       * @param item
       */
      choosePayType (item) {
        this.paymentList.forEach((item) => {
          item.active = false
        })
        item.active = true
      },
      /**
       * 去支付
       */
      goPay () {
        let payType = false
        this.paymentList.forEach((item) => {
          if (item.active) {
            payType = true
          }
        })
        if (!payType) {
          this.$modal.show('dialog', {title: '提示', text: '请选择一种支付方式'})
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/orderDetail";
</style>
