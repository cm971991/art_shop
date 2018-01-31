<template>
  <nav class="collect-navigation">
    <div>
      <a class="nav-mode">
        <span class="nav-title">
          <img :src="collectImg">
        </span>
      </a>
      <router-link :to="{path:'/user/userCollect'}" :class="{ active: navType === 'userCollect' }">
        <span class="nav-title">藏品</span>
      </router-link>
      <router-link :to="{path:'/user/userWish'}" :class="{ active: navType === 'userWish' }">
        <span class="nav-title">心愿单</span>
      </router-link>
      <router-link :to="{path:'/user/userHistory'}" :class="{ active: navType === 'userHistory' }">
        <span class="nav-title">足迹</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      navType: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        navigationList: [{}],
        collectImg: require('../../assets/images/pages/user/collect.png')
      }
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
  .collect-navigation {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #aaa;
    min-width: 1180px;
    & > div {
      width: 100%;
      height: 100%;
      max-width: 1366px;
      margin: 0 auto;
      text-align: left;
      a {
        display: inline-block;
        height: 100%;
        width: 160px;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        position: relative;
        letter-spacing: 1px;
        .nav-title {
          line-height: 20px;
          height: 20px;
          margin-top: -10px;
          width: 100%;
          display: block;
          position: absolute;
          top: 50%;
          text-align: center;
          left: 0;
          color: #000;
          img {
            height: 24px;
            width: 24px;
            margin-top: -2px;
          }
        }
        &.active {
          background-color: #333333;
          .nav-title {
            color: #fff;
            font-weight: 500;
          }
        }
        &.nav-mode {
          width: 80px;
        }
      }
    }
  }
</style>
