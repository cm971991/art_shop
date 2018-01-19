<template>
  <div class="order-panel clearfix">
    <div class="title-header">购买商品</div>
    <div class="f_l panel-container panel-pay-list">
      <ul>
        <template v-for="i in 3">
          <li class="clearfix sp1">
            <div class="f_l thumb">
              <a href="/artworks/1jk1do" target="_blank">
                <img src="https://cdn.ywart.com/yw/2016051110405795444b3ac2f.jpg_small02">
              </a>
            </div>
            <div class="f_l detail">
              <div class="title nowrap">树中的世界</div>
              <p>
                <a href="/artist/145jln" target="_blank">沈菀</a>
              </p>
              <p>28x20cm</p>
            </div>
            <div class="f_r price-unit">
              <p class="remove">删除</p>
              <p class="now">
                <strong class="price">¥<em>650</em></strong>
              </p>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
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

<style lang="less">
  .MyContain {
    background-color: #fff;
  }
</style>
