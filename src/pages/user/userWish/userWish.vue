<template>
  <div class="userWish-contain">
    <navigation :userNavType="userNavType"></navigation>
    <div class="container">
      <vue-waterfall-easy :imgsArr="productList"
                          :gap="92" :maxCols="3"
                          :imgWidth="300"
                          :close-btn="true"
                          @scrollLoadImg="fetchData"
                          @waterfallSkip="skipToArtworks"
                          @waterfallClose="waterfallClose">
        <div class="detail" slot-scope="props">
          <p>
            <span @click="skipToArtist(props.item, $event)">{{ props.item.brandName }}</span>
          </p>
          <p>
            <span>{{ props.item.goodsName }}</span>
            <span>{{ props.item.createTime }}</span>
          </p>
          <p>
            <span>{{ props.item.cateName }}</span>&nbsp;&nbsp;&nbsp;
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
        userNavType: 'userWish',
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
      initList (n, m) {
        let arr = []
        let listLength = this.productList.length
        if (listLength < m) {
          m = listLength
        }
        for (let i = n; i < m; i++) {
          arr.push(this.productList[i])
        }
        return arr
      },
      fetchData () {
        if (this.productList.length > 40) {
          this.paginateShow = true
          return
        }
        this.productList = this.productList.concat(this.initList(10, 20))
      },
      skipToArtworks (item) {
        window.open('#/artworks/' + item.goodsId)
      },
      skipToArtist (item, e) {
        window.open('#/artist/' + item.brandId)
        e.stopPropagation()
      },
      waterfallClose () {
        console.log('waterfallClose1')
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userWish";
</style>
