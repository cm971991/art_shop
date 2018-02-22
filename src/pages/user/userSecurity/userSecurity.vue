<template>
  <div class="userSecurity-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc_content clearfix">
      <div class="manage-info">
        <password-form @modify="modify" @save="save" @cancle="cancle"></password-form>
        <mobile-form @modify="modify" @save="save" @cancle="cancle"></mobile-form>
        <email-form @modify="modify" @save="save" @cancle="cancle"></email-form>
      </div>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  const passwordForm = () => import('./layout/passwordForm')
  const mobileForm = () => import('./layout/mobileForm')
  const emailForm = () => import('./layout/emailForm')
  export default {
    components: {
      iMenu, passwordForm, mobileForm, emailForm
    },
    data () {
      return {}
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
            break
          case 'mob':
            break
          case 'email':
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
            break
          case 'mob':
            break
          case 'email':
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
            break
          case 'mob':
            break
          case 'email':
            break
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userSecurity";
</style>
