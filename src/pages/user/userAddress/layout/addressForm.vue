<template>
  <table>
    <tbody>
    <!-- region 收货人 -->
    <tr>
      <td><em>*</em>收货人</td>
      <td>
        <div class="input-div border-div">
          <input type="text" :value="formData.consignee" v-mode="formData.consignee">
        </div>
      </td>
    </tr>
    <!-- endregion 收货人 -->

    <!-- region 所在地区 -->
    <tr>
      <td><em>*</em>所在地区</td>
      <td>
        <div class="input-div">
          <v-distpicker :province="select.province"
                        :city="select.city"
                        :area="select.area"
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
          <textarea placeholder="请填写详细地址，不少5个字" :value="formData.detailAddress"></textarea>
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
            <input type="text" placeholder="手机号码" :value="formData.mobile">
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
              <input type="text" placeholder="区号" :value="formData.areaCode">
            </div>
            <div class="border-div middle-div f_l">
              <input type="text" placeholder="号码" :value="formData.phone">
            </div>
            <div class="border-div last-div f_l">
              <input type="text" placeholder="分机号" :value="formData.extNumber">
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
          <input type="text" :value="formData.postcode">
        </div>
      </td>
    </tr>
    <!-- endregion 邮政编码 -->

    <!-- region 地址别名 -->
    <tr>
      <td>地址别名</td>
      <td>
        <div class="input-div border-div">
          <input type="text" :value="formData.aliasAddress">
        </div>
      </td>
    </tr>
    <!-- endregion 地址别名 -->

    <!-- region 设为默认收货地址 -->
    <tr>
      <td></td>
      <td>
        <label class="checked">
          <input type="checkbox" checked="checked" :value="formData.defaultAddress">
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
        <button class="cancel">取消</button>
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
        select: {province: '江苏省', city: '南京市', area: '雨花台区'},
        formData: {
          consignee: '',        // 收货人
          addressSelect: {
            province: {
              code: '',
              value: ''
            },
            city: {
              code: '',
              value: ''
            },
            area: {
              code: '',
              value: ''
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
        console.log(data.province.value + ' | ' + data.city.value + ' | ' + data.area.value)
        debugger
        this.formData.addressSelect = data
      },
      /**
       * 保存表单事件
       */
      saveFormData () {
        debugger
        this.$emit('saveForm', this.formData)
      }
    }
  }
</script>
