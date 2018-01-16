<template>
  <section class="left-info">
    <img class="artist-photo" v-lazy="artistPhotoImg">
    <div class="likes-num">
      <i class="icon-love like-artist" v-html="loveIcon"></i><span>1 喜欢</span>
    </div>
    <div class="name-level">
      张家玮
      <p>
        <img v-lazy="levelImg">
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
        loveIcon: '&#xe60b;',
        artistPhotoImg: require('../../../../static/images/artist/first/artist_photo.jpg'),
        levelImg: require('../../../../static/images/artist/first/ywart_artist_icon_level_2.png')
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
