<template>
  <div class="userCollect-contain">
    <navigation :userNavType="userNavType"></navigation>
    <div class="container">
      <template v-for="(item,index) in productList">
        <div class="item-box" :key="index">
          <div class="left">
            <img v-lazy="item.imgUrl">
          </div>
          <div class="middle">
            <h4>{{ item.artistName }}</h4>
            <h4>{{ item.name }}</h4>
            <h5>材质：{{ item.type }}</h5>
            <h5>尺寸：{{ item.size }}</h5>
            <h5>购买价格：￥{{ item.price }}</h5>
            <h5>购买日期：{{ item.date }}</h5>
          </div>
          <div class="right">
            <span>出价转让</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import navigation from '../../../components/base/iNavigation'

  export default {
    components: {navigation},
    data () {
      return {
        userNavType: 'userCollect',
        productList: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.productList = [
          {
            artistId: '123',
            artistName: '朱振洪',
            name: '悠然 高温颜色釉瓷板',
            type: '陶瓷',
            imgUrl: require('../../../../static/images/buy/content/content_7.jpg'),
            size: '80x90cm',
            price: '450',
            date: '2018年1月24日'
          },
          {
            artistId: '123',
            artistName: '朱振洪',
            name: '悠然 高温颜色釉瓷板',
            type: '陶瓷',
            imgUrl: require('../../../../static/images/buy/content/content_6.jpg'),
            size: '80x90cm',
            price: '450',
            date: '2018年1月24日'
          },
          {
            artistId: '123',
            artistName: '朱振洪',
            name: '悠然 高温颜色釉瓷板',
            type: '陶瓷',
            imgUrl: require('../../../../static/images/buy/content/content_8.jpg'),
            size: '80x90cm',
            price: '450',
            date: '2018年1月24日'
          },
          {
            artistId: '123',
            artistName: '朱振洪',
            name: '悠然 高温颜色釉瓷板',
            type: '陶瓷',
            imgUrl: require('../../../../static/images/buy/content/content_9.jpg'),
            size: '80x90cm',
            price: '450',
            date: '2018年1月24日'
          }
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
  @import "../../../assets/styles/pages/userCollect";
</style>
