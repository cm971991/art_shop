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
            <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
                <div class="special" @mouseenter="mouseenter($event)" @mouseleave="mouseleave($event)">
                    <img :src="item.imgUrl">
                    <div class="box">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
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
        swiperSlides: [
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/capricornus.jpg@90q',
            link: '',
            name: '周而复始 | 给摩羯的生日礼物',
            desc: '黑色、墨绿色和咖啡色是摩羯的专属幸运色，这三种颜色大气沉稳，一定会俘获摩羯的心，给摩羯新的一年带来幸运。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/tiaowengezi.jpg@90q',
            link: '',
            name: '条纹X格子 | 强迫症的治愈良药',
            desc: '在众多强迫症中，艺术家是最奇妙的存在，他们将条纹和格子整齐的排列在画布之上，使整个画面都透露着工整严谨，让人看了，只觉舒服无比。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/hunger_and_love.jpg@90q',
            link: '',
            name: '饥饿与爱 都是不治之症',
            desc: '爱情给人的安全感就像吃到好吃的食物一样，可以完全抵消掉焦虑情绪。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/minimalist.jpg@90q',
            link: '',
            name: '认识极简主义，享受精致生活',
            desc: '追求 minimalist life 的过程，就是深刻认识精致之美的过程。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/capricornus.jpg@90q',
            link: '',
            name: '周而复始 | 给摩羯的生日礼物',
            desc: '黑色、墨绿色和咖啡色是摩羯的专属幸运色，这三种颜色大气沉稳，一定会俘获摩羯的心，给摩羯新的一年带来幸运。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/tiaowengezi.jpg@90q',
            link: '',
            name: '条纹X格子 | 强迫症的治愈良药',
            desc: '在众多强迫症中，艺术家是最奇妙的存在，他们将条纹和格子整齐的排列在画布之上，使整个画面都透露着工整严谨，让人看了，只觉舒服无比。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/hunger_and_love.jpg@90q',
            link: '',
            name: '饥饿与爱 都是不治之症',
            desc: '爱情给人的安全感就像吃到好吃的食物一样，可以完全抵消掉焦虑情绪。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/minimalist.jpg@90q',
            link: '',
            name: '认识极简主义，享受精致生活',
            desc: '追求 minimalist life 的过程，就是深刻认识精致之美的过程。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/capricornus.jpg@90q',
            link: '',
            name: '周而复始 | 给摩羯的生日礼物',
            desc: '黑色、墨绿色和咖啡色是摩羯的专属幸运色，这三种颜色大气沉稳，一定会俘获摩羯的心，给摩羯新的一年带来幸运。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/tiaowengezi.jpg@90q',
            link: '',
            name: '条纹X格子 | 强迫症的治愈良药',
            desc: '在众多强迫症中，艺术家是最奇妙的存在，他们将条纹和格子整齐的排列在画布之上，使整个画面都透露着工整严谨，让人看了，只觉舒服无比。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/hunger_and_love.jpg@90q',
            link: '',
            name: '饥饿与爱 都是不治之症',
            desc: '爱情给人的安全感就像吃到好吃的食物一样，可以完全抵消掉焦虑情绪。'
          },
          {
            imgUrl: 'https://cdn.ywart.com/material/topic_cover/minimalist.jpg@90q',
            link: '',
            name: '认识极简主义，享受精致生活',
            desc: '追求 minimalist life 的过程，就是深刻认识精致之美的过程。'
          }
        ]
      }
    },
    created () {

    },
    mounted () {

    },
    computed: {},
    methods: {
      mouseenter (e) {
        // let target = e.target || null
        // if (target) {
        //   target.children[0].style.left = '0'
        //   target.children[1].style.padding = '0 30px 0 30px'
        //   target.style.width = '440px'
        //   document.querySelector('.swiper-wrapper').style.marginLeft = '-60px'
        // }
      },
      mouseleave (e) {
        // let target = e.target || null
        // if (target) {
        //   target.children[0].style.left = '-60px'
        //   target.children[1].style.paddingLeft = '0'
        //   target.style.width = '320px'
        //   document.querySelector('.swiper-wrapper').style.marginLeft = '0'
        // }
      }
    }
  }
</script>

<style lang="less">
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
