<template>
  <section class="discover-index-contain">
    <template v-for="(item,index) in collectList">
      <template v-if="item.type === 'bigger'">
        <div class="list-big-box" :key="index">
          <h2 @click="detail(item.id)">{{ item.title }}</h2>
          <h4 @click="detail(item.id)">{{ item.desc }}</h4>
          <div class="photo-row" @click="detail(item.id)">
            <div><img v-lazy="item.imgList[0]"></div>
            <div><img v-lazy="item.imgList[1]"></div>
            <div><img v-lazy="item.imgList[2]"></div>
          </div>
          <div class="other-info">
            <div class="left">
              <img v-lazy="item.authorHeader">
              <div>{{ item.authorName }}</div>
              <div>{{ item.pushDate }}</div>
            </div>
            <div class="right">
              <i :class="[item.collected ? 'icon-collected' : 'icon-collect']" v-html="item.collected ? collectedIcon : collectIcon" @click="collect(item)"></i>
              <span>{{ item.collectNum }}</span>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="list-small-box" :key="index">
          <div class="left-img" @click="detail(item.id)">
            <img v-lazy="item.imgList[0]" />
          </div>
          <div class="right-info">
            <h2 @click="detail(item.id)">{{ item.title }}</h2>
            <h4 @click="detail(item.id)">{{ item.desc }}</h4>
            <div class="other-info">
              <div class="left">
                <img v-lazy="item.authorHeader">
                <div>{{ item.authorName }}</div>
                <div>{{ item.pushDate }}</div>
              </div>
              <div class="right">
                <i :class="[item.collected ? 'icon-collected' : 'icon-collect']" v-html="item.collected ? collectedIcon : collectIcon" @click="collect(item)"></i>
                <span>{{ item.collectNum }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </section>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      collectIcon: '&#xe663;',
      collectedIcon: '&#xe63b;',
      collectList: []
    }
  },
  created () {
    this.$nextTick(() => {
      this.collectList = [
        {
          id: '123',
          title: '适于心 明代永乐皇帝的瓷器',
          desc: '明朝永乐时期的瓷器艺术独创与多元兼具，堪称东亚工艺美术史的是请问企鹅我我去额外企鹅完全额外企鹅完全去饿我去',
          imgList: [
            require('../../../../static/images/buy/content/content_9.jpg'),
            require('../../../../static/images/buy/content/content_9.jpg'),
            require('../../../../static/images/buy/content/content_9.jpg')],
          authorName: '小爱',
          authorHeader: require('../../../../static/images/buy/content/content_9.jpg'),
          pushDate: '2018年01月22日',
          collectNum: '22',
          collected: false,
          type: 'bigger'
        },
        {
          id: '456',
          title: '适于心 明代永乐皇帝的瓷器',
          desc: '明朝永乐时期的瓷器艺术独创与多元兼具，堪称东亚工艺美术史的是请问企鹅我我去额外企鹅完全额外企鹅完全去饿我去',
          imgList: [require('../../../../static/images/buy/content/content_9.jpg')],
          authorName: '小爱',
          authorHeader: require('../../../../static/images/buy/content/content_9.jpg'),
          pushDate: '2018年01月22日',
          collectNum: '22',
          collected: false,
          type: 'smaller'
        },
        {
          id: '123',
          title: '适于心 明代永乐皇帝的瓷器',
          desc: '明朝永乐时期的瓷器艺术独创与多元兼具，堪称东亚工艺美术史的是请问企鹅我我去额外企鹅完全额外企鹅完全去饿我去',
          imgList: [require('../../../../static/images/buy/content/content_9.jpg'), require('../../../../static/images/buy/content/content_9.jpg'), require('../../../../static/images/buy/content/content_9.jpg')],
          authorName: '小爱',
          authorHeader: require('../../../../static/images/buy/content/content_9.jpg'),
          pushDate: '2018年01月22日',
          collectNum: '22',
          collected: false,
          type: 'bigger'
        },
        {
          id: '456',
          title: '适于心 明代永乐皇帝的瓷器',
          desc: '明朝永乐时期的瓷器艺术独创与多元兼具，堪称东亚工艺美术史的是请问企鹅我我去额外企鹅完全额外企鹅完全去饿我去',
          imgList: [require('../../../../static/images/buy/content/content_9.jpg')],
          authorName: '小爱',
          authorHeader: require('../../../../static/images/buy/content/content_9.jpg'),
          pushDate: '2018年01月22日',
          collectNum: '22',
          collected: false,
          type: 'smaller'
        },
        {
          id: '123',
          title: '适于心 明代永乐皇帝的瓷器',
          desc: '明朝永乐时期的瓷器艺术独创与多元兼具，堪称东亚工艺美术史的是请问企鹅我我去额外企鹅完全额外企鹅完全去饿我去',
          imgList: [require('../../../../static/images/buy/content/content_9.jpg'), require('../../../../static/images/buy/content/content_9.jpg'), require('../../../../static/images/buy/content/content_9.jpg')],
          authorName: '小爱',
          authorHeader: require('../../../../static/images/buy/content/content_9.jpg'),
          pushDate: '2018年01月22日',
          collectNum: '22',
          collected: false,
          type: 'bigger'
        },
        {
          id: '456',
          title: '适于心 明代永乐皇帝的瓷器',
          desc: '明朝永乐时期的瓷器艺术独创与多元兼具，堪称东亚工艺美术史的是请问企鹅我我去额外企鹅完全额外企鹅完全去饿我去',
          imgList: [require('../../../../static/images/buy/content/content_9.jpg')],
          authorName: '小爱',
          authorHeader: require('../../../../static/images/buy/content/content_9.jpg'),
          pushDate: '2018年01月22日',
          collectNum: '22',
          collected: false,
          type: 'smaller'
        }
      ]
    })
  },
  mounted () {
  },
  computed: {},
  methods: {
    /**
     * 查看详情
     * @param id
     */
    detail (id) {
      this.$router.push({ name: 'discoveryDetail', params: { id: id } })
    },
    /**
     * 收藏
     * @param item
     */
    collect (item) {
      if (!item.collected) {
        item.collectNum++
      } else {
        item.collectNum--
      }
      item.collected = !item.collected
    }
  }
}
</script>

<style lang="less">
@import "../../../assets/styles/pages/discoverIndex";
</style>
