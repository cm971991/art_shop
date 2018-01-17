<template>
  <div class="artist-second">
    <div class="experience clearfix">
      <div>
        <p>策展</p>
        <p></p>
        <p class="year">2011</p>
        <p>追寻——中国美院青年独立影像展&nbsp;&nbsp;杭州</p>
        <p></p>
        <p class="year">2015</p>
        <p>假正经——艺术猫《日常之中》系列首展&nbsp;&nbsp;杭州</p>
        <p></p>
        <p>个展</p>
        <p></p>
        <p class="year">2014</p>
        <p>狮&nbsp;&nbsp;这个画廊&nbsp;&nbsp;北京</p>
        <p></p>
        <p>群展</p>
        <p></p>
        <p class="year">2015</p>
        <p>10cm³——春天来了II&nbsp;&nbsp;杭州</p>
        <p>第五届转塘艺术双年展&nbsp;&nbsp;转塘</p>
        <p>光与影——微雨艺术邀请展&nbsp;&nbsp;杭州</p>
        <p>薪火2015——油画家公益美展&nbsp;&nbsp;杭州</p>
        <p>Inter-Youth国际高等艺术学院青年绘画展&nbsp;&nbsp;杭州</p>
        <p></p>
        <p class="year">2014</p>
        <p>杭州艺术博览会&nbsp;&nbsp;杭州</p>
        <p>上海西岸艺术与设计博览会&nbsp;&nbsp;上海</p>
        <p>2013哈姆丹国际摄影奖（HIPA）&nbsp;&nbsp;迪拜</p>
        <p></p>
        <p class="year">2013</p>
        <p>2013届大艺博&nbsp;&nbsp;广州</p>
        <p>上海青年美术大展&nbsp;&nbsp;上海</p>
        <p>中国美院微光作品展&nbsp;&nbsp;杭州</p>
        <p></p>
        <p class="year">2011</p>
        <p>珠海三分钟主题影展&nbsp;&nbsp;珠海</p>
        <p></p>
        <p class="year">2009</p>
        <p>纪念中华人民共和国建国60周年摄影展&nbsp;&nbsp;北京</p>
      </div>
    </div>
    <div class="rightContainer">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
          <router-link
            :to="{ path: '/artworks/' + item.id +''}"
            :style="{ backgroundImage:'url('+ item.imgUrl +') '}"
            target="_blank"></router-link>
          <div class="cover">
            <div class="text-wrapper">
              <h3 class="single_show">{{ item.artistName }}</h3>
              <p class="single_show">创作时间：{{ item.date }}</p>
              <p class="single_show">材料：{{ item.type }}</p>
              <p class="single_show">尺寸：{{ item.size }}cm</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import secondList from '../../../../static/data/artist/secondList'

  export default {
    components: {swiper, swiperSlide},
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet (index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          }
        },
        swiperSlides: secondList
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

<style>
  .swiper-pagination-bullet-custom {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
</style>
