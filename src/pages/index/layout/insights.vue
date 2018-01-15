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

<script type="text/ecmascript-6">
  export default {
    components: {},
    data () {
      return {
        insightList: [
          {
            imgUrl: 'https://cdn.ywart.com/material/index/leftsight.jpg',
            title: '爱艺 | 携手顶级专业艺术机构开创合作新模式',
            desc: '全球领先艺术电商（YWART.COM）倾力打造最高水准的原创艺术品消费平台。爱艺网络科技旗下高端新版块“藏艺术”分享会近日亮相京城艺术地标798。著名当代艺术策展人、艺网创始人朱彤介绍，藏艺术致力于“吸引更多圈外藏家”，打破收藏级艺术品的固有圈层，开启“线上交易+收藏”的艺术互联网模式。',
            link: ''
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/view1/index/wujie.jpg@90q',
            title: 'UNBOUNDED 意大利曼特尼亚美术馆中国当代艺术展',
            desc: '意大利时间3月29日下午六点，“无界——中国当代艺术展”在意大利的曼特尼亚美术馆揭开序幕。此次展览的主题“无界”可以被理解为“无穷大”或者“无边界”，它既是一次中国当代艺术和文艺复兴绘画之间的对话，也是一次让世界再次感知中国当代艺术魅力的契机。',
            link: ''
          }
        ]
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
