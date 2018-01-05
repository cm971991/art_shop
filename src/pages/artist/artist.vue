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
      return {
        scroll: ''
      }
    },
    created () {
    },
    mounted () {
      this.pageStyleInit()
      window.addEventListener('mousewheel', this.mousewheel)
    },
    computed: {},
    methods: {
      pageStyleInit () {
        document.querySelector('#app').style.marginTop = '0'
        document.querySelector('.footer').style.display = 'none'
      },
      mousewheel (e) {
        console.log('e:', e)
        let body = document.querySelector('body')
        let direction = e.deltaY > 0 ? 'down' : 'up'
        if (direction === 'down') {
          this.$utils.Dom.addClass(body, 'retract')
        } else {
          this.$utils.Dom.removeClass(body, 'retract')
        }
      }
    }
  }
</script>

<style lang="less">
    @import "../../assets/styles/pages/artist";
</style>
