<template>
  <div class="user-menu f_l clearfix">
    <router-link :to="{ path:'/user/userCenter' }"><h1>会员中心</h1></router-link>
    <ul>
      <template v-for="(item,index) in menuList">
        <li class="top-bottom" :class="{ left: item.title === '代金券' }" :key="index">
          <img :src="item.imgUrl">
          <router-link :to="{ path:item.link }">{{ item.title }}</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        menuList: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.menuList = [
          {link: '/user/userMessage', title: '消息', imgUrl: require('../../assets/images/pages/user/userMessage.svg')},
          {link: '/user/information', title: '基本信息', imgUrl: require('../../assets/images/pages/user/information.svg')},
          {link: '/user/securitySet', title: '安全设置', imgUrl: require('../../assets/images/pages/user/securitySet.svg')},
          {link: '/user/order', title: '我的订单', imgUrl: require('../../assets/images/pages/user/order.svg')},
          {link: '/user/address', title: '收货地址', imgUrl: require('../../assets/images/pages/user/address.svg')},
          {link: '/user/voucher', title: '代金券', imgUrl: require('../../assets/images/pages/user/voucher.svg')},
          {link: '/user/faq', title: '常见问题', imgUrl: require('../../assets/images/pages/user/faq.svg')},
          {link: '/user/howToBuy', title: '如何购买', imgUrl: require('../../assets/images/pages/user/howtobuy.svg')},
          {link: '/user/contactUs', title: '联系我们', imgUrl: require('../../assets/images/pages/user/contactUs.svg')}
        ]
      })
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less">
  .user-menu {
    width: 244px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    h1 {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 2.1px;
      color: #ffffff;
      line-height: 100px;
      text-align: center;
      height: 100px;
      background-color: #444;
    }
    ul {
      li {
        height: 22px;
        line-height: 22px;
        position: relative;
        text-align: center;
        vertical-align: top;
        padding-bottom: 16px;
        img {
          margin-right: 10px;
          max-height: 20px;
          max-width: 20px;
          vertical-align: top;
          display: inline-block;
        }
        a {
          color: #666;
          text-decoration: none;
          vertical-align: top;
          font-size: 16px;
          letter-spacing: 1.7px;
          display: inline-block;
        }
        &:after {
          content: '';
          position: absolute;
          border: 10px solid transparent;
          border-right-color: #000;
          right: -10px;
          top: 1px;
          display: none;
        }
        &:hover, &.active {
          &:after {
            display: inline-block;
          }
          a {
            color: #000;
            font-weight: bold;
          }
        }
        &.top-bottom {
          margin-top: 14px;
        }
        &.left {
          img {
            margin-left: -16px;
          }
        }
        &:first-child {
          margin-top: 42px;
          padding-bottom: 26px;
          margin-left: -35px;
        }
      }
    }
  }
</style>
