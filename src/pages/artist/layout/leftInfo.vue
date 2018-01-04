<template>
    <section class="left-info">
        <img class="artist-photo"
             src="https://cdn.ywart.com/ysj/20160826184250795bd273303.jpg@200h_200w_1e_1c_1wh_90Q">
        <div class="likes-num">
            <i class="icon-love like-artist" v-html="loveIcon"></i><span>1 喜欢</span>
        </div>
        <div class="name-level">
            张家玮
            <p>
                <img src="https://cdn.ywart.com/material/artistIcon/ywart_artist_icon_level_2.png">
                <span>已售出2件作品</span>
            </p>
        </div>
        <p class="resume">
            出生于福建厦门<br>
            中国美术学院美术教育系在读研究生<br>
            导师李勇先生<br><br>
        </p>
        <div class="share-component">
        </div>
    </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        loveIcon: '&#xe60b;'
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

</style>
