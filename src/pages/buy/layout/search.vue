<template>
  <!-- region 默认查询条件 -->
  <div class="simple">
    <!-- region 查询条件 左侧 -->
    <div class="choice-left">
      <!-- region 价格 -->
      <p class="price">
        <b>价格</b>
        <template v-for="(item,index) in computePriceList">
          <i>{{ item.title }}</i>
          <a :class="{ active : item.active }"
             :data-v="item.value"
             :key="index"
             @click="chooseSearch(item, 'price')"
             v-if="index < priceList.length - 1"></a>
        </template>
      </p>
      <!-- endregion 价格 -->
      <!-- region 尺寸 -->
      <p class="size">
        <b>尺寸</b>
        <template v-for="(item,index) in computeSizeList">
          <i>{{ item.title }}</i>
          <a :class="{ active : item.active }"
             :data-v="item.value"
             :key="index"
             @click="chooseSearch(item, 'size')"
             v-if="index < sizeList.length - 1"></a>
        </template>
      </p>
      <!-- endregion 尺寸 -->
      <!-- region 颜色 -->
      <p class="color">
        <b>颜色</b>
        <template v-for="(item,index) in computeColorList">
          <a :class="[{ active : item.active }, item.className ]"
             :data-v="item.value"
             :key="index"
             @click="chooseSearch(item, 'color')"
             v-if="item.value !== 'bwg'"></a>
          <a :class="[{ active : item.active }, item.className ]"
             :data-v="item.value"
             :key="index"
             @click="chooseSearch(item, 'color')"
             v-else>
            <img v-lazy="bwgImg" alt="黑白灰">
          </a>
        </template>
      </p>
      <!-- endregion 颜色 -->
      <!-- region 形状 -->
      <p class="shape">
        <b>形状</b>
        <template v-for="(item,index) in computeShapeList">
          <a :class="[{ active : item.active }, item.className ]"
             :data-v="item.value"
             :key="index"
             @click="chooseSearch(item, 'shape')"
             v-if="item.value !== 'irregular'"></a>
          <a :class="[{ active : item.active }, item.className ]"
             :data-v="item.value"
             :key="index"
             @click="chooseSearch(item, 'shape')"
             v-else>
            <img v-lazy="starEmptyImg" alt="default" class="default"/>
            <img v-lazy="starMiddleImg" alt="hover" class="hover"/>
            <img v-lazy="starChooseImg" alt="active" class="show"/>
          </a>
        </template>
      </p>
      <!-- endregion 形状 -->
    </div>
    <!-- endregion 查询条件 左侧 -->

    <!-- region 查询条件 中间 -->
    <div class="choice-middle">
      <!-- region 摆放空间 -->
      <div class="space">
        <h3>摆放空间</h3>
        <ul>
          <template v-for="(item,index) in computeSpaceList">
            <a :class="{ active : item.active }"
               :data-v="item.value"
               :key="index"
               @click="chooseSearch(item, 'space')">{{ item.title }}</a>
          </template>
        </ul>
      </div>
      <!-- endregion 摆放空间 -->
      <!-- region 分类 -->
      <div>
        <h3>分类</h3>
        <ul>
          <template v-for="(item,index) in computeCategoryList">
            <a :class="{ active : item.active }"
               :data-v="item.value"
               :key="index"
               @click="chooseSearch(item, 'category')">{{ item.title }}</a>
          </template>
        </ul>
      </div>
      <!-- endregion 分类 -->
    </div>
    <!-- endregion 查询条件 中间 -->

    <!-- region 查询条件 右侧 -->
    <div class="choice-right">
      <!-- region 文字 -->
      <div class="text">
        <ul class="style">
          <template v-for="(item,index) in computeStyleList">
            <a :class="{ active : item.active }"
               :data-v="item.value"
               :key="index"
               @mouseenter="mouseEnter(item)"
               @mouseleave="mouseLeave"
               @click="chooseSearch(item, 'style')">{{ item.title
              }}</a>
          </template>
        </ul>
        <ul class="theme">
          <template v-for="(item,index) in computeThemList">
            <a :class="{ active : item.active }"
               :data-v="item.value"
               :key="index"
               @mouseenter="mouseEnter(item)"
               @mouseleave="mouseLeave"
               @click="chooseSearch(item, 'style')">{{ item.title
              }}</a>
          </template>
        </ul>
      </div>
      <!-- endregion 文字 -->
      <!-- region 图片墙 -->
      <div class="show-wall"
           :style="{ backgroundImage:'url('+ showWal.imgUrl +') '}">
        <h2 class="cn-des">{{ showWal.title }}</h2>
        <h2 class="en-des"> {{ showWal.enTitle }}</h2>
        <hr>
        <p class="hover-text">{{ showWal.desc }}</p>
      </div>
      <!-- endregion 图片墙 -->
    </div>
    <!-- endregion 查询条件 右侧 -->
  </div>
  <!-- endregion 默认查询条件 -->
