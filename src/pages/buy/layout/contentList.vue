<template>
  <div class="content">
    <div class="filter">
      <select>
        <option value="0">上架时间</option>
        <option value="4">上架时间最新</option>
        <option value="3">上架时间最早</option>
      </select>
      <select>
        <option value="0">价格</option>
        <option value="1">价格从低到高</option>
        <option value="2">价格从高到低</option>
      </select>
      <select>
        <option value="false">作品状态</option>
        <option value="false">全部</option>
        <option value="true">未售作品</option>
      </select>
    </div>
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
  </div>
</template>

<script>
  import vueWaterfallEasy from '../../../components/common/waterfall-easy'
  import paginate from 'vuejs-paginate'
  import contentList from '../../../../static/contentList'

  export default {
    components: {
      vueWaterfallEasy, paginate
    },
    data () {
      return {
        productList: [],
        paginateShow: false
      }
    },
    created () {
      this.$nextTick(() => {
        this.productList = contentList
        // this.productList = []
      })
    },
    mounted () {
    },
    computed: {
      filterList () {
        let search = this.$store.getters.search
        if (search.price) {
          let pMin = search.price.split('-')[0] || 0
          let pMax = search.price.split('-')[1] || 0
          this.productList = this.productList.filter((item) => {
            return item.price >= pMin && item.price <= pMax
          })
        }
        if (search.size) {
          let sMin = search.size.split('-')[0] || 0
          let sMax = search.size.split('-')[1] || 0
          this.productList = this.productList.filter((item) => {
            let itemWidth = item.size.split('x')[0]
            let itemHeight = item.size.split('x')[1]
            return (itemWidth >= sMin && itemHeight >= sMin) && (itemWidth <= sMax && itemHeight <= sMax)
          })
        }
        if (search.color) {
          this.productList = this.productList.filter((item) => {
            return item.color === search.color
          })
        }
        if (search.shape) {
          this.productList = this.productList.filter((item) => {
            return item.shape === search.shape
          })
        }
        if (search.space) {
          this.productList = this.productList.filter((item) => {
            return item.space === search.space
          })
        }
        if (search.category) {
          this.productList = this.productList.filter((item) => {
            return item.category === search.category
          })
        }
        if (search.style) {
          this.productList = this.productList.filter((item) => {
            return item.style === search.style
          })
        }
        this.productList = this.initList(0, 10)
        return this.productList
      }
    },
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
