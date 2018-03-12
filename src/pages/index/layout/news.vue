<template>
    <div class="news">
        <div class="title">
            <h2>最新上架 / NEW</h2>
            <div class="refresh" :class="{ active : refreshing }" @click="refresh">
                <i class="icon-refresh" v-html="refreshIcon"></i>
                <span>换一换</span>
            </div>
        </div>

        <div class="new-box">
            <template v-for="item in newsList">
                <div class="new" :class="{ active: rotateShow, out: roteteHide }">
                    <div class="front" @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
                        <img v-lazy="item.imgUrl">
                        <router-link :to="{ path: '/artworks/' + item.id +''}" target="_blank">
                            <div class="info_box" style="display: none">
                                <div>
                                    <h3>{{ item.artist }}</h3>
                                    <h4>{{ item.name }}</h4>
                                    <span class="info"><br>{{ item.type }} &nbsp;{{ item.size }}</span>
                                    <p class="year">{{ item.date }}</p>
                                    <p class="ysp_price">{{ item.price }}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        refreshing: false,
        roteteHide: false,
        rotateShow: false,
        refreshIcon: '&#xe600;',
        newsList: []
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      refresh () {
        this.refreshing = true
        this.roteteHide = true
        setTimeout(() => {
          this.refreshing = false
          this.roteteHide = false
          this.rotateShow = true
          this.$emit('newsRefresh', {pageNo: 10, pageSize: 20})
        }, 2000)
      },
      mouseEnter (e) {
        if (e && e.target) {
          e.target.querySelector('.info_box').style.display = 'table-cell'
          let $new = e.target.parentElement
          this.$utils.Dom.addClass($new, 'img-hover')
        }
      },
      mouseLeave (e) {
        if (e && e.target) {
          e.target.querySelector('.info_box').style.display = 'none'
          let $new = e.target.parentElement
          this.$utils.Dom.removeClass($new, 'img-hover')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .news {
        user-select: none;
        display: block;
        position: relative;
        width: 100%;
        max-width: 1180px;
        margin: 80px auto;
        .title {
            text-align: left;
            margin-bottom: 40px;
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
                margin-right: 40px;
            }
            .refresh {
                display: inline-block;
                cursor: pointer;
                i, span {
                    margin-right: 5px;
                    color: #003569;
                    vertical-align: middle;
                    font-size: 20px;
                    cursor: pointer;
                }
                span {
                    font-size: 16px;
                }
                &.active i {
                    display: inline-block;
                    animation: rotate 1s linear infinite;
                }
                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            }
        }

        .new-box {
            width: 100%;
            height: 280px;
            position: relative;
            top: 0;
            .new {
                float: left;
                position: relative;
                word-spacing: normal;
                margin-right: 20px;
                margin-bottom: 20px;
                width: 130px;
                height: 130px;
                perspective: 700px;
                overflow: hidden;
                .front {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        transition: all, 0.6s;
                    }
                    a {
                        position: absolute;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .info_box {
                        width: 130px;
                        height: 130px;
                        display: none;
                        background: RGBA(0, 0, 0, 0.5);
                        color: #fff;
                        font-size: 12px;
                        text-align: center;
                        vertical-align: middle;
                        div {
                            display: inline-block;
                        }
                        h3, h4 {
                            color: #fff;
                            font-size: 12px;
                            font-weight: 500;
                        }
                        .year {
                            text-align: center;
                            font-weight: 500;
                        }
                    }
                }
                &:nth-child(1), &:nth-child(2) {
                    width: 280px;
                    height: 280px;
                    .info_box {
                        width: 280px;
                        height: 280px;
                        .info {
                            display: inline;
                        }
                    }
                }
                &:nth-child(6), &:nth-child(10) {
                    margin-right: 0;
                }
                @keyframes rotateshow {
                    0% {
                        opacity: 0;
                    }
                    49% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                @keyframes rotatehide {
                    0% {
                        opacity: 1;
                    }
                    49% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                &:nth-child(1).active {
                    animation: rotateshow 2s ease-in-out forwards;
                }
                &:nth-child(1).out {
                    animation: rotatehide 2s ease-in-out forwards;
                }
                &:nth-child(2).active {
                    animation: rotateshow 2s ease-in-out forwards;
                }
                &:nth-child(2).out {
                    animation: rotatehide 2s ease-in-out forwards;
                }
                &:nth-child(3).active, &:nth-child(7).active {
                    animation: rotateshow 2s ease-in-out forwards;
                }
                &:nth-child(3).out, &:nth-child(7).out {
                    animation: rotatehide 2s ease-in-out forwards;
                }
                &:nth-child(4).active, &:nth-child(8).active {
                    animation: rotateshow 2s ease-in-out forwards;
                }
                &:nth-child(4).out, &:nth-child(8).out {
                    animation: rotatehide 2s ease-in-out forwards;
                }
                &:nth-child(5).active, &:nth-child(9).active {
                    animation: rotateshow 2s ease-in-out forwards;
                }
                &:nth-child(5).out, &:nth-child(9).out {
                    animation: rotatehide 2s ease-in-out forwards;
                }
                &:nth-child(6).active, &:nth-child(10).active {
                    animation: rotateshow 2s ease-in-out forwards;
                }
                &:nth-child(6).out, &:nth-child(10).out {
                    animation: rotatehide 2s ease-in-out forwards;
                }
            }
        }
    }
</style>
