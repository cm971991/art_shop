<template>
  <div class="userWish-contain">
    <navigation :navType="navType"></navigation>
    <div class="container">
      <vue-waterfall-easy :imgsArr="productList" :gap="92" :maxCols="3" :imgWidth="300" :close-btn="true"
                          @scrollLoadImg="fetchData">
        <div class="detail" slot-scope="props">
          <p>
            <router-link :to="{ path: '/artist/' + props.item.id +''}" target="_blank">{{ props.item.artist }}
            </router-link>
          </p>
          <p>
            <router-link :to="{ path: '/artworks/' + props.item.id +''}" target="_blank">{{ props.item.name }}
            </router-link>
            &nbsp;&nbsp;<span>{{  props.item.date }}</span>
          </p>
          <p>
            <span>{{ props.item.type }}</span>&nbsp;&nbsp;&nbsp;
            <span>{{ props.item.size }}</span>
          </p>
          <div class="qmBox">
            <p class="price">¥{{ props.item.price }}</p>
          </div>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
  import navigation from '../../../components/base/iNavigation'
  import vueWaterfallEasy from '../../../components/common/waterfall-easy'
  import contentList from '../../../../static/contentList'

  export default {
    components: {navigation, vueWaterfallEasy},
    data () {
      return {
        navType: 'userWish',
        productList: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.productList = contentList
      })
    },
    mounted () {
    },
    computed: {},
    methods: {
      fetchData () {
        if (this.productList.length > 40) {
          this.paginateShow = true
          return
        }
        this.productList = this.productList.concat(this.initList(10, 20))
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userWish";
</style>
