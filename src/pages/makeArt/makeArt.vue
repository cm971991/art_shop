<template>
  <div class="markArt-contain">
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
  import Service from '../../service/makeArt_service'

  export default {
    components: {search, workList},
    data () {
      return {}
    },
    created () {
      console.log('parent:')
      this.$nextTick(() => {
        this.service = new Service(this)
        let params = {
          'type': '0',
          'tag': '0',
          'keywords': '',
          'pageNo': '1',
          'pageSize': '10'
        }
        this.service.getMakeArtList(params)
      })
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
