<template>
  <div class="address">
    <div class="order-panel clearfix">
      <div class="title-header">收货人信息</div>
      <div class="f_l panel-container panel-address">
        <ul class="clearfix">
          <li class="_dizhi defualt active">
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
          <li class="address-new">
            <a href="javascript:void(0);" class="insert _add_addrs">
              <b>+</b>新增收货地址
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
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
  .MyContain {
    background-color: #fff;
  }
</style>
