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
            <section class="category">
                <div class="title">
                    <h2>推荐 / CATEGORY</h2>
                    <span class="more" @click="buyRedirect">更多</span>
                    <template v-for="item in categoryTitleList">
                        <div :class="{ active : item.active }" @click="categorySelect(item)">{{ item.name }}</div>
                    </template>
                </div>

                <div class="item-box active">
                    <template v-for="i in 4">
                        <div class="item">
                            <a href="/artworks/1rnpd0" target="_blank">
                                <div class="img imghover">
                                    <img src="https://cdn.ywart.com/yw/20160801173816619b90e50ac.jpg@560h_560w_1e_1c_1wh_90Q">
                                </div>
                            </a>
                            <div class="info_box">
                                <div>
                                    <a href="/artist/155xzm" target="_blank">
                                        <h3>王缺土</h3>
                                    </a>
                                    <p class="info">
                                        <a href="/artworks/1rnpd0" target="_blank">
                                        </a>
                                    </p>
                                    <h4>
                                        <a href="/artworks/1rnpd0" target="_blank">布景</a>
                                    </h4>
                                    <a href="/artworks/1rnpd0" target="_blank"></a>
                                    ，2015<br>布面油画 &nbsp;50x40cm
                                    <p></p>
                                    <p class="ysp_price">¥10,050</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </section>
            <!--endregion 推荐 -->

            <!--region 最新上架 -->
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
          {imgUrl: require('../assets/images/pages/index/swiper/swiper_1.jpg'), link: ''},
          {imgUrl: require('../assets/images/pages/index/swiper/swiper_2.jpg'), link: ''},
          {imgUrl: require('../assets/images/pages/index/swiper/swiper_3.jpg'), link: ''},
          {imgUrl: require('../assets/images/pages/index/swiper/swiper_4.jpg'), link: ''},
          {imgUrl: require('../assets/images/pages/index/swiper/swiper_5.jpg'), link: ''},
          {imgUrl: require('../assets/images/pages/index/swiper/swiper_6.jpg'), link: ''}
        ],
        categoryTitleList: [
          {name: '水彩', param: 'water', active: false},
          {name: '水墨', param: 'ink', active: false},
          {name: '版画', param: 'print', active: false},
          {name: '油画', param: 'oil', active: true}
        ],
        categoryList: [
          {artist: '王缺土', name: '布景', date: '2015', category: '布面油画', size: '50x40cm', price: '10050'},
          {artist: 'Pung刘', name: '空', date: '2013', category: '布面油画、墨', size: '70x50cm', price: '6050'},
          {artist: '李昌龙', name: '色层与边界系列90号', date: '2015', category: '布面油画', size: '40x30cm', price: '24050'},
          {artist: '刘川', name: '角落', date: '2017', category: '布面丙烯', size: '120x100cm', price: '28350'}
        ]
      }
    },
    created () {
    },
    computed: {},
    mounted () {
    },
    methods: {
      /**
       * 更多点击事件
       */
      buyRedirect () {
        let categoryItem = this.categoryTitleList.find((item) => item.active)
        this.$router.push({path: '/buy', query: {category: categoryItem.param}})
      },
      /**
       * 种类点击事件
       * @param title
       */
      categorySelect (title) {
        this.categoryTitleList.forEach((item) => {
          if (item.param !== title.param) {
            item.active = false
          }
        })
        title.active = true
      }
    }
  }
</script>

<style lang="less">
    @import "../assets/styles/pages/index";
</style>
