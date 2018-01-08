<template>
    <div class="detail-contain clearfix" @click="hideGoodsInfo">
        <!-- region 工具栏 -->
        <section class="top-btns">
            <div class="top-btn t_c active">美术馆</div>
            <div class="top-btn t_c">生活场景</div>
        </section>
        <!-- endregion 工具栏 -->

        <!-- region 作品图片浏览 -->
        <section class="viewer-section">
            <!-- region viewer -->
            <viewer class="viewer abs100"
                    :options="options"
                    :images="images"
                    @inited="inited"
                    ref="viewer">
                <template scope="scope">
                    <div class="width-line"
                         :style="{marginLeft: '-' + scope.images[0].width / 2 + 'px', marginTop: '-' + (scope.images[0].height / 2 + 33) + 'px', width: scope.images[0].width + 'px'}"
                         style="transition: width 1s;">
                        <div></div>
                        <div></div>
                        <span>{{ scope.images[0].size[0] }}m</span>
                    </div>
                    <div class="height-line"
                         :style="{marginLeft: '-' + (scope.images[0].width / 2 + 33) + 'px', marginTop: '-' +scope.images[0].height / 2 + 'px', height: scope.images[0].height + 'px'}"
                         style="transition: height 1s;">
                        <div></div>
                        <div></div>
                        <span>{{ scope.images[0].size[1] }}m</span>
                    </div>
                    <img v-for="(item,index) in scope.images" :src="item.src" :key="index"
                         :style="{height: item.height + 'px', width: item.width + 'px'}">
                </template>
            </viewer>
            <!-- endregion viewer -->

            <!-- region 作品详情 -->
            <div class="goods-info">
                <div class="detail-box">
                    <i class="icon-shopping-cart" v-html="shoppingCartIcon" @mouseenter="mouseEnter('cart')"></i>
                    <i class="icon-menu" v-html="menuIcon" @mouseenter="mouseEnter('menu')"></i>
                </div>

                <div class="buy-info" :class="{active : shoppingCartShow}">
                    <p class="price clearfix">
                        <span class="_price">¥19,250</span>
                        <span class="no-sell">未售</span>
                    </p>
                    <div class="classify">
                        <ul>
                            <li>
                                <i class="icon-check" v-html="checkIcon"></i> 原创
                            </li>
                            <li>
                                <i class="icon-check" v-html="checkIcon"></i> 无装裱
                            </li>
                        </ul>
                    </div>
                    <div class="buy-btn">
                        <p class="p-info">
                            <span>运费：</span>
                            <span>¥190</span>
                        </p>
                        <div>
                            <a href="javascript:void(0);" class="cart">加入购物车</a>
                            <a href="javascript:void(0);" class="buy">立即购买</a>
                        </div>
                    </div>
                </div>

                <div class="detail-info" :class="{active : menuShow}">
                    <div class="base-info">
                        <p class="name">
                            <router-link :to="{ path: '/artist/' + detailInfo.artistId +''}"
                                         target="_blank">{{ detailInfo.artistName }}
                            </router-link>
                        </p>
                        <p class="infos">
                            <span>{{ detailInfo.name }}</span>
                            <span>{{ detailInfo.date }}</span>
                            <span>{{ detailInfo.type }}</span>
                            <span>{{ detailInfo.size }}cm</span>
                        </p>
                    </div>
                    <div class="recommend">
                        <p>编辑推荐</p>
                        <p>{{ detailInfo.recommend }}</p>
                        <br>
                        <span>
                        </span>
                    </div>
                </div>
            </div>
            <!-- endregion 作品详情 -->

            <!-- region 分享 -->

            <!-- endregion 分享 -->
        </section>
        <!-- endregion 作品图片浏览 -->

        <!-- region 艺术品信息 -->
        <!-- endregion 艺术品信息 -->

        <!-- region 评论 -->
        <!-- endregion 评论 -->

        <!-- region 相似推荐 -->
        <!-- endregion 相似推荐 -->
    </div>
</template>

<script>
  import Viewer from "v-viewer/src/component.vue"

  export default {
    components: {
      Viewer
    },
    data () {
      return {
        options: {
          inline: false,
          button: true,
          navbar: false,
          title: true,
          toolbar: true,
          tooltip: true,
          movable: true,
          zoomable: true,
          rotatable: false,
          scalable: false,
          transition: true,
          fullscreen: true,
          keyboard: true,
          url: 'data-source'
        },
        images: [{src: require('../../../static/images/2.jpg'), height: 527, width: 300, size: ['1.20', '1.00']}],
        detailInfo: {
          artistId: '1904pn',
          artistName: '姚元森',
          name: '下半身',
          date: '2016',
          type: '石膏着色',
          size: '70x120x50',
          recommend: '艺术家姚元森在作品中为观者只展现着人的身体的一部分：一只胳膊，没有头的身体，没有上半身的双腿，这些部分的呈现在艺术家极具表现力的塑造中彰显着整体甚至大于整体的魅力。部分呈现使得个体得以彰显。石膏的特性很好地契合着艺术家想要呈现的作品张力与内涵，它们是没有生命的，但却充满力量，像真实的血液与细胞所承托起的真实。'
        },
        shoppingCartIcon: '&#xe601;',
        shoppingCartShow: false,
        menuIcon: '&#xe673;',
        menuShow: false,
        checkIcon: '&#xe678;'
      }
    },
    created () {
      console.log('this.$route.params:', this.$route.params.id)
    },
    mounted () {
      // TODO 底部footer样式处理 暂时隐藏
      document.querySelector('.footer').style.display = 'none'
    },
    computed: {},
    methods: {
      /**
       * viewer 初始化事件
       * @param viewer
       */
      inited (viewer) {
        this.$viewer = viewer
      },
      /**
       * 作品详情 焦点事件
       * @param type
       */
      mouseEnter (type) {
        switch (type) {
          case 'cart':
            this.menuShow = false
            this.shoppingCartShow = true
            break
          case 'menu':
            this.shoppingCartShow = false
            this.menuShow = true
            break
        }
      },
      /**
       * 点击页面 隐藏作品详情信息
       */
      hideGoodsInfo () {
        this.menuShow = false
        this.shoppingCartShow = false
      }
    }
  }
</script>

<style lang="less">
    @import "../../assets/styles/pages/artworks";
</style>
