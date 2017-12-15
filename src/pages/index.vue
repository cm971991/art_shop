<template>
    <div class="index-contain">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides">
                <div class="item-app" :style="{ backgroundImage:'url('+slide.imgUrl+') '}">
                </div>
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
        swiperSlides: [
          {imgUrl: 'http://cdn.ywart.com/material/pc/banner/20171214120056437cef72a55.jpg', link: ''},
          {imgUrl: 'http://cdn.ywart.com/material/pc/banner/20171214120059328158c754e.jpg', link: ''},
          {imgUrl: 'http://cdn.ywart.com/material/pc/banner/2017121311481618731e79666.jpg', link: ''},
          {imgUrl: 'https://cdn.ywart.com/material/pc/banner/20171017171127871ce1a3d1c.jpg', link: ''},
          {imgUrl: 'https://cdn.ywart.com/material/pc/banner/2017101717182915718a0dd46.jpg', link: ''},
          {imgUrl: 'http://cdn.ywart.com/material/pc/banner/20171208171312933f9bf8fdb.jpg', link: ''}
        ]
      }
    },
    created () {
    },
    computed: {},
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="less">
    @import "../assets/styles/pages/index";
</style>
