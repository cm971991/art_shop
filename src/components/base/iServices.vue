<template>
  <div class="services-contain" v-show="show">
    <div class="services-btn">
      <i class="icon-qrcode" v-html="qrcodeIcon"></i>
      <span>下载APP</span>
      <img :src="codeIcon">
    </div>
    <div class="services-anchor" @click="anchor">
      <i class="icon-arrow-top" v-html="topIcon"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        qrcodeIcon: '&#xe607;',
        topIcon: '&#xe765;',
        codeIcon: require('../../assets/images/pages/index/footer/AndroidDownQRcode.png')
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      anchor () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="less">
  .services-contain {
    display: block;
    z-index: 2147483647;
    position: fixed;
    bottom: 20px;
    right: 0;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    border: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
    background-color: transparent;
    .services-btn, .services-anchor {
      display: block;
      width: 40px;
      height: auto;
      max-height: 90vh;
      padding: 10px 0;
      color: #bbb;
      text-align: center;
      background-color: #1f1f1f;
      cursor: pointer;
      text-decoration: none;
      float: none;
      margin: 0
    }
    .services-btn {
      i {
        display: block;
        width: 20px;
        height: 20px;
        margin: 0 10px 10px;
        padding: 0;
        border: 0;
        background: none;
        float: none;
      }
      span {
        display: block;
        box-sizing: content-box;
        max-height: 80%;
        padding: 0 10px;
        margin-top: 10px;
        text-align: center;
        overflow-x: hidden;
        line-height: 1.428571429;
        font-size: 12px;
        word-break: break-all;
        word-wrap: break-word;
        letter-spacing: 5px;
        writing-mode: vertical-rl;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: none;
        width: auto;
        height: auto;
        margin: 0;
        border: 0;
        background: none;
      }
      img {
        display: none;
        width: 120px;
        height: 120px;
        position: absolute;
        top: 2px;
        left: -120px;
      }
      &:hover img {
        display: block;
      }
    }
    .services-anchor {
      border-top: 1px solid #bbb;
      i {
        font-size: 18px;
      }
    }
  }
</style>
