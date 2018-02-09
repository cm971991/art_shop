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
            <div class="password-default table">
              <span class="show pwd-show">********</span>
              <button class="modify" @click="modify('pwd')">修改</button>
            </div>
            <ul class="password-modify table _hidden">
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
                  <button class="save pwd-save">确定</button>
                  <button class="cancel">取消</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="title">手机号码</div>
          <div class="form">
            <div class="mobile-default table">
              <span class="phone mobile-show">13851790306</span>
              <button class="modify" @click="modify('mob')">修改</button>
            </div>
            <ul class="mobile-modify table _hidden">
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
                  <button class="save mobile-save">绑定</button>
                  <button class="cancel">取消
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="title">电子邮件</div>
          <div class="form">
            <div class="email-default table">
              <span class="email email-show">未设置</span>
              <button class="modify" @click="modify('email')">修改</button>
            </div>
            <ul class="email-modify table _hidden">
              <li>
                <div class="input-div">
                  <input type="email" placeholder="请输入有效的电子邮件" class="email_value">
                </div>
                <button class="email-send _hidden">发送确认邮件</button>
                <button>取消</button>
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

      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userSecurity";
</style>
