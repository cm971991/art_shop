<template>
  <div class="markArt-contain">
    <!-- region 搜索 -->
    <search></search>
    <!-- endregion 搜索 -->
  </div>
</template>

<script>
  import search from './layout/search'

  export default {
    components: {search},
    data () {
      return {}
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
  @import "../../assets/styles/pages/makeArt";
</style>
