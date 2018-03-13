<template>
    <div class="specials">
        <div class="title">
            <div class="prev">
                <span></span>
            </div>
            <h2>专题 / SPECIAL</h2>
            <div class="next">
                <span></span>
            </div>
        </div>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in specialsList" :key="index">
                <div class="special">
                    <img v-lazy="item.imgUrl">
                    <div class="box">
                        <h3>{{ item.topicName }}</h3>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </swiper-slide>
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
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: '.next',
            prevEl: '.prev'
          }
        },
        specialsList: []
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
    .specials {
        position: relative;
        width: 100%;
        height: 480px;
        margin-bottom: 100px;
        font-size: 0;
        display: block;
        user-select: none;
        .title {
            height: 100px;
            text-align: center;
            .prev {
                float: left;
                cursor: pointer;
                span {
                    display: inline-block;
                    vertical-align: middle;
                    width: 20px;
                    height: 20px;
                    transform: rotate(-45deg);
                    border-left: solid 1px #000;
                    border-top: solid 1px #000;
                }
            }
            .next {
                float: right;
                cursor: pointer;
                span {
                    display: inline-block;
                    vertical-align: middle;
                    width: 20px;
                    height: 20px;
                    transform: rotate(-45deg);
                    border-right: solid 1px #000;
                    border-bottom: solid 1px #000;
                }
            }
            .prev,
            .next {
                width: 200px;
                height: 100px;
                line-height: 100px;
                text-align: center;
            }

            h2 {
                letter-spacing: 3px;
                line-height: 100px;
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
        .special {
            width: 320px;
            height: 380px;
            overflow: hidden;
            position: relative;
            overflow: hidden;
            display: inline-block;
            margin-right: 30px;
            user-select: none;
            transition: width 0.2s;
            transition: all, 0.5s;
            transition-timing-function: ease-out;
            &:hover {
                transform: scale(1.05, 1.05);
            }
            img {
                width: 440px;
                height: 380px;
                position: absolute;
                top: 0;
                left: -60px;
                transition: left 0.2s;
            }
            .box {
                width: 100%;
                height: 380px;
                background-color: rgba(0, 0, 0, 0.2);
                position: absolute;
                top: 0;
                left: 0;
                padding-left: 0;
                transition: padding 0.2s;
                h3 {
                    width: 320px;
                    padding: 30px;
                    box-sizing: border-box;
                    font-size: 30px;
                    font-weight: 600;
                    font-style: normal;
                    font-stretch: normal;
                    color: #ffffff;
                    max-height: 145px;
                    white-space: normal;
                }
                p {
                    width: 320px;
                    box-sizing: border-box;
                    padding-left: 30px;
                    padding-right: 90px;
                    font-size: 14px;
                    line-height: 20px;
                    max-height: 220px;
                    color: #ffffff;
                    white-space: normal;
                }
            }
        }
    }
</style>
