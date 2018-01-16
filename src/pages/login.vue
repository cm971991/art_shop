<template>
  <div class="login-contain">
    <div class="login-bk"></div>
    <i-login :show-dialog="true" @login-success="$router.go(-1)"></i-login>
  </div>
</template>

<script>
  import iLogin from '../components/base/iLogin'

  export default {
    components: {iLogin},
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
  .login-contain {
    .login-bk {
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url("https://cdn.ywart.com/material/mainsite/login/login-back-2.jpg");
      background-size: cover;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
</style>
