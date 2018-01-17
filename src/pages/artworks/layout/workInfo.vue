<template>
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
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        avatarImg: require('../../../assets/images/pages/artworks/avatar_default.jpg'),
        detailInfo: {
          artistId: '1904pn',
          artistName: '姚元森',
          worksNumber: 1,
          name: '下半身',
          date: '2016',
          type: '石膏着色',
          size: '70x120x50',
          recommend: '艺术家姚元森在作品中为观者只展现着人的身体的一部分：一只胳膊，没有头的身体，没有上半身的双腿，这些部分的呈现在艺术家极具表现力的塑造中彰显着整体甚至大于整体的魅力。部分呈现使得个体得以彰显。石膏的特性很好地契合着艺术家想要呈现的作品张力与内涵，它们是没有生命的，但却充满力量，像真实的血液与细胞所承托起的真实。'
        }
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>

