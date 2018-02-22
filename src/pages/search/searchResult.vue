<template>
  <div class="searchResult-contain">
    <div class="search-center">
      <!-- region 搜索框 -->
      <div class="search-input clearfix">
        <div class="input-div">
          <i class="icon-search" v-html="searchIcon"></i>
          <input class="keyword" placeholder="请输入搜索的关键字" v-model="keyWord">
          <a href="#" @click="clearSearch">×</a>
        </div>
        <button class="input-button" @click="searchClick">搜索</button>
      </div>
      <!-- endregion 搜索框 -->

      <!-- region 搜索导航 -->
      <div class="search-nav clearfix">
        <a :class="{ active : resultType === 'artwork' }"
           @click="resultTypeChoose('artwork')">艺术品</a>
        <a :class="{ active : resultType === 'artist' }"
           @click="resultTypeChoose('artist')">艺术家</a>
      </div>
      <!-- endregion 搜索导航 -->

      <div class="search-data">
        <!-- region 艺术品 -->
        <div class="project-data" :class="{ active : resultType === 'artwork' }">
          <search-list :type="resultType"
                       :list="artworkList"
                       :keyWord="keyWord"></search-list>
        </div>
        <!-- endregion 艺术品 -->

        <!-- region 艺术家 -->
        <div class="artist-data" :class="{ active : resultType === 'artist' }">
          <search-list :type="resultType"
                       :list="artistList"
                       :keyWord="keyWord"></search-list>
        </div>
        <!-- endregion 艺术家 -->
      </div>
    </div>
  </div>
</template>

<script>
  const searchList = () => import('./layout/searchList')

  export default {
    components: {searchList},
    data () {
      return {
        searchIcon: '&#xe603;',
        artworkList: [],
        artistList: [],
        resultType: 'artwork',
        keyWord: ''
      }
    },
    created () {
      this.$nextTick(() => {
        this.artworkList = [
          {
            goodsId: '6',
            goodsName: '乡间田园',
            goodsDesc: '春天像是孩子的明媚的脸，最初的成长总是伴随着清新绚烂。艺术家运用绿色，黄色粉色等，将人们带进迎接春天的美好心情。',
            imgUrl: require('../../../static/images/buy/content/content_13.jpg'),
            price: '1550',
            size: '60*80',
            brandId: 'qwe',
            brandName: '王慧'
          },
          {
            goodsId: '6',
            goodsName: '乡间田园',
            goodsDesc: '春天像是孩子的明媚的脸，最初的成长总是伴随着清新绚烂。艺术家运用绿色，黄色粉色等，将人们带进迎接春天的美好心情。',
            imgUrl: require('../../../static/images/buy/content/content_13.jpg'),
            price: '1550',
            size: '60*80',
            brandId: 'qwe',
            brandName: '王慧'
          },
          {
            goodsId: '6',
            goodsName: '乡间田园',
            goodsDesc: '春天像是孩子的明媚的脸，最初的成长总是伴随着清新绚烂。艺术家运用绿色，黄色粉色等，将人们带进迎接春天的美好心情。',
            imgUrl: require('../../../static/images/buy/content/content_13.jpg'),
            price: '1550',
            size: '60*80',
            brandId: 'qwe',
            brandName: '王慧'
          }
        ]
        this.artistList = [
          {
            brandId: 'qwe',
            brandName: '王慧',
            brandAvatar: require('../../../static/images/artist/first/artist_photo.jpg'),
            imgUrl: [
              require('../../../static/images/buy/content/content_1.jpg'),
              require('../../../static/images/buy/content/content_3.jpg'),
              require('../../../static/images/buy/content/content_6.jpg')
            ]
          },
          {
            brandId: 'qwe',
            brandName: '王慧',
            brandAvatar: require('../../../static/images/artist/first/artist_photo.jpg'),
            imgUrl: [
              require('../../../static/images/buy/content/content_1.jpg'),
              require('../../../static/images/buy/content/content_3.jpg'),
              require('../../../static/images/buy/content/content_6.jpg')
            ]
          },
          {
            brandId: 'qwe',
            brandName: '王慧',
            brandAvatar: require('../../../static/images/artist/first/artist_photo.jpg'),
            imgUrl: [
              require('../../../static/images/buy/content/content_1.jpg'),
              require('../../../static/images/buy/content/content_3.jpg'),
              require('../../../static/images/buy/content/content_6.jpg')
            ]
          }
        ]
      })
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       *
       * @param type
       */
      resultTypeChoose (type) {
        this.resultType = type
        return false
      },
      /**
       * 点击搜索事件
       */
      searchClick () {
        console.log('searchClick')
      },
      /**
       * 清除搜索框输入内容
       */
      clearSearch () {
        this.keyWord = ''
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/pages/searchResult";
</style>
