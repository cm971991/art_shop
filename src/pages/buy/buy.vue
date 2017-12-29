<template>
    <div class="buy-art">
        <!-- region 默认查询条件 -->
        <search></search>
        <!-- endregion 默认查询条件 -->

        <!-- region 查询框 -->
        <buy-search></buy-search>
        <!-- endregion 查询框 -->

        <!-- region 列表 -->
        <content-list></content-list>
        <!-- endregion 列表 -->
    </div>
</template>

<script>
  import search from './layout/search'
  import buySearch from './layout/buySearch'
  import contentList from './layout/contentList'

  export default {
    components: {search, buySearch, contentList},
    data () {
      return {}
    },
    created () {
    },
    mounted () {
      this.$store.commit('UPDATE_FOOTER', 'simple')
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less">
    @import "../../assets/styles/pages/buy.less";
</style>
