<template>
  <div class="userMessage-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc-content clearfix">
      <h2>我的消息(<span>4</span>)</h2>
      <div class="main-block">
        <div class="messages">
          <template v-for="i in 4">
            <a href="https://www.ywart.com/user/order" target="_blank">
              <div>
                <span class="msg-time">2018-01-22 10:20:56</span>
                <div class="msg-content">您的订单由于没有支付,已自动取消</div>
              </div>
            </a>
          </template>
        </div>
      </div>
      <span class="more-history-msg" style="display: none;">更多历史消息(<span>4</span>)</span>
      <paginate :page-count="5"
                :page-range="1"
                :margin-pages="1"
                :click-handler="clickCallback"
                :containerClass="'pagination'"
                :prev-class="'prev'"
                :next-class="'next'"
                :prev-text="'上一页'"
                :next-text="'下一页'">
      </paginate>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  const paginate = () => import('vuejs-paginate')

  export default {
    components: {paginate, iMenu},
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      clickCallback (pageNum) {
        console.log(pageNum)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userMessage";
</style>