</template>

<script>
  import styleList from '../../../../static/data/buy/styleList'
  import themList from '../../../../static/data/buy/themList'

  export default {
    components: {},
    data () {
      return {
        bwgImg: require('../../../assets/images/pages/buy/B_W_G.png'),
        starEmptyImg: require('../../../assets/images/pages/buy/icon_star_empty.svg'),
        starMiddleImg: require('../../../assets/images/pages/buy/icon_star_middle.svg'),
        starChooseImg: require('../../../assets/images/pages/buy/icon_star_choose.svg'),
        priceList: [
          {title: '0', value: '0-2000', active: false},
          {title: '¥2,000', value: '2000-8000', active: false},
          {title: '¥8,000', value: '8000-15000', active: false},
          {title: '¥15,000', value: '15000-30000', active: false},
          {title: '¥30,000', value: '30000-max', active: false},
          {title: 'max', value: '30000-max', active: false}
        ],
        sizeList: [
          {title: '0', value: '0-50', active: false},
          {title: '50cm', value: '50-100', active: false},
          {title: '100cm', value: '100-150', active: false},
          {title: '150cm', value: '150-200', active: false},
          {title: '200cm', value: '200-max', active: false},
          {title: 'max', value: '200-max', active: false}
        ],
        colorList: [
          {title: '红色系', value: 'red', className: 'red', active: false},
          {title: '黄色系', value: 'yellow', className: 'yellow', active: false},
          {title: '绿色系', value: 'green', className: 'green', active: false},
          {title: '蓝色系', value: 'blue', className: 'blue', active: false},
          {title: '黑白灰', value: 'bwg', className: 'bwg', active: false}
        ],
        shapeList: [
          {title: '方', value: 'square', className: 'square', active: false},
          {title: '横', value: 'la-Rec', className: 'la-Rec', active: false},
          {title: '竖', value: 'lo-Rec', className: 'lo-Rec', active: false},
          {title: '圆', value: 'round', className: 'round', active: false},
          {title: '不规则', value: 'irregular', className: 'irregular', active: false}
        ],
        spaceList: [
          {title: '办公', value: '办公', active: false},
          {title: '客厅', value: '客厅', active: false},
          {title: '书房', value: '书房', active: false},
          {title: '餐厅', value: '餐厅', active: false},
          {title: '儿童房', value: '儿童房', active: false},
          {title: '走廊/回廊', value: '走廊/回廊', active: false}
        ],
        categoryList: [
          {title: '油画', value: '油画', active: false},
          {title: '版画', value: '版画', active: false},
          {title: '水墨', value: '水墨', active: false},
          {title: '水彩(粉)', value: '水彩(粉)', active: false},
          {title: '雕塑', value: '雕塑', active: false},
          {title: '摄影', value: '摄影', active: false}
        ],
        styleList: styleList,
        themList: themList,
        showWal: {
          title: '抽象',
          enTitle: 'Abstract-Expression',
          imgUrl: require('../../../../static/images/buy/search/style_1.jpg'),
          desc: '是既不模仿又不直接再现外在现实，以形式和色彩本身来打动观众的艺术风格。通过对现实的扭曲变形来表现艺术家的激情和内心幻象，强调表现的自发性和艺术家的个性。',
          active: true
        }
      }
    },
    created () {
    },
    mounted () {
      let search = this.$store.getters.search
      if (search.price) {
        this.priceList.forEach((item, index) => {
          item.active = search.price === item.value
        })
      }
      if (search.size) {
        this.sizeList.forEach((item, index) => {
          item.active = search.size === item.value
        })
      }
      if (search.color) {
        this.colorList.forEach((item, index) => {
          item.active = search.color === item.value
        })
      }
      if (search.shape) {
        this.shapeList.forEach((item, index) => {
          item.active = search.shape === item.value
        })
      }
      if (search.space) {
        this.spaceList.forEach((item, index) => {
          item.active = search.space === item.value
        })
      }
      if (search.category) {
        this.categoryList.forEach((item, index) => {
          item.active = search.category === item.value
        })
      }
      if (search.style) {
        this.styleList.forEach((item, index) => {
          item.active = search.style === item.value
        })
        this.themList.forEach((item, index) => {
          item.active = search.style === item.value
        })
      }
    },
    computed: {
      computePriceList () {
        let search = this.$store.getters.search
        if (!search.price) {
          this.priceList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.priceList
      },
      computeSizeList () {
        let search = this.$store.getters.search
        if (!search.size) {
          this.sizeList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.sizeList
      },
      computeColorList () {
        let search = this.$store.getters.search
        if (!search.color) {
          this.colorList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.colorList
      },
      computeShapeList () {
        let search = this.$store.getters.search
        if (!search.shape) {
          this.shapeList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.shapeList
      },
      computeSpaceList () {
        let search = this.$store.getters.search
        if (!search.space) {
          this.spaceList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.spaceList
      },
      computeCategoryList () {
        let search = this.$store.getters.search
        if (!search.category) {
          this.categoryList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.categoryList
      },
      computeStyleList () {
        let search = this.$store.getters.search
        if (!search.style) {
          this.styleList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.styleList
      },
      computeThemList () {
        let search = this.$store.getters.search
        if (!search.style) {
          this.themList.forEach((item, index) => {
            item.active = false
          })
        }
        return this.themList
      }
    },
    methods: {
      /**
       * 查询栏右侧 艺术风格 鼠标聚焦事件
       * @param item
       */
      mouseEnter (item) {
        this.showWal.imgUrl = item.imgUrl
        this.showWal.title = item.title
        this.showWal.enTitle = item.enTitle
        this.showWal.desc = item.desc
      },
      /**
       * 查询栏右侧 艺术风格 鼠标离开事件
       */
      mouseLeave () {
        let styleItem = this.styleList.find((item) => {
          return item.active === true
        })
        let themItem = this.themList.find((item) => {
          return item.active === true
        })
        if (!styleItem && !themItem) {
          this.showWal.imgUrl = 'https://cdn.ywart.com/material/goodsbuy/20160727/02.jpg'
          this.showWal.title = '抽象'
          this.showWal.enTitle = 'Abstract-Expression'
          this.showWal.desc = '是既不模仿又不直接再现外在现实，以形式和色彩本身来打动观众的艺术风格。通过对现实的扭曲变形来表现艺术家的激情和内心幻象，强调表现的自发性和艺术家的个性。'
        } else {
          if (styleItem) {
            this.showWal.imgUrl = styleItem.imgUrl
            this.showWal.title = styleItem.title
            this.showWal.enTitle = styleItem.enTitle
            this.showWal.desc = styleItem.desc
          } else if (themItem) {
            this.showWal.imgUrl = themItem.imgUrl
            this.showWal.title = themItem.title
            this.showWal.enTitle = themItem.enTitle
            this.showWal.desc = themItem.desc
          }
        }
      },
      /**
       *
       * @param item
       * @param type
       */
      chooseSearch (item, type) {
        let list = []
        let otherList = []
        let seerch = this.$store.getters.search
        switch (type) {
          case 'price':
            list = this.priceList
            seerch.price = item.value
            break
          case 'size':
            list = this.sizeList
            seerch.size = item.value
            break
          case 'color':
            list = this.colorList
            seerch.color = item.value
            break
          case 'shape':
            list = this.shapeList
            seerch.shape = item.value
            break
          case 'space':
            list = this.spaceList
            seerch.space = item.value
            break
          case 'category':
            list = this.categoryList
            seerch.category = item.value
            break
          case 'style':
            list = this.styleList
            otherList = this.themList
            otherList.forEach((val) => {
              val.active = false
            })
            seerch.style = item.value
            break
        }
        if (!item.active) {
          list.forEach((val) => {
            val.active = false
          })
          item.active = true
        }
        this.$store.commit('UPDATE_SEARCH', seerch)
        return false
      }
    }
  }
</script>
