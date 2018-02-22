<template>
  <table>
    <tbody>
    <!-- region 收货人 -->
    <tr>
      <td><em>*</em>收货人</td>
      <td>
        <div class="input-div border-div">
          <input type="text" maxlength="6" v-model="formData.consignee">
        </div>
      </td>
    </tr>
    <!-- endregion 收货人 -->

    <!-- region 所在地区 -->
    <tr>
      <td><em>*</em>所在地区</td>
      <td>
        <div class="input-div">
          <v-distpicker :province="formData.address.province.value"
                        :city="formData.address.city.value"
                        :area="formData.address.area.value"
                        @selected="onSelected"></v-distpicker>
        </div>
      </td>
    </tr>
    <!-- endregion 所在地区 -->

    <!-- region 详细地址 -->
    <tr>
      <td><em>*</em>详细地址</td>
      <td>
        <div class="input-div border-div">
          <textarea placeholder="请填写详细地址，不少5个字" minlength="5" v-model="formData.detailAddress"></textarea>
        </div>
      </td>
    </tr>
    <!-- endregion 详细地址 -->

    <!-- region 手机号码 -->
    <tr>
      <td><em>*</em>手机号码</td>
      <td>
        <div class="input-div">
          <select class="mob-select">
            <option value="86">中国大陆 +86</option>
          </select>
          <div class="border-div mob-div f_r">
            <input type="text" placeholder="手机号码" maxlength="11" v-model="formData.mobile">
          </div>
        </div>
      </td>
    </tr>
    <!-- endregion 手机号码 -->

    <!-- region 电话号码 -->
    <tr>
      <td>电话号码</td>
      <td>
        <div class="input-div">
          <select class="mob-select">
            <option value="86">中国大陆 +86</option>
          </select>
          <div class="middle-row f_r">
            <div class="border-div middle-div f_l">
              <input type="text" placeholder="区号" v-model="formData.areaCode">
            </div>
            <div class="border-div middle-div f_l">
              <input type="text" placeholder="号码" v-model="formData.phone">
            </div>
            <div class="border-div last-div f_l">
              <input type="text" placeholder="分机号" v-model="formData.extNumber">
            </div>
          </div>
        </div>
      </td>
    </tr>
    <!-- endregion 电话号码 -->

    <!-- region 邮政编码 -->
    <tr>
      <td>邮政编码</td>
      <td>
        <div class="input-div border-div">
          <input type="text" v-model="formData.postcode">
        </div>
      </td>
    </tr>
    <!-- endregion 邮政编码 -->

    <!-- region 地址别名 -->
    <tr>
      <td>地址别名</td>
      <td>
        <div class="input-div border-div">
          <input type="text" v-model="formData.aliasAddress">
        </div>
      </td>
    </tr>
    <!-- endregion 地址别名 -->

    <!-- region 设为默认收货地址 -->
    <tr>
      <td></td>
      <td>
        <label class="checked">
          <input type="checkbox" checked="checked" v-model="formData.defaultAddress">
          <span>设为默认收货地址</span>
        </label>
      </td>
    </tr>
    <!-- endregion 设为默认收货地址 -->

    <!-- region 按钮行 -->
    <tr>
      <td></td>
      <td>
        <button class="save" @click="saveFormData">保存</button>
        <button class="cancel" @click="cancelFormData">取消</button>
      </td>
    </tr>
    <!-- endregion 按钮行 -->
    </tbody>
  </table>
</template>

<script>
  import VDistpicker from 'v-distpicker'

  export default {
    components: {VDistpicker},
    data () {
      return {
        formData: {
          consignee: '',        // 收货人
          address: {
            province: {
              code: '320000',
              value: '江苏省'
            },
            city: {
              code: '320100',
              value: '南京市'
            },
            area: {
              code: '320114',
              value: '雨花台区'
            }
          }, // 所在地区
          detailAddress: '',    // 详细地址
          mobile: '',           // 手机号码
          areaCode: '',         // 区号
          phone: '',            // 号码
          extNumber: '',        // 分机号
          postcode: '',         // 邮政编码
          aliasAddress: '',     // 地址别名
          defaultAddress: false // 设为默认收货地址
        }
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      onSelected (data) {
        this.formData.address = data
      },
      /**
       * 保存表单事件
       */
      saveFormData () {
        let errMsg = this.validateForm()
        if (errMsg) {
          this.$modal.show('dialog', {title: '提示', text: errMsg, buttons: [{title: '关闭'}]})
          return
        }
        this.$emit('saveForm', this.formData)
      },
      cancelFormData () {
        this.$emit('cancelForm', this.formData)
      },
      /**
       * 验证表单输入信息
       * @returns {boolean}
       */
      validateForm () {
        if (!this.$utils.Validate.chkFormat(this.formData.consignee, 'chinaName')) {
          return '收货人格式错误，请输入中文'
        }
        if ((!this.formData.address.province || !this.formData.address.province.code) ||
          (!this.formData.address.area || !this.formData.address.area.code) ||
          (!this.formData.address.city || !this.formData.address.city.code)) {
          return '所在地区 省、市、区不能为空'
        }
        if (!this.formData.detailAddress) {
          return '详细地址不能为空，不少于5个字'
        }
        if (!this.$utils.Validate.chkFormat(this.formData.mobile, 'phone')) {
          return '请输入正确的手机号码'
        }
        return ''
      }
    }
  }
</script>

<style lang="less">
  table {
    border: 0;
    padding: 0;
    margin: 0;
    tr {
      td {
        padding: 10px;
        font-size: 14px;
        button {
          width: 64px;
          height: 34px;
          text-align: center;
          &.save {
            background: #F33;
            border: 1px solid #F33;
            color: #FFF;
            margin-right: 10px;
          }
          &.cancel {
            background: #f6f6f6;
            border: 1px solid #dcdcdc;
            color: #6f757a;
          }
        }
        input, select, textarea {
          border: 0;
          height: 38px;
          line-height: 38px;
          padding: 0 10px;
          color: #333;
          font-size: 14px;
        }
        input[type='checkbox'] {
          width: 20px;
          height: 20px;
          display: inline-block;
          position: relative;
          top: 5px;
        }
        input {
          width: 100%;
          padding-top: 3px;
          height: 33px;
          line-height: 33px;
        }
        select {
          width: 22%;
          margin-right: 1%;
          float: left;
          border: 1px solid #dcdcdc;
          background: url('../../../../assets/images/common/select_bg.png') no-repeat right #fff;
        }
        textarea {
          height: 80px;
          width: 100%;
          line-height: 24px;
        }
        .middle-row {
          width: 68%;
        }
        .middle-div {
          width: 32%;
          margin-right: 1%;
        }
        .mob-div {
          width: 68%;
        }
        .mob-select {
          width: 30%;
          margin-right: 1%;
        }
        .border-div {
          border: 1px solid #dcdcdc;
          overflow: hidden;
        }
        .input-div {
          width: 600px;
          padding: 0;
          overflow: hidden;
        }
        .last-div {
          width: 32%;
        }
        &:first-child {
          text-align: right;
          vertical-align: top;
          padding-top: 15px;
          em {
            color: #F33;
            padding-right: 5px;
            font-style: normal;
          }
        }
      }
    }
  }
</style>
