<template>
    <div class="page-login">
        <div class="page-login-make"></div>
        <div class="page-login-box">
            <div class="page-login-dialog">
                <i class="close-login icon-close" v-html="closeIcon"></i>
                <section class="login-dialog">
                    <div class="account">
                        <input type="text" placeholder="请输入手机或邮箱"/>
                    </div>
                    <div class="password">
                        <input type="password" placeholder="请输入密码"/>
                    </div>
                    <p class="forget-pwd-btn">忘记密码</p>
                    <button class="submit">登录</button>
                    <p class="has-another">还没有账号？<span>请注册</span></p>
                    <div class="line">
                        <span class="line-item"></span>
                        <span class="huo">或</span>
                        <span class="line-item"></span>
                    </div>
                    <div class="login-third">
                        <a href="#">
                            <i class="icon-sina" v-html="sinaIcon"></i>
                        </a>
                        <a href="#">
                            <i class="icon-wechat" v-html="weChatIcon"></i>
                        </a>
                        <a href="#">
                            <i class="icon-facebook" v-html="faceBookIcon"></i>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        closeIcon: '&#xe685;',
        sinaIcon: '&#xe67b;',
        weChatIcon: '&#xe61b;',
        faceBookIcon: '&#xe66e;'
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

<style lang="less">
    @import "../../assets/styles/comp/iLogin";
</style>
