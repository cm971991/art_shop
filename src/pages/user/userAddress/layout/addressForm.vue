<template>
  <table>
    <tbody>
    <tr>
      <td><em>*</em>收货人</td>
      <td>
        <div class="input-div border-div">
          <input type="text">
        </div>
      </td>
    </tr>
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
    <tr>
      <td><em>*</em>详细地址</td>
      <td>
        <div class="input-div border-div">
          <textarea placeholder="请填写详细地址，不少5个字"></textarea>
        </div>
      </td>
    </tr>
    <tr>
      <td><em>*</em>手机号码</td>
      <td>
        <div class="input-div">
          <select style="width:30%;margin-right:1%;">
            <option value="86">中国大陆 +86</option>
          </select>
          <div class="border-div f_r" style="width:68%;">
            <input type="text" placeholder="手机号码">
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td>电话号码</td>
      <td>
        <div class="input-div">
          <select style="width:30%;margin-right:1%;">
            <option value="86">中国大陆 +86</option>
          </select>
          <div class="f_r" style="width:68%;">
            <div class="border-div f_l" style="width:32%;margin-right:1%;">
              <input type="text" placeholder="区号">
            </div>
            <div class="border-div f_l" style="width:32%;margin-right:1%;">
              <input type="text" placeholder="号码">
            </div>
            <div class="border-div f_l" style="width:32%;">
              <input type="text" placeholder="分机号">
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td>邮政编码</td>
      <td>
        <div class="input-div border-div">
          <input type="text">
        </div>
      </td>
    </tr>
    <tr>
      <td>地址别名</td>
      <td>
        <div class="input-div border-div">
          <input type="text">
        </div>
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <label class="checked">
          <input type="checkbox" name="IsDefault" value="0" checked="checked">
          <span>设为默认收货地址</span>
        </label>
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button class="save" type="button">保存</button>
        <button class="cancel" type="reset">取消</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import VDistpicker from 'v-distpicker'

  export default {
    components: {VDistpicker},
    data () {
      return {
        select: {province: '江苏省', city: '南京市', area: '雨花台区'}
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
      }
    }
  }
</script>

<style lang="less">
  .MyContain {
    background-color: #fff;
  }
</style>
