<template>
  <div class="header" v-show="showNav">
    <div class="logo" :class="{ active:navType === 'logo' }">
      <a @click="menuRedirect(logo)">
        <img v-lazy="logImg">
      </a>
    </div>

    <!-- region 导航栏 -->
    <div class="nav">
      <template v-for="(item,index) in menuList">
        <a :class="{ active : item.type === navType }" @click="menuRedirect(item)" :key="index">{{ item.name }}</a>
      </template>
      <div class="search">
        <a @click="search()">
          <i class="icon-search" title="搜索" v-html="searchIcon"></i>
        </a>
      </div>
      <div class="cart" :class="{ active: !userInfo }" @click="cartRedirect">
        <i class="icon-search-cart" title="购物车" v-html="cartIcon"></i>
      </div>
    </div>
    <!-- endregion 导航栏 -->

    <!-- region 登录按钮 -->
    <div class="member">
      <div class="login-prev" :class="{ active: userInfo }">
        <a><b @click="loginRedirect">登录 / 注册</b></a>
      </div>
      <div class="login-next" :class="{ active: !userInfo }">
        <router-link :to="{path:'/user/userCenter'}">
          <i class="icon-user" v-html="userIcon"></i>
          <i class="red-dot"></i>
        </router-link>
        <div class="login-hover">
          <i></i>
          <ul>
            <li>
              <router-link :to="{path:'/user/userCenter'}">会员中心</router-link>
            </li>
            <li>
              <router-link :to="{path:'/user/userOrder'}">我的订单</router-link>
            </li>
            <li>
              <router-link :to="{path:'/shopping/cart'}">我的购物车</router-link>
            </li>
            <li><a @click="exit">退出</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- endregion 登录按钮 -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { isEmptyObject } from '../../assets/utils/util'

  export default {
    components: {},
    props: {
      showNav: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        cartIcon: '&#xe60c;',
        userIcon: '&#xe606;',
        searchIcon: '&#xe603;',
        logImg: require('../../assets/images/common/logo.png'),
        logo: {name: 'index', link: '/', type: 'logo'},
        menuList: [
          {name: '原创艺术', link: '/buy', type: 'buy'},
          {name: '美物', link: '/makeArt', type: 'makeArt'},
          {name: '发现', link: '/discovery/index', type: 'discovery'},
          {name: '我的珍藏', link: '/user/userWish', type: 'userWish'},
          {name: '经纪人专享', link: '/broker', type: 'broker'}
        ]
      }
    },
    created () {
    },
    mounted () {
      if (this.$route.name !== 'index') {
        this.menuList.forEach((item) => {
          item.active = item.link === this.$route.path
        })
        this.logo.active = false
      }
    },
    computed: {
      ...mapState({
        userInfo: (state) => {
          return isEmptyObject(state.userInfo.userInfo)
        },
        navType: (state) => {
          return state.global.navType
        }
      })
    },
    methods: {
      /**
       * 菜单跳转事件
       * @param item
       */
      menuRedirect (item) {
        this.$store.commit('UPDATE_NAVTYPE', item.type)
        this.$router.push({path: item.link})
        return false
      },
      /**
       * 登录、注册跳转
       */
      loginRedirect () {
        this.$router.push({path: '/login'})
        return false
      },
      /**
       * 退出登录
       */
      exit () {
        this.$store.commit('INIT_USERINFO')
        return false
      },
      /**
       * 查询
       */
      search () {
        this.$router.push({path: '/searchResult'})
        return false
      },
      /**
       * 跳转到购物车
       */
      cartRedirect () {
        this.$router.push({path: '/shopping/cart'})
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/comp/iHeader";
</style>
