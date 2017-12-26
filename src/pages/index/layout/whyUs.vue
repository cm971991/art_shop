<template>
  <div class="whyUs">
    <div class="title">
      <h2>为什么选择艺网 / WHY US</h2>
    </div>
    <div class="content">
      <ul class="clearfix">
        <template v-for="(item,index) in contentList">
          <li :key="index">
            <div>
              <img :src="item.imgUrl">
              <p class="strong">{{ item.name }}</p>
              <p>{{ item.desc[0] }}</p>
              <p>{{ item.desc[1] }}</p>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="imgs">
      <div class="f_l">
        <img src="https://cdn.ywart.com/material/index/aboutus_201609091826.jpg">
        <div class="icon">
          <img :src="logoImg">
        </div>
      </div>
      <div class="f_r">
        <p class="artyouwant">YWART.COM |
          <b>ART</b>YOUWANT</p>
        <div class="line"></div>
        <p class="content">艺网倾力打造的当代原创艺术品电商交易服务平台。旨在推动艺术品消费大众化，依托于专业团队，在全国范围内持续挖掘优秀艺术品，将大量经过严格筛选的高质量原创艺术品通过线上艺术品电商平台带给大众，结合线下的体验空间，形成一整套专业、可信赖的艺术消费服务。</p>
        <a href="/about_us">了解艺网 ›</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data () {
    return {
      logoImg: require('../../../assets/images/pages/index/whyUs/logo_notext.svg'),
      contentList: [
        { imgUrl: require('../../../assets/images/pages/index/whyUs/feature1.svg'), name: '专业定价', desc: ['艺网汇聚艺术圈拥有话语权的专家团队', '为上线作品进行专业定价'] },
        { imgUrl: require('../../../assets/images/pages/index/whyUs/feature2.svg'), name: '合作代理', desc: ['艺网出售的作品均为线上下合作代理', '拥有唯一销售权'] },
        { imgUrl: require('../../../assets/images/pages/index/whyUs/feature3.svg'), name: '保真销售', desc: ['艺网出售作品均为艺术家原创作品', '绝无仿画及伪作'] }
      ]
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="less">
.whyUs {
  display: block;
  position: relative;
  width: 100%;
  height: 900px;
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 100px;
  .title {
    text-align: center;
    height: 46px;
    line-height: 46px;
    h2 {
      letter-spacing: 3px;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      font-size: 26px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      color: #000000;
    }
  }
  .content {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    text-align: center;
    position: relative;
    top: 0;
    .clearfix {
      display: block;
      &:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
    }
    li {
      float: left;
      width: 33.33%;
      min-width: 236px;
      text-align: center;
      & > div {
        display: inline-block;
        width: 280px;
        padding: 0 0 40px 0;
        border-bottom: 2px solid #eee;
        img {
          width: 140px;
        }
      }
      &:hover .strong:before,
      &:hover .strong:after {
        font-weight: 600;
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 20px;
        content: "";
        vertical-align: middle;
        border-radius: 50%;
        background-color: #000;
      }
    }
    .strong {
      font-size: 30px;
      font-weight: 400;
      display: block;
      margin: 30px 0 30px 0;
      &::before,
      &::after {
        font-weight: 600;
        display: inline-block;
        width: 6px;
        height: 6px;
        margin: 0 30px;
        content: "";
        vertical-align: middle;
        border-radius: 50%;
        background-color: #000;
        transition: all, 0.4s;
      }
    }
    p {
      font-size: 16px;
      margin: 0;
      padding: 3px 0;
      text-align: center;
    }
  }
  .imgs {
    margin-top: 60px;
    display: table;
    width: 100%;
    height: 400px;
    position: relative;

    .f_l {
      float: left;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        right: -40px;
        top: 160px;
        img {
          width: 40px;
          height: 40px;
          margin-top: 20px;
          margin-left: 20px;
        }
      }
    }

    .f_r {
      float: right;
      padding-left: 60px;
      padding-right: 108px;
      box-sizing: border-box;
      background-color: #000;
      .artyouwant {
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
        margin-top: 55px;
      }
      .line {
        height: 0;
        width: 80px;
        border-top: 1px solid #fff;
        margin: 30px 0;
      }
      p.content {
        margin-top: -3px;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 2;
        text-align: justify;
        color: #ffffff;
        top: 0px;
      }
      a {
        font-size: 14px;
        margin-top: 70px;
        color: #fff;
        text-decoration: none;
      }
    }

    div {
      width: 50%;
      height: 400px;
    }
  }
}
</style>
