<template>
  <div class="userSecurity-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc_content clearfix">
      <div class="manage-info">
        <div class="item">
          <div class="title">登录密码</div>
          <div class="form">
            <div class="password-default table" :class="{ active: !pwdData.active }">
              <span class="show pwd-show">********</span>
              <button class="modify" @click="modify('pwd')">修改</button>
            </div>
            <ul class="password-modify table" :class="{ active: pwdData.active }">
              <li class="">
                <div>当前密码</div>
                <div class="input-div">
                  <input type="password" :value="pwdData.currPwd">
                </div>
              </li>
              <li>
                <div>新密码</div>
                <div class="input-div">
                  <input type="password" :value="pwdData.newPwd">
                </div>
              </li>
              <li>
                <div>确认新密码</div>
                <div class="input-div">
                  <input type="password" :value="pwdData.confirmPwd">
                </div>
              </li>
              <li>
                <div class="buttons">
                  <button class="save pwd-save" @click="save('pwd')">确定</button>
                  <button class="cancel" @click="cancel('pwd')">取消</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="title">手机号码</div>
          <div class="form">
            <div class="mobile-default table" :class="{ active: !mobData.active }">
              <span class="phone mobile-show">13851790306</span>
              <button class="modify" @click="modify('mob')">修改</button>
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
                  <button class="save mobile-save" @click="save('mob')">绑定</button>
                  <button class="cancel" @click="cancel('mob')">取消
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="title">电子邮件</div>
          <div class="form">
            <div class="email-default table" :class="{ active: !emailData.active }">
              <span class="email email-show">未设置</span>
              <button class="modify" @click="modify('email')">修改</button>
            </div>
            <ul class="email-modify table" :class="{ active: emailData.active }">
              <li>
                <div class="input-div">
                  <input type="email" placeholder="请输入有效的电子邮件" class="email_value">
                </div>
                <button class="email-send" @click="save('email')">发送确认邮件</button>
                <button @click="cancel('email')">取消</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  export default {
    components: {iMenu},
    data () {
      return {
        pwdData: {
          currPwd: '',
          newPwd: '',
          confirmPwd: '',
          active: false
        },
        mobData: {
          mob: '',
          verifyCode: '',
          imgCode: '',
          smsCode: '',
          active: false
        },
        emailData: {
          email: '',
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
       * @param type
       */
      modify (type) {
        switch (type) {
          case 'pwd':
            this.pwdData.active = !this.pwdData.active
            break
          case 'mob':
            this.mobData.active = !this.mobData.active
            break
          case 'email':
            this.emailData.active = !this.emailData.active
            break
        }
      },
      /**
       *
       * @param type
       */
      save (type) {
        switch (type) {
          case 'pwd':
            this.pwdData.active = false
            break
          case 'mob':
            this.mobData.active = false
            break
          case 'email':
            this.emailData.active = false
            break
        }
      },
      /**
       *
       * @param type
       */
      cancel (type) {
        switch (type) {
          case 'pwd':
            this.pwdData.active = false
            break
          case 'mob':
            this.mobData.active = false
            break
          case 'email':
            this.emailData.active = false
            break
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userSecurity";
</style>
