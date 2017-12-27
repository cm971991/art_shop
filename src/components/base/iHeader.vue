<template>
    <div class="header">
        <div class="logo" :class="{ active:logo.active }">
            <a @click="menuRedirect(logo)">
                <img src="https://www.ywart.com/svg_file?path=/Content/image/logo_text.svg&amp;rgb=255,255,255">
            </a>
        </div>
        <div class="nav">
            <template v-for="(item,index) in menuList">
                <a :class="{ active : item.active }" @click="menuRedirect(item)" :key="index">{{ item.name }}</a>
            </template>
            <div class="search">
                <a @click="search($event)">
                    <img src="https://www.ywart.com/svg_file?path=/Content/image/search.svg&amp;rgb=255,255,255"
                         class="searchIcon" :class="{ active : searchFlag }">
                    <img src="https://www.ywart.com/svg_file?path=/Content/image/closeInput.svg&amp;rgb=255,255,255"
                         class="closeIcon" :class="{ active : !searchFlag }">
                </a>
            </div>
        </div>
        <div class="member">
            <div class="login_prev">
                <a>
                    <b @click="loginRedirect">登录 / 注册</b>
                </a>
            </div>
        </div>
        <div class="searchBox" :class="{ active : !searchFlag }">
            <input placeholder="搜索艺术家或艺术品">
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        logo: {name: '', link: '/', active: true},
        menuList: [
          {name: '原创艺术', link: '/buy', active: false},
          {name: '造艺', link: '/makeArt', active: false},
          {name: '藏艺术', link: '/collect/index', active: false},
          {name: '我的珍藏', link: '/user/userWishList', active: false}
        ],
        searchFlag: true
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 菜单跳转事件
       * @param item
       */
      menuRedirect (item) {
        this.logo.active = false
        this.menuList.forEach((val) => {
          val.active = false
        })
        item.active = true
        if (item.name === '原创艺术') {
          this.$store.commit('UPDATE_FOOTER', 'simple')
        } else {
          this.$store.commit('UPDATE_FOOTER', '')
        }
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
       * 查询
       */
      search (e) {
        let target = e.target
        let flag = this.$utils.Dom.hasClass(target, 'searchIcon')
        if (flag) {
          this.searchFlag = false
          this.$utils.Dom.getElement('.searchBox').style.display = 'block'
          this.$utils.Dom.getElement('.searchBox input').focus()
        } else {
          this.$utils.Dom.addClass(this.$utils.Dom.getElement('.closeIcon'), 'back')
          setTimeout(() => {
            this.searchFlag = true
          }, 200)
        }
        return false
      }
    }
  }
</script>

<style lang="less">
    @import "../../assets/styles/comp/iHeader";
</style>
