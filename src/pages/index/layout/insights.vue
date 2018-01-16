<template>
  <div class="insights">
    <div class="title">
      <h2>艺视野 / INSIGHT</h2>
      <router-link :to="{ path: '/artworks/'}" target="_blank">
        <span class="more">
          更多
        </span>
      </router-link>
    </div>

    <div class="insight-box">
      <template v-for="(item,index) in insightList">
        <div class="insight">
          <div class="img img-hover">
            <router-link :to="{ path: '/artworks/'}" target="_blank">
              <img v-lazy="item.imgUrl">
            </router-link>
          </div>
          <router-link :to="{ path: '/artworks/'}" target="_blank">
            <h3>{{ item.title }}</h3>
          </router-link>
          <div class="line"></div>
          <p>{{ item.desc }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import insightList from '../../../../static/data/index/insightList'

  export default {
    components: {},
    data () {
      return {
        insightList: insightList
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

<style lang="less" scoped>
  .insights {
    display: block;
    position: relative;
    width: 100%;
    height: 570px;
    max-width: 1180px;
    margin: 0 auto;
    margin-bottom: 100px;
    .title {
      text-align: left;
      margin-bottom: 40px;
      height: 46px;
      line-height: 46px;
      h2 {
        letter-spacing: 3px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        color: #000000;
        margin-right: 40px;
      }
      .more {
        display: inline-block;
        cursor: pointer;
        color: #003569;
      }
    }

    .insight-box {
      width: 100%;
      .insight {
        position: relative;
        top: 0;
        display: inline-block;
        .img {
          width: 580px;
          height: 300px;
          overflow: hidden;
          position: relative;
          img {
            z-index: 1;
          }
        }
        h3 {
          margin-top: 20px;
          text-align: center;
          height: 33px;
          line-height: 33px;
          font-size: 24px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          color: #000000;
        }
        .line {
          display: block;
          margin: 20px auto;
          width: 80px;
          height: 0;
          border-bottom: 1px solid #000;
        }
        p {
          display: block;
          width: 540px;
          height: 100px;
          margin: 0 auto;
          font-size: 14px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 25px;
          text-align: justify;
          color: #000000;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
