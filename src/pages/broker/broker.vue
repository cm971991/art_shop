<template>
  <div class="broker-contain">
    <!-- region 搜索 -->
    <search></search>
    <!-- endregion 搜索 -->

    <!-- region 列表 -->
    <work-list></work-list>
    <!-- endregion 列表 -->

  </div>
</template>

<script>
  import search from './layout/search'
  import workList from './layout/workList'

  export default {
    components: {search, workList},
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
  @import "../../assets/styles/pages/broker";
</style>
