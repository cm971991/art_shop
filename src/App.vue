<template>
  <div id="app">
    <i-header :showNav="global.showNav"></i-header>
    <router-view/>
    <i-footer :type="global.footerType"></i-footer>
    <i-login :show-dialog="login.loginDialogIsShow"></i-login>
    <i-services></i-services>
    <v-dialog/>
  </div>
</template>

<script>
  import iHeader from './components/base/iHeader'
  import iFooter from './components/base/iFooter'
  import iLogin from './components/base/iLogin'
  import iServices from './components/base/iServices'
  import {mapState} from 'vuex'

  export default {
    components: {
      iHeader, iFooter, iLogin, iServices
    },
    data () {
      return {}
    },
    created () {
    },
    computed: {
      ...mapState([
        'login', 'global'
      ])
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="less">
  @import "./assets/styles/common/base.less";
  @import "./assets/styles/common/icon.less";

  body {
    min-width: 1200px;
    margin-top: 0;
    position: relative;
    padding-bottom: 445px;

    #app {
      height: 100%;
      width: 100%;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 68px;
      box-sizing: border-box;
    }
  }
</style>
