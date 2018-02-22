<template>
  <div class="item">
    <div class="title">手机号码</div>
    <div class="form">
      <div class="mobile-default table" :class="{ active: !mobData.active }">
        <span class="phone mobile-show">13851790306</span>
        <button class="modify" @click="modify()">修改</button>
      </div>
      <ul class="mobile-modify table" :class="{ active: mobData.active }">
        <li>
          <div class="input-div">
            <input type="tel" class="font-b mobile" value="">
          </div>
        </li>
        <li>
          <div class="verify-div">
            <div class="input-div first-div">
              <input placeholder="输入验证码" class="code-login">
            </div>
            <div class="tool input-div">
              <img class="codeimg-login" src="/SessionWriteable/GetLoginCaptcha?t=20180209112613060">
            </div>
            <button class="code-get get-code f_r">发送验证码</button>
          </div>
        </li>
        <li>
          <div class="input-div f_l">
            <input type="text" class="code" placeholder="输入短信验证码">
          </div>
        </li>
        <li>
          <div class="buttons">
            <button class="save mobile-save" @click="save()">绑定</button>
            <button class="cancel" @click="cancel()">取消
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        mobData: {
          mob: '',
          verifyCode: '',
          imgCode: '',
          smsCode: '',
          active: false
        }
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       *
       */
      modify () {
        this.mobData.active = !this.mobData.active
        this.$emit('modify', 'mob')
      },
      /**
       *
       */
      save () {
        this.mobData.active = false
        this.$emit('save', 'mob')
      },
      /**
       *
       */
      cancel () {
        this.mobData.active = false
        this.$emit('cancel', 'mob')
      }
    }
  }
</script>

<style lang="less">
  .MyContain {
    background-color: #fff;
  }
</style>
