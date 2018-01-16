<template>
  <section class="right-info"
           :style="[{ backgroundImage:'url('+ rightInfoImg +') '},{backgroundColor:'#666'}]">
    <div class="linear-gradient"></div>
    <a class="go-right" @click="goRight"><span></span></a>
    <div class="artist-name-right">
      <p class="name">张家玮</p>
    </div>
    <div class="bottom-box">
      <div class="artist-http">https://www.ywart.com/artists/i/zhangjiawei</div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        rightInfoImg: require('../../../../static/images/artist/first/rightInfo.jpg')
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      goRight () {
        this.$utils.Dom.addClass(document.querySelector('body'), 'retract')
      }
    }
  }
</script>

<style lang="less">

</style>
