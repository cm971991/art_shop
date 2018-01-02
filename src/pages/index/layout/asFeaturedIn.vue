<template>
    <div class="asFeaturedIn">
        <div class="title">
            <h2>合作伙伴 / AS FEATURED IN</h2>
        </div>
        <div class="contentbox">
            <template v-for="(item,index) in imgList">
                <img :src="item" :key="index">
            </template>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    data () {
      return {
        imgList: [
          require('../../../assets/images/pages/index/asFeaturedIn/logoGTJT.png'),
          require('../../../assets/images/pages/index/asFeaturedIn/logoJTL.png'),
          require('../../../assets/images/pages/index/asFeaturedIn/logoTC.png'),
          require('../../../assets/images/pages/index/asFeaturedIn/logoTDDS.png'),
          require('../../../assets/images/pages/index/asFeaturedIn/logoZS.png')
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

<style lang="less">
    .asFeaturedIn {
        display: block;
        position: relative;
        width: 100%;
        height: 160px;
        max-width: 1180px;
        margin: 0 auto;
        margin-bottom: 120px;
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
        .contentbox {
            height: 40px;
            width: 100%;
            padding: 60px 40px 0 40px;
            box-sizing: border-box;
            img {
                display: inline;
                margin-right: 85px;
                height: 40px;
                &:last-child {
                    margin: 0;
                }
            }
        }
    }
</style>
