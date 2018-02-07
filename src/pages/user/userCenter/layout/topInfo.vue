<template>
  <section class="top-info">
    <p class="welcome">欢迎，白开水
      <img :src="userLevelImg">
    </p>
    <div class="member-info">
      <img :src="avatarImg" class="thumb_o">
      <div class="right-box">
        <div class="member-level">
          <img :src="userLevelIconImg"><span>会员等级：</span>
          <div class="level-lines">
            <div class="line-back"></div>
            <div class="level-line">
              <div>
                <img :src="avatarImg" class="thumb_o">
              </div>
            </div>
            <ul class="level-info">
              <template v-for="(item,index) in vipList">
                <li :key="index">
                  <div :class="{ active: item.active }"><span></span></div>
                  <img :src="item.imgUrl">
                  <span>{{ item.title }}</span>
                </li>
              </template>
            </ul>
          </div>
          <a href="#">会员权益</a>
        </div>
        <div class="bonus-voucher">
          <div class="bonus">
            <img :src="userScoreIconImg">
            <span>积分：</span>
            <span class="bonus-num">854</span>
            <a href="#">如何获取</a>
          </div>
          <div class="voucher">
            <router-link :to="{ path:'/user/userVoucher' }">
              <img :src="userVoucherIconImg" style="margin-right:5px;width:16px;">
              <span>代金券：</span>
              <span class="voucher-num">3张</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        avatarImg: require('../../../../assets/images/common/avatar.png'),
        userLevelImg: require('../../../../assets/images/pages/user/vip0.png'),
        userLevelIconImg: require('../../../../assets/images/pages/user/icon_userlevel.png'),
        userScoreIconImg: require('../../../../assets/images/pages/user/icon_score.png'),
        userVoucherIconImg: require('../../../../assets/images/pages/user/icon_voucher.png'),
        vipList: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.vipList = [
          {title: '会员', imgUrl: require('../../../../assets/images/pages/user/vip0.png'), active: true},
          {title: 'VIP', imgUrl: require('../../../../assets/images/pages/user/vip1.png'), active: false},
          {title: '白金VIP', imgUrl: require('../../../../assets/images/pages/user/vip2.png'), active: false},
          {title: '钻石VIP', imgUrl: require('../../../../assets/images/pages/user/vip3.png'), active: false},
          {title: '黑卡', imgUrl: require('../../../../assets/images/pages/user/vip4.png'), active: false}
        ]
      })
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>
