<template>
  <div class="page-login" v-show="showDialog">
    <div class="page-login-make"></div>
    <div class="page-login-box">
      <div class="page-login-dialog">
        <i class="close-login icon-close" v-html="closeIcon" @click="closeDialog"></i>
        <section class="login-dialog">
          <div class="account">
            <input type="text" placeholder="请输入手机或邮箱" v-model="formData.account"/>
            <span class="tip" :class="{ active: !accountValidate }">{{ errMsg }}</span>
          </div>
          <div class="password">
            <input type="password" placeholder="请输入密码" v-model="formData.password"/>
            <span class="tip" :class="{ active: !pwdValidate }"> {{ errMsg }} </span>
          </div>
          <p class="forget-pwd-btn">忘记密码</p>
          <button class="submit" @click="login">登录</button>
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
  import Service from '../../service/login_service'

  export default {
    props: {
      showDialog: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        closeIcon: '&#xe685;',
        sinaIcon: '&#xe67b;',
        weChatIcon: '&#xe61b;',
        faceBookIcon: '&#xe66e;',
        formData: {account: '', password: ''},
        accountValidate: true,
        pwdValidate: true,
        firstLoad: true
      }
    },
    created () {
      this.$nextTick(() => {
        this.service = new Service(this)
      })
    },
    mounted () {
      this.firstLoad = true
    },
    computed: {
      errMsg () {
        if (!this.firstLoad && !this.$utils.Validate.chkFormat(this.formData.account, 'email') && !this.$utils.Validate.chkFormat(this.formData.account, 'phone')) {
          this.accountValidate = false
          return '您输入的不是一个手机号或邮箱'
        } else {
          this.accountValidate = true
        }
        if (!this.firstLoad && !this.formData.password) {
          this.pwdValidate = false
          return '登录密码不能为空'
        } else {
          this.pwdValidate = true
        }
        return null
      }
    },
    methods: {
      login () {
        this.firstLoad = false
        if (this.errMsg) {
          return false
        }
        this.service.loginByAccount(this.formData)
        // let path = this.$route.path
        // if (path === '/login') { // 登陆页调用 提供外部回调函数
        //   this.$emit('login-success')
        // } else { // 外部调用 非登陆页调用
        //   this.$store.commit('SHOW_LOGIN', false)
        //   window.location.reload()
        // }
      },
      /**
       * 关闭登录框
       */
      closeDialog () {
        let path = this.$route.path
        if (path === '/login') { // 登陆页调用 则回退到上一页
          this.$router.go(-1)
        } else { // 外部调用 非登陆页调用 则关闭登陆框
          this.$store.commit('SHOW_LOGIN', false)
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/comp/iLogin";
</style>
