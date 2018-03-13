<template>
  <section class="work-desc-section">
    <p>艺术评析</p>
    <div>
      <span class="mark mark-left">“</span>
      <span class="mark mark-right">”</span>
      <i>
        两只小猫被一片飘在空中的羽毛吸引，连最爱的毛线球都被弃在一边。原来高冷的喵星人也会有如此萌萌哒的一面，让人心生喜爱。<br>
      </i>
    </div>
    <div class="evaluation">
      <img v-lazy="workDescImg1">
      <div class="desc">
        <p>猫的性格实在有些古怪。说它老实吧，它有时候的确很乖。它会找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。可是，它决定要出去玩玩，就会出去走一天一夜，任凭谁怎么呼唤，它也不肯回来。——老舍·《猫》</p>
      </div>
    </div>
    <div class="evaluation">
      <img v-lazy="workDescImg2">
      <div class="desc">
        <p>艺术品细节展示。</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    name: 'workDesc',
    data () {
      return {
        workDescImg1: require('../../../../static/images/artworks/workDesc_1.jpg'),
        workDescImg2: require('../../../../static/images/artworks/workDesc_2.jpg')
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

