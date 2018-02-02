<template>
  <div class="discover-detail-contain">
    <div class="detail-box">
      <h1>艺术资讯|见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆</h1>
      <div class="other-info">
        <div class="left">
          <img v-lazy="img">
          <div>小爱</div>
          <div>2018年01月22日</div>
        </div>
        <div class="right">
          <span>阅读数：</span>
          <span>12</span>
        </div>
      </div>
      <div class="begin-row">
        <span>2018年杠杠开始，昊美术馆（上海）就给我们带来了一场大展</span>
      </div>
      <div class="main-body">
        <span>2018年杠杠开始，昊美术馆（上海）就给我们带来了一场大展——“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客我们带来了一场大展“见者的书信：约瑟夫.博伊斯x柏楠准登录上海美术馆，我请尽快了我请客</span>
        <img v-lazy="img">
        <img v-lazy="img">
      </div>
      <div class="share-row">
        <template v-for="(item,index) in shareList">
          <div :key="index"><img :src="item.imgUrl" @click="share(item)"/></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        img: require('../../../../static/images/buy/content/content_9.jpg'),
        shareList: [
          {imgUrl: require('../../../assets/images/pages/disconver/wechat.png'), active: false, type: 'weChat'},
          {imgUrl: require('../../../assets/images/pages/disconver/qq.png'), active: false, type: 'qq'},
          {imgUrl: require('../../../assets/images/pages/disconver/sina.png'), active: false, type: 'sina'},
          {imgUrl: require('../../../assets/images/pages/disconver/zan.png'), active: false, type: 'zan'},
          {imgUrl: require('../../../assets/images/pages/disconver/collect.png'), active: false, type: 'collect'}
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      share (item) {
        if (item.type === 'collect') {
          if (!item.active) {
            item.imgUrl = require('../../../assets/images/pages/disconver/collected.png')
          } else {
            item.imgUrl = require('../../../assets/images/pages/disconver/collect.png')
          }
        } else if (item.type === 'zan') {
          if (!item.active) {
            item.imgUrl = require('../../../assets/images/pages/disconver/zaned.png')
          } else {
            item.imgUrl = require('../../../assets/images/pages/disconver/zan.png')
          }
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/disconverDetail";
</style>
