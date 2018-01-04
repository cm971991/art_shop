<template>
    <div class="artist-contain">
        <artist-first></artist-first>
        <artist-second></artist-second>
    </div>
</template>

<script>
  import artistFirst from './layout/artistFirst'
  import artistSecond from './layout/artistSecond'

  export default {
    components: {artistFirst, artistSecond},
    data () {
      return {}
    },
    created () {
    },
    mounted () {
      this.pageStyleInit()
    },
    computed: {},
    methods: {
      pageStyleInit () {
        document.querySelector('#app').style.marginTop = '0'
        document.querySelector('.footer').style.display = 'none'
      }
    }
  }
</script>

<style lang="less">
    @import "../../assets/styles/pages/artist";
</style>
