<template>
  <div class="index-contain">
    <!--region banner -->
    <hero ref="banner"></hero>
    <!--endregion banner -->

    <div class="index_center">
      <!--region 推荐 -->
      <category ref="category"></category>
      <!--endregion 推荐 -->

      <!--region 最新上架 -->
      <news ref="news" @newsRefresh="newsRefresh"></news>
      <!--endregion 最新上架 -->

      <!--region 开始GO -->
      <search-bar></search-bar>
      <!--endregion 开始GO -->

      <!--region 专题 -->
      <specials ref="specials"></specials>
      <!--endregion 专题 -->

      <!--region 艺术家 -->
      <artist ref="artist"></artist>
      <!--endregion 艺术家 -->

      <!--region 艺视野 -->
      <insights ref="insights"></insights>
      <!--endregion 艺视野 -->

      <!--region 选择爱艺 -->
      <why-us></why-us>
      <!--endregion 选择爱艺 -->

      <!--region 合作伙伴 -->
      <as-featured-in></as-featured-in>
      <!--endregion 合作伙伴 -->
    </div>
  </div>
</template>

<script>
  import Service from '../../service/index_service'
  import hero from './layout/hero'
  import category from './layout/category'
  import news from './layout/news'
  import searchBar from './layout/searchBar'
  import specials from './layout/specials'
  import artist from './layout/artist'
  import insights from './layout/insights'
  import whyUs from './layout/whyUs'
  import asFeaturedIn from './layout/asFeaturedIn'

  export default {
    components: {
      hero, category, news, searchBar, specials, artist, insights, whyUs, asFeaturedIn
    },
    data () {
      return {}
    },
    created () {
      this.$nextTick(() => {
        this.service = new Service(this)
        this.service.getBanner()
        this.service.getCategoryList()
        this.service.getNews(0, 10)
        this.service.getSpecials()
        this.service.getArtist()
        this.service.getInsight()
      })
    },
    computed: {},
    mounted () {
    },
    methods: {
      /**
       * 最新上架 刷新事件
       * @param page
       */
      newsRefresh (page) {
        this.service.getNews(page.pageNo, page.pageSize)
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/pages/index";
</style>
