<template>
  <div class="item">
    <div class="title">登录密码</div>
    <div class="form">
      <div class="password-default table" :class="{ active: !pwdData.active }">
        <span class="show pwd-show">********</span>
        <button class="modify" @click="modify()">修改</button>
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
            <button class="save pwd-save" @click="save()">确定</button>
            <button class="cancel" @click="cancel()">取消</button>
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
        pwdData: {
          currPwd: '',
          newPwd: '',
          confirmPwd: '',
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
        this.pwdData.active = !this.pwdData.active
        this.$emit('modify', 'pwd')
      },
      /**
       *
       */
      save () {
        this.pwdData.active = false
        this.$emit('save', 'pwd')
      },
      /**
       *
       */
      cancel () {
        this.pwdData.active = false
        this.$emit('cancel', 'pwd')
      }
    }
  }
</script>

<style lang="less">
  .MyContain {
    background-color: #fff;
  }
</style>
