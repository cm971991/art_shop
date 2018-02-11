<template>
  <section class="all-works">
    <div class="container">
      <vue-waterfall-easy :imgsArr="productList"
                          :gap="92"
                          :maxCols="3"
                          :imgWidth="300"
                          @scrollLoadImg="fetchData"
                          @waterfallSkip="skipToArtworks">
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
            <img src="https://cdn.ywart.com/material/DiscountAction/201712221339391693a0c4534.png"
                 class="qmImg">
            <p class="price">¥{{ props.item.price }}</p>
          </div>
        </div>
      </vue-waterfall-easy>
    </div>
    <paginate :class="{ active: paginateShow }"
              :page-count="5"
              :page-range="1"
              :margin-pages="1"
              :click-handler="clickCallback"
              :containerClass="'pagination'"
              :prev-class="'prev'"
              :next-class="'next'"
              :prev-text="'上一页'"
              :next-text="'下一页'">
    </paginate>
  </section>
</template>

<script>
  import vueWaterfallEasy from '../../../components/common/waterfall-easy'
  import paginate from 'vuejs-paginate'
  import contentList from '../../../../static/contentList'

  export default {
    components: {vueWaterfallEasy, paginate},
    data () {
      return {
        productList: [],
        paginateShow: false
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
      clickCallback (pageNum) {
        console.log(pageNum)
      }
    }
  }
</script>
