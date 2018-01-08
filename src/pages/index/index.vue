<template>
    <div class="index-contain">
        <!--region banner -->
        <hero></hero>
        <!--endregion banner -->

        <div class="index_center">
            <!--region 推荐 -->
            <category></category>
            <!--endregion 推荐 -->

            <!--region 最新上架 -->
            <news></news>
            <!--endregion 最新上架 -->

            <!--region 开始GO -->
            <search-bar></search-bar>
            <!--endregion 开始GO -->

            <!--region 专题 -->
            <specials></specials>
            <!--endregion 专题 -->

            <!--region 艺术家 -->
            <artist></artist>
            <!--endregion 艺术家 -->

            <!--region 艺视野 -->
            <insights></insights>
            <!--endregion 艺视野 -->

            <!--region 选择艺网 -->
            <why-us></why-us>
            <!--endregion 选择艺网 -->

            <!--region 合作伙伴 -->
            <as-featured-in></as-featured-in>
            <!--endregion 合作伙伴 -->

        </div>

    </div>
</template>

<script>
  import hero from './layout/hero'
  import category from './layout/category'
  import news from './layout/news'
  import searchBar from './layout/searchBar.vue'
  import specials from './layout/specials.vue'
  import artist from './layout/artist.vue'
  import insights from './layout/insights.vue'
  import whyUs from './layout/whyUs.vue'
  import asFeaturedIn from './layout/asFeaturedIn.vue'

  export default {
    components: {
      hero, category, news, searchBar, specials, artist, insights, whyUs, asFeaturedIn
    },
    data () {
      return {}
    },
    created () {
    },
    computed: {},
    mounted () {
      this.$store.commit('UPDATE_FOOTER', '')
    },
    methods: {}
  }
</script>

<style lang="less">
    @import "../../assets/styles/pages/index";
</style>
