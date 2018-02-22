<template>
  <div class="search-content">
    <!-- region 总数 -->
    <div class="search-line"
         v-if="list && list.length > 0">
      <span class="result-num">共<em>{{ list ? list.length : 0 }}</em>条结果</span>
    </div>
    <!-- endregion 总数 -->

    <!-- region 列表 -->
    <div class="search-list">
      <template v-if="type === 'artwork'">
        <ul class="works-list">
          <template v-for="(item,index) in list">
            <li :key="index">
              <div class="project clearfix">
                <div class="thumb">
                  <router-link
                      class="abs100 img"
                      :to="{ path: '/artworks/' + item.goodsId +''}"
                      :style="{ backgroundImage:'url('+ item.imgUrl +') '}"
                      target="_blank"></router-link>
                </div>
                <div class="detail">
                  <div class="title nowrap">{{ item.brandName }}</div>
                  <p class="content-jies">{{ item.goodsName }}<em>1</em></p>
                  <p>{{ item.size }}CM</p>
                  <p class="price">¥{{ item.price }}</p>
                </div>
                <div class="info">
                  <strong class="title">作品描述</strong>
                  <div class="summarize">{{ item.goodsDesc }}</div>
                  <div class="more">
                    <router-link
                        :to="{ path: '/artworks/' + item.goodsId +''}"
                        target="_blank">查看详情>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </template>
      <template v-else>
        <ul class="writer-list">
          <template v-for="(item,index) in list">
            <li :key="index">
              <div class="artist clearfix">
                <div class="introduces">
                  <router-link class="avatar" :to="{ path: '/artist/' + item.brandId +''}"
                               target="_blank">
                    <img :src="item.brandAvatar">
                  </router-link>
                  <p class="name">{{ item.brandName }}</p>
                </div>
                <div class="artist-project">
                  <ul>
                    <template v-for="v in item.imgUrl">
                      <li>
                        <router-link :to="{ path: '/artist/' + item.brandId +''}"
                                     target="_blank">
                          <img :src="v">
                        </router-link>
                      </li>
                    </template>
                  </ul>
                  <router-link :to="{ path: '/artist/' + item.brandId +''}"
                               target="_blank">更多>
                  </router-link>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </template>
    </div>
    <!-- endregion 列表 -->

    <!-- region 无数据时展示 -->
    <div class="no-data"
         v-if="!list || list.length <= 0">
      <div class="no-data">
        <strong>抱歉，没有找到“{{keyWord}}”的相关结果</strong>
        <p>请尝试修改搜索关键字</p>
      </div>
    </div>
    <!-- endregion 无数据时展示 -->

    <!-- region 分页 -->
    <paginate :class="{ active: list && list.length > 0 }"
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
    <!-- endregion 分页 -->
  </div>
</template>

<script>
  import paginate from 'vuejs-paginate'

  export default {
    components: {paginate},
    props: {
      type: {
        type: String,
        default: 'artwork'
      },
      keyWord: {
        type: String,
        default: ''
      },
      list: {
        type: Array
      }
    },
    data () {
      return {}
    },
    created () {
      console.log('!list || list.length <= 0:', (!this.list || this.list.length <= 0))
    },
    mounted () {
    },
    computed: {},
    methods: {
      clickCallback (pageNum) {
        this.$emit('paginateClick', pageNum)
      }
    }
  }
</script>
