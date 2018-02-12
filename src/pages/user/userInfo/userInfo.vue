<template>
  <div class="userInfo-contain">
    <!-- region 菜单 -->
    <i-menu></i-menu>
    <!-- endregion 菜单 -->

    <!-- region 右侧内容 -->
    <div class="uc-content clearfix">
      <ul class="manage-info">
        <li class="item head-pic">
          <div class="item-title">选择头像</div>
          <div class="head-pics">
            <template v-for="(item,index) in headList">
              <div class="img" :key="index" @click="headChoose(item)">
                <img class="tu" :src="item.imgUrl">
                <div>{{ item.title }}</div>
              </div>
            </template>
          </div>
          <div class="my-pic">
            <picture-input
              ref="pictureInput"
              @change="onChange"
              @onError="onError"
              width="166"
              height="166"
              margin="0"
              accept="image/jpeg,image/png"
              size="2"
              buttonClass="btn"
              :alertOnError="true"
              :customStrings="{
        upload: '<p>您的浏览器暂不支持上传</p>',
        drag: '点击选择图片',
        change:'重新上传',
        fileType: '上传文件格式错误'
      }">
            </picture-input>
            <p>(上传文件大小不超过2MB)</p>
          </div>
        </li>
        <li class="item nick-name">
          <div class="item-title">昵称</div>
          <div class="right-input border-div">
            <input type="text" placeholder="昵称" :value="formData.nickName">
          </div>
        </li>
        <li class="item real-name">
          <div class="item-title">真实姓名</div>
          <div class="right-input border-div">
            <input type="text" placeholder="真实姓名" :value="formData.realName">
          </div>
        </li>
        <li class="item sex">
          <div class="item-title">我是</div>
          <div class="right-input">
            <input type="radio" name="sexGroup" :value="formData.sex" checked="">男 ♂
            <input type="radio" name="sexGroup" :value="formData.sex">女 ♀
          </div>
        </li>
        <li class="item birthday">
          <div class="item-title">生日</div>
          <div class="birthday-container clearfix">
            <div class="right-input border-div">
              <input type="text" :value="formData.birthdayYear" maxlength="4"/>
            </div>
            <div class="right-input border-div">
              <input type="text" :value="formData.birthdayMonth" maxlength="2"/>
            </div>
            <div class="right-input border-div">
              <input type="text" :value="formData.birthdayDay" maxlength="2"/>
            </div>
          </div>
          <div class="div-tip">填写获取生日专属优惠</div>
        </li>
      </ul>
      <button class="all-save" @click="allSave">保存</button>
    </div>
    <!-- endregion 右侧内容 -->
  </div>
</template>

<script>
  const iMenu = () => import('../../../components/base/iMenu')
  const pictureInput = () => import('../../../components/common/pictureInput')

  export default {
    components: {iMenu, pictureInput},
    data () {
      return {
        headList: [
          {title: '凡高', imgUrl: require('../../../../static/images/user/userCenter/avatar0.png')},
          {title: '巴勃罗·毕加索', imgUrl: require('../../../../static/images/user/userCenter/avatar11.png')},
          {title: '萨尔瓦多·达利', imgUrl: require('../../../../static/images/user/userCenter/avatar2.png')},
          {title: '安迪·沃霍尔', imgUrl: require('../../../../static/images/user/userCenter/avatar3.png')},
          {title: '卡拉瓦乔', imgUrl: require('../../../../static/images/user/userCenter/avatar4.png')},
          {title: '卢西安·弗洛伊德', imgUrl: require('../../../../static/images/user/userCenter/avatar5.png')},
          {title: '拉斐尔·桑西', imgUrl: require('../../../../static/images/user/userCenter/avatar6.png')},
          {title: '草间弥生', imgUrl: require('../../../../static/images/user/userCenter/avatar7.png')},
          {title: '保罗·塞尚', imgUrl: require('../../../../static/images/user/userCenter/avatar8.png')},
          {title: '保罗·高更', imgUrl: require('../../../../static/images/user/userCenter/avatar9.png')},
          {title: '伦勃朗', imgUrl: require('../../../../static/images/user/userCenter/avatar10.png')},
          {title: '阿尔布雷特·丢勒', imgUrl: require('../../../../static/images/user/userCenter/avatar11.png')},
          {title: '弗里达·卡洛', imgUrl: require('../../../../static/images/user/userCenter/avatar12.png')},
          {title: '凯绥·珂勒惠支', imgUrl: require('../../../../static/images/user/userCenter/avatar13.png')},
          {title: '玛丽娜·阿布拉莫维奇', imgUrl: require('../../../../static/images/user/userCenter/avatar14.png')}
        ],
        formData: {
          nickName: '',
          realName: '',
          sex: 1,
          birthdayYear: 2000,
          birthdayMonth: 1,
          birthdayDay: 1
        }
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      onChange (image) {
        console.log('New picture selected!')
        if (image) {
          this.image = image
          let saveBtn = document.querySelector('.picture-input .btn-save')
          if (!saveBtn) {
            saveBtn = document.createElement('button')
            saveBtn.innerHTML = '保存'
            saveBtn.className = 'btn-save'
            saveBtn.addEventListener('click', () => {
              console.log('saveBtn:', saveBtn)
            })
            document.querySelector('.preview-container').parentElement.appendChild(saveBtn)
          }
        } else {
          this.$modal.show('dialog', {title: '提示', text: '上传失败', buttons: [{title: '关闭'}]})
        }
      },
      onError (error) {
        this.$modal.show('dialog', {title: '提示', text: error.message, buttons: [{title: '关闭'}]})
      },
      allSave () {

      },
      headChoose (item) {
        this.$refs.pictureInput.$refs.fileInput.click()
        console.log('item:', item)
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/pages/userInfo";
</style>
