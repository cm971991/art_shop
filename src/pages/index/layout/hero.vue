<template>
    <div class="hero">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(banner,index) in bannerList" :key="index">
                <div class="item-app" :style="{ backgroundImage:'url('+ banner.imgUrl +') '}"></div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper, swiperSlide
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        bannerList: []
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
    .hero {
        width: 100%;
        min-width: 1180px;
        height: 420px;
        position: fixed;
        top: 68px;
        margin-top: 0;
        z-index: 0;
        background-color: #fff;
        .item-app {
            width: 100%;
            height: 420px;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            text-align: center;
        }
    }
</style>
