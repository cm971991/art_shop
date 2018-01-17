<template>
  <section class="recommend-section clearfix">
    <p class="maybe-like">可能你也喜欢</p>
    <div class="item-box">
      <template v-for="item in recommendList">
        <div class="item">
          <router-link :to="{ path: '/artworks/' + item.id +''}" class="imghover" target="_blank">
            <div class="img">
              <img v-lazy="item.imgUrl">
            </div>
          </router-link>
          <div class="info-box">
            <div>
              <p class="info"></p>
              <h4>{{ item.name }}</h4> &nbsp;{{ item.date }}
              <br>{{ item.type }} &nbsp;{{ item.size }}cm
              <p></p>
              <p class="price">¥{{ item.price }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
  import recommendList from '../../../../static/data/artworks/recommendList'

  export default {
    components: {},
    data () {
      return {
        recommendList: recommendList
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
