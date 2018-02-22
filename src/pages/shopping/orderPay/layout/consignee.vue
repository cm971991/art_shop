<template>
  <div class="address">
    <div class="order-panel clearfix">
      <div class="title-header">收货人信息</div>
      <div class="f_l panel-container panel-address">
        <ul class="clearfix">
          <li class="active">
            <p class="consignee">(陈明 收）</p>
            <a href="javascript:void(0);" class="s_edit">
              <i class="icon-edit" v-html="editIcon"></i>
            </a>
            <a href="javascript:void(0);" class="s_del">
              <i class="icon-delete" v-html="deleteIcon"></i>
            </a>
            <p class="phone">13776626715</p>
            <p>江苏 南京市 玄武区其额我去诶我去而起我</p>
            <p>
              <span class="default-address">默认地址</span>
              <span class="s_default">设为默认</span>
            </p>
            <div class="default-txt">
              <span><i class="icon-check" v-html="checkIcon"></i></span>
            </div>
          </li>
          <li class="address-new" @click="addAddress">
            <a href="javascript:void(0);" class="insert _add_addrs">
              <b>+</b>新增收货地址
            </a>
          </li>
        </ul>
      </div>
    </div>
    <modal name="demo-login" transition="pop-out" :width="750" :height="650">
      <address-form></address-form>
    </modal>
  </div>
</template>

<script>
  const addressForm = () => import('../../../user/userAddress/layout/addressForm')
  export default {
    components: {addressForm},
    data () {
      return {
        editIcon: '&#xe604;',
        deleteIcon: '&#xe609;',
        checkIcon: '&#xe643;'
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      addAddress () {
        console.log('addAddress')
        this.$modal.show('demo-login')
      }
    }
  }
</script>
