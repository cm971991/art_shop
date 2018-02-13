<template>
  <div class="userAddress-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc_content clearfix">
      <div class="manage-address">
        <div class="insert">
          <div class="title" @click="showAddressForm"><span>+ 新增收货地址</span></div>
          <div class="form" :style="formStyle">
            <address-form @saveForm="saveForm"></address-form>
          </div>
        </div>
        <div class="address">
          <ul class="clearfix">
            <li class="default">
              <div class="default-txt">默认地址</div>
              <p>陈明</p>
              <p>13776626715</p>
              <p>江苏 南京市 玄武区其额我去诶我去而起我</p>
              <p></p>
              <div class="controller _hidden">
                <a href="javascript:void(0);" class="s-default">设为默认</a>
                <a href="javascript:void(0);" class="s-edit" @click="showAddressForm">修改</a>
                <a href="javascript:void(0);" class="s-del" @click="deleteFormData">删除</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  const addressForm = () => import('./layout/addressForm')
  export default {
    components: {iMenu, addressForm},
    data () {
      return {
        showFormFlag: false
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
      formStyle () {
        return {
          height: this.showFormFlag ? '612px' : '0',
          padding: this.showFormFlag ? '20px 80px' : '0 80px'
        }
      }
    },
    methods: {
      /**
       * 显示、隐藏地址表单
       */
      showAddressForm () {
        this.showFormFlag = !this.showFormFlag
      },
      /**
       * 删除
       */
      deleteFormData () {

      },
      /**
       *
       * @param form
       */
      saveForm (form) {
        console.log('form:', form)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userAddress";
</style>
