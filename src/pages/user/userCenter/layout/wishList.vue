<template>
  <section class="wish-list">
    <div class="section-title">
      <router-link :to="{ path:'/user/userWish' }">您的心愿单</router-link>
    </div>
    <div class="section-content clearfix">
      <template v-for="i in 3">
        <div class="artwork-item">
          <router-link :to="{ path: '/artworks/1'}" target="_blank">
            <div class="img">
              <img src="https://cdn.ywart.com/yw/20160719120446820203498c5.jpg@260h_260w_1e_1c_1wh_90Q">
            </div>
          </router-link>
          <div class="info-box">
            <div>
              <router-link :to="{ path: '/artist/1'}" target="_blank"><h3>谢关康</h3></router-link>
              <h4>
                <router-link :to="{ path: '/artworks/1'}" target="_blank">意动的形态系列2</router-link>
              </h4>
              ，2015<br>
              <p>布面丙烯 150x120cm</p>
              <p>¥10,350</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>
