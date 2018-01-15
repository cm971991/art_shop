<template>
  <div class="detail-contain clearfix" @click="hideGoodsInfo">
    <!-- region 工具栏 -->
    <!--<section class="top-btns">-->
    <!--<div class="top-btn t_c active">美术馆</div>-->
    <!--<div class="top-btn t_c">生活场景</div>-->
    <!--</section>-->
    <!-- endregion 工具栏 -->

    <!-- region 作品图片浏览 -->
    <section class="viewer-section">
      <!-- region viewer -->
      <viewer class="viewer abs100"
              :options="options"
              :images="images"
              @inited="inited"
              ref="viewer">
        <template slot-scope="scope">
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
          <img v-for="(item,index) in scope.images" v-lazy="item.src" :key="index"
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
              <a href="javascript:void(0);" class="cart" @click="addCart">加入购物车</a>
              <a href="javascript:void(0);" class="buy" @click="buy">立即购买</a>
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
    <section class="work-info-section clearfix">
      <p>艺术品信息</p>
      <div class="arter">
        <div class="imgbox">
          <router-link :to="{ path: '/artist/' + detailInfo.artistId +''}"
                       target="_blank">
            <img v-lazy="avatarImg">
          </router-link>
        </div>
        <p class="name">
          <router-link :to="{ path: '/artist/' + detailInfo.artistId +''}"
                       target="_blank">{{ detailInfo.artistName }}
          </router-link>
        </p>
        <p class="another">
          <router-link :to="{ path: '/artist/' + detailInfo.artistId +''}"
                       target="_blank">共
            <span class="artworkcount">{{ detailInfo.worksNumber }}</span>件作品
          </router-link>
        </p>
        <router-link class="more" :to="{ path: '/artist/' + detailInfo.artistId +''}"
                     target="_blank">艺术家完整资料 &gt;
        </router-link>
      </div>
      <ul class="productsInformation">
        <li class="clearfix">
          <div>
            <span>作品名称:</span>
            <h1>溪景</h1>
          </div>
          <div>
            <span>艺&ensp;术&ensp;家:
              <span class="justify_fix"></span>
            </span>帕特里克·内史密斯
          </div>
          <div><span>材&emsp;&emsp;质:</span>木板油画</div>
        </li>
        <li class="clearfix">
          <div><span>尺&emsp;&emsp;寸:</span>66x46cm</div>
          <div><span>创作时间:</span>1829</div>
          <div><span>作品类型:</span>油画</div>
        </li>
        <li class="clearfix">
          <div><span>风&emsp;&emsp;格:</span>写实</div>
          <div><span>题&emsp;&emsp;材:</span>风景</div>
        </li>
      </ul>
    </section>
    <!-- endregion 艺术品信息 -->

    <!-- region 艺术评析 -->
    <section class="work-desc-section">
      <p>艺术评析</p>
      <div>
        <span class="yinhao yinhaoleft">“</span>
        <span class="yinhao yinhaoright">”</span>
        <i>
          两只小猫被一片飘在空中的羽毛吸引，连最爱的毛线球都被弃在一边。原来高冷的喵星人也会有如此萌萌哒的一面，让人心生喜爱。
          <br>
          <span></span>
        </i>
      </div>
      <div class="onePingxi">
        <img src="https://cdn.ywart.com/artworkanalysis/20160902161245514afb1371d.jpg@1e_1c_0o_0l_90Q_600h_600w.src">
        <div class="textDes">
          <p>猫的性格实在有些古怪。说它老实吧，它有时候的确很乖。它会找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。可是，它决定要出去玩玩，就会出去走一天一夜，任凭谁怎么呼唤，它也不肯回来。——老舍·《猫》</p>
        </div>
      </div>
      <div class="onePingxi">
        <img src="https://cdn.ywart.com/artworkanalysis/2016090216124559253b94693.jpg@1e_1c_0o_0l_90Q_600h_600w.src">
        <div class="textDes">
          <p>艺术品细节展示。</p>
        </div>
      </div>
    </section>
    <!-- endregion 艺术评析 -->

    <!-- region 评论 -->
    <section class="comment-section clearfix">
      <div class="comment-header">
        <p>评论</p>
        <textarea class="text-area" placeholder="请畅所欲言...（最多500个字符）"></textarea>
        <button class="publish">发　表</button>
      </div>
    </section>
    <!-- endregion 评论 -->

    <!-- region 小贴士 -->
    <section class="remind-section">
      <p @click="showRemind">
        <i class="icon-bookmark" v-html="remindIcon"></i>
        <span>爱艺小贴士</span>
        <i class="icon-down-solid-arrow f_r" :class="{active:!remindActive}" v-html=" downArrowIcon"></i>
        <i class="icon-up-solid-arrow f_r" :class="{active:remindActive}" v-html="upArrowIcon"></i>
      </p>
      <div class="remind-contain" :class="{active:remindActive}">
        <div class="remind">
          <p>绘画作品</p>
          <div>
            <h3>存放</h3>
            <ul>
              <li>
                <p>放置画作的理想环境为室温14℃-18℃，相对湿度50%-60%；</p>
              </li>
              <li>
                <p>避光、防潮请避免阳光长期直射画面，保持画作放置处的空气流通，并远离厨卫等湿气较重的地方，避免灰尘、油烟损害画作；</p>
              </li>
              <li>
                <p>防风请勿在空调口、暖气扇旁放置画作，避免风力过大造成画作受损；</p>
              </li>
              <li>
                <p>防损请勿过于频繁地搬动画作，并避免任何腐蚀性材料（如化学药剂、清洁剂等）接触画面；观赏画作时，请尽量避免肢体与画作的直接接触。</p>
              </li>
            </ul>
            <h3>清洁与保养</h3>
            <h4>油画</h4>
            <ul>
              <li>
                <p>请使用干净、柔软的材料（擦布或黑貂豪笔）轻轻擦拭画上的灰尘；避免清洁剂、海绵或吸尘器接触画面；</p>
              </li>
              <li>
                <p>若受潮，请先用净布吸去水渍，再进行阴干，切忌暴晒；</p>
              </li>
              <li>
                <p>切勿将两张油画对贴放置，一旦画面粘连，会导致油彩脱坏。</p>
              </li>
            </ul>
            <h4>中国画</h4>
            <ul>
              <li>
                <p>请使用软质毛刷（如拂尘、羽毛掸子）清除灰尘，勿使用布类，并保证动作轻柔，避免损伤画纸；</p>
              </li>
              <li>
                <p>若受潮，请用干布或纸巾吸水，再进行阴干，切忌暴晒；</p>
              </li>
            </ul>
            <h4>版画</h4>
            <ul>
              <li>
                <p>未装裱的版画，请平铺放于干燥处或卷入画筒内；若多张叠放，请在画作之间用软质白纸进行分隔；</p>
              </li>
              <li>
                <p>已装裱的版画，定期用擦布或纸巾清洁画框即可。</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="remind">
          <p>雕塑作品</p>
          <div>
            <h3>存放</h3>
            <ul>
              <li>
                <p>放置雕塑品的理想温度为18℃-24℃，相对湿度为40%-50%。请勿将作品放于过高或过低的温度和湿度下，易引起作品变形损坏；</p>
              </li>
              <li>
                <p>防损请将雕塑品放于平稳处，避免碰撞、叠压作品造成物理损伤。</p>
              </li>
            </ul>
            <h3>清洁与保养</h3>
            <ul>
              <li>
                <p>请用柔软的干布或软毛刷清洁雕塑品表面，切勿用湿布或化学试剂擦拭作品，避免作品受到腐蚀；</p>
              </li>
              <li>
                <p>接触作品时，请尽量保持动作轻柔，避免损害作品。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- endregion 小贴士 -->

    <!-- region 相似推荐 -->
    <section class="recommend-section clearfix">
      <p class="maybe-like">可能你也喜欢</p>
      <div class="item-box">
        <template v-for="i in 8">
          <div class="item">
            <a class="imghover" href="/artworks/1lryv2" target="_blank">
              <div class="img">
                <img src="https://cdn.ywart.com/yw/20160815134543685363871b2.jpg@560h_560w_1e_1c_1wh_90Q">
              </div>
            </a>
            <div class="info-box">
              <div>
                <p class="info"></p>
                <h4>草丛里胡猫</h4> &nbsp;2015
                <br>布面油画 &nbsp;70.00✕70.00cm
                <p></p>
                <p class="price">¥12,050</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
    <!-- endregion 相似推荐 -->
  </div>
</template>

<script>
  import Viewer from 'v-viewer/src/component.vue'

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
          worksNumber: 1,
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
        checkIcon: '&#xe678;',
        avatarImg: require('../../assets/images/pages/artworks/avatar_default.jpg'),
        remindIcon: '&#xe717;',
        downArrowIcon: '&#xe602;',
        upArrowIcon: '&#xe60f;',
        remindActive: false,
        recommendList: []
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
      },
      /**
       * 小贴士 切换显示
       */
      showRemind () {
        this.remindActive = !this.remindActive
      },
      /**
       * 加入购物车
       */
      addCart () {
        let userInfo = this.$store.getters.userInfo
        if (userInfo) {

        } else {
        }
      },
      /**
       * 立即购买
       */
      buy () {
        let userInfo = this.$store.getters.userInfo
        if (userInfo) {

        } else {
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/pages/artworks";
</style>
