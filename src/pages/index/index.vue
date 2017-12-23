<template>
    <div class="index-contain">
        <!--region swiper -->
        <section class="hero">
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in swiperSlides">
                    <div class="item-app" :style="{ backgroundImage:'url('+slide.imgUrl+') '}">
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
        <!--endregion swiper -->

        <div class="index_center">
            <!--region 推荐 -->
            <category></category>
            <!--endregion 推荐 -->

            <!--region 最新上架 -->
            <news></news>
            <!--endregion 最新上架 -->

            <!--region 开始GO -->
            <!--endregion 开始GO -->

            <!--region 专题 -->
            <!--endregion 专题 -->

            <!--region 艺术家 -->
            <!--endregion 艺术家 -->

            <!--region 艺视野 -->
            <!--endregion 艺视野 -->

            <!--region 选择艺网 -->
            <!--endregion 选择艺网 -->
        </div>

    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import category from './layout/category'
  import news from './layout/news'

  export default {
    components: {
      swiper, swiperSlide, category, news
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [
          {imgUrl: require('../../assets/images/pages/index/swiper/swiper_1.jpg'), link: ''},
          {imgUrl: require('../../assets/images/pages/index/swiper/swiper_2.jpg'), link: ''},
          {imgUrl: require('../../assets/images/pages/index/swiper/swiper_3.jpg'), link: ''},
          {imgUrl: require('../../assets/images/pages/index/swiper/swiper_4.jpg'), link: ''},
          {imgUrl: require('../../assets/images/pages/index/swiper/swiper_5.jpg'), link: ''},
          {imgUrl: require('../../assets/images/pages/index/swiper/swiper_6.jpg'), link: ''}
        ]
      }
    },
    created () {
    },
    computed: {},
    mounted () {},
    methods: {}
  }
</script>

<style lang="less">
    @import "../../assets/styles/pages/index";
</style>
