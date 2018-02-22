<template>
  <div class="item">
    <div class="title">电子邮件</div>
    <div class="form">
      <div class="email-default table" :class="{ active: !emailData.active }">
        <span class="email email-show">未设置</span>
        <button class="modify" @click="modify()">修改</button>
      </div>
      <ul class="email-modify table" :class="{ active: emailData.active }">
        <li>
          <div class="input-div">
            <input type="email" placeholder="请输入有效的电子邮件" class="email_value">
          </div>
          <button class="email-send" @click="save()">发送确认邮件</button>
          <button @click="cancel()">取消</button>
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
       */
      modify () {
        this.emailData.active = !this.emailData.active
        this.$emit('modify', 'email')
      },
      /**
       *
       */
      save () {
        this.emailData.active = false
        this.$emit('save', 'email')
      },
      /**
       *
       */
      cancel () {
        this.emailData.active = false
        this.$emit('cancel', 'email')
      }
    }
  }
</script>

<style lang="less">
  .MyContain {
    background-color: #fff;
  }
</style>
