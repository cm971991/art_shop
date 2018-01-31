<template>
  <div class="userHistory-contain">
    <navigation :userNavType="userNavType"></navigation>
    <section class="clearfix">
      <div class="my-center">
        <div class="my-travel clearfix">
          <template v-for="(item,index) in historyList">
            <div class="item" :key="index">
              <div class="date"><span>{{ item.date }}</span></div>
              <div class="content clearfix">
                <div class="category">浏览的作品</div>
                <div class="list" :style="{ height:item.active ? 'auto' : ''}">
                  <ul>
                    <template v-for="(v,i) in item.list">
                      <li>
                        <div class="thumb" :key="i">
                          <router-link :to="{ path: '/artworks/' + v.id +''}" target="_blank"><img v-lazy="v.imgUrl">
                          </router-link>
                        </div>
                      </li>
                    </template>
                  </ul>
                  <a class="more" :style="{display: item.active ? 'none' : 'block'}" @click="more(item)"><i
                    class="icon-down-arrow" v-html="downIcon"></i></a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import navigation from '../../../components/base/iNavigation'

  export default {
    components: {navigation},
    data () {
      return {
        downIcon: '&#xe64b;',
        userNavType: 'userHistory',
        historyList: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.historyList = [
          {
            date: '2018/01/28',
            active: false,
            list: [
              {
                id: '123',
                imgUrl: require('../../../../static/images/buy/content/content_1.jpg')
              },
              {
                id: '456',
                imgUrl: require('../../../../static/images/buy/content/content_2.jpg')
              },
              {
                id: '789',
                imgUrl: require('../../../../static/images/buy/content/content_3.jpg')
              }
            ]
          },
          {
            date: '2018/01/21',
            active: false,
            list: [
              {
                id: '321',
                imgUrl: require('../../../../static/images/buy/content/content_4.jpg')
              },
              {
                id: '654',
                imgUrl: require('../../../../static/images/buy/content/content_5.jpg')
              },
              {
                id: '789',
                imgUrl: require('../../../../static/images/buy/content/content_6.jpg')
              }
            ]
          }
        ]
      })
    },
    mounted () {
    },
    computed: {},
    methods: {
      more (item) {
        item.active = !item.active
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userHistory";
</style>
