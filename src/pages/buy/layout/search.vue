<template>
    <!-- region 默认查询条件 -->
    <div class="simple">
        <!-- region 查询条件 左侧 -->
        <div class="choice-left">
            <!-- region 价格 -->
            <p class="price">
                <b>价格</b>
                <template v-for="(item,index) in priceList">
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
                <template v-for="(item,index) in sizeList">
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
                <template v-for="(item,index) in colorList">
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
                        <img :src="bwgImg" alt="黑白灰">
                    </a>
                </template>
            </p>
            <!-- endregion 颜色 -->
            <!-- region 形状 -->
            <p class="shape">
                <b>形状</b>
                <template v-for="(item,index) in shapeList">
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
                        <img :src="starEmptyImg" alt="default" class="default">
                        <img :src="starMiddleImg" alt="hover" class="hover">
                        <img :src="starChooseImg" alt="active" class="show">
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
                    <template v-for="(item,index) in spaceList">
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
                    <template v-for="(item,index) in categoryList">
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
                    <template v-for="(item,index) in styleList">
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
                    <template v-for="(item,index) in themList">
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
  export default {
    components: {},
    data () {
      return {
        bwgImg: require('../../../assets/images/pages/buy/B_W_G.png'),
        starEmptyImg: require('../../../assets/images/pages/buy/icon_star_empty.svg'),
        starMiddleImg: require('../../../assets/images/pages/buy/icon_star_middle.svg'),
        starChooseImg: require('../../../assets/images/pages/buy/icon_star_choose.svg'),
        priceList: [
          {title: '0', value: '0～2000', active: false},
          {title: '¥2,000', value: '2000～8000', active: false},
          {title: '¥8,000', value: '8000～15000', active: false},
          {title: '¥15,000', value: '15000～30000', active: false},
          {title: '¥30,000', value: '30000～max', active: false},
          {title: 'max', value: '30000～max', active: false}
        ],
        sizeList: [
          {title: '0', value: '0～50', active: false},
          {title: '50cm', value: '50～100', active: false},
          {title: '100cm', value: '100～150', active: false},
          {title: '150cm', value: '150～200', active: false},
          {title: '200cm', value: '200～max', active: false},
          {title: 'max', value: '200～max', active: false}
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
        styleList: [
          {
            title: '抽象',
            enTitle: 'Abstract-Expression',
            value: '抽象',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/02.jpg',
            desc: '是既不模仿又不直接再现外在现实，以形式和色彩本身来打动观众的艺术风格。通过对现实的扭曲变形来表现艺术家的激情和内心幻象，强调表现的自发性和艺术家的个性。',
            active: false
          },
          {
            title: '具象',
            enTitle: 'Realism',
            value: '具象',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/04.jpg',
            desc: '起源于十九世纪的法国。写实不是描绘抽象的符号，而是对真实存在的物体或想象出来的对象的描述。',
            active: false
          },
          {
            title: '观念',
            enTitle: 'Conceptual Art',
            value: '观念',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/05.jpg',
            desc: '观念艺术质疑艺术这一整体观念，例如：艺术是否可以指涉及其自身之外的东西。观念艺术需要通过语言和文字进行表达，它的呈现方式为绘画、方案计划书、照片、影像等。',
            active: false
          },
          {
            title: '传统国画',
            enTitle: 'Chinese Painting',
            value: '传统国画',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/03.jpg',
            desc: '传统国画：国画一词起源于汉代，汉朝人认为中国是居天地之中者，所以称为中国，将中国的绘画称为“中国画”，简称“国画”。主要指的是画在绢、宣纸、帛上并加以装裱的卷轴画。国画是汉族的传统绘画形式，是用毛笔蘸水、墨、彩作画于绢或纸上。',
            active: false
          }
        ],
        themList: [
          {
            title: '人物',
            enTitle: 'Portrait',
            value: '人物',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/06.jpg',
            desc: '是以人物为形象主体的画。中国画人物力求逼真传神，气韵生动，形神兼备，西方人物画严谨规整，秉承理性思维，以光感，质感体积和空间感来体现人物。近现代绘画运动之后则更加侧重人物精神及心理层面的表达，风格和媒介也更加多样化。',
            active: false
          },
          {
            title: '风景',
            enTitle: 'Landscape',
            value: '风景',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/07.jpg',
            desc: '风景的概念起源于绘画，人类绘画早先的主题是动物，然后是人类自己，最早有记载的的单纯风景画是中国晋代展子虔的《游春图》，以后中国画中的风景画被称为山水画。在欧洲，“风景”的概念起源于荷兰，也是从绘画开始，最早的记录是1598年，后来被英语借用。',
            active: false
          },
          {
            title: '静物',
            enTitle: 'Still-life',
            value: '静物',
            imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/08.jpg',
            desc: '仅以画家近距离观察的物体（大多数为家居用品——餐具、花卉、书籍，但有时是头盖骨、已死的猎物等）为内容的绘画。静物在早期东方艺术中相当重要，在西方，它直到16世纪才作为独立题材出现。',
            active: false
          }
        ],
        showWal: {
          title: '抽象',
          enTitle: 'Abstract-Expression',
          imgUrl: 'https://cdn.ywart.com/material/goodsbuy/20160727/02.jpg',
          desc: '是既不模仿又不直接再现外在现实，以形式和色彩本身来打动观众的艺术风格。通过对现实的扭曲变形来表现艺术家的激情和内心幻象，强调表现的自发性和艺术家的个性。',
          active: true
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
        let styleItem = this.styleList.find((item) => { return item.active === true })
        let themItem = this.themList.find((item) => { return item.active === true })
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
       * 查询栏左侧 价格 点击选择事件
       * @param item
       */
      selectPrice (item) {
        this.priceList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       * 查询栏左侧 尺寸 点击选择事件
       * @param item
       */
      selectSize (item) {
        this.sizeList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       * 查询栏左侧 颜色 点击选择事件
       * @param item
       */
      selectColor (item) {
        this.colorList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       * 查询栏左侧 形状 点击选择事件
       * @param item
       */
      selectShape (item) {
        this.shapeList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       * 查询栏中间 摆放空间 点击选择事件
       * @param item
       */
      selectSpace (item) {
        this.spaceList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       * 查询栏中间 分类 点击选择事件
       * @param item
       */
      selectCategory (item) {
        this.categoryList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       * 查询栏右侧 艺术风格 点击选择事件
       * @param item
       */
      selectStyle (item) {
        this.styleList.forEach((val) => {
          val.active = false
        })
        this.themList.forEach((val) => {
          val.active = false
        })
        item.active = true
        return false
      },
      /**
       *
       * @param item
       * @param type
       */
      chooseSearch (item, type) {
        debugger
        let list = []
        let otherList = []
        switch (type) {
          case 'price':
            list = this.priceList
            break
          case 'size':
            list = this.sizeList
            break
          case 'color':
            list = this.colorList
            break
          case 'shape':
            list = this.shapeList
            break
          case 'space':
            list = this.spaceList
            break
          case 'category':
            list = this.categoryList
            break
          case 'style':
            list = this.styleList
            otherList = this.themList
            otherList.forEach((val) => {
              val.active = false
            })
            break
        }
        if (!item.active) {
          list.forEach((val) => {
            val.active = false
          })
          item.active = true
        }
        return false
      }
    }
  }
</script>

<style lang="less" scoped>
    .simple {
        width: 100%;
        height: 310px;
        border-bottom: 1px solid #eee;
        .choice-left {
            box-sizing: border-box;
            padding-left: 7.5%;
            float: left;
            width: 50%;
            line-height: 80px;
            font-size: 0;
            text-align: left;
            .price {
                i {
                    margin-left: -30px;
                }
            }
            .size {
                i {
                    margin-left: -20px;
                }
            }
            .price, .size, .shape {
                position: relative;
                i {
                    position: absolute;
                    font-size: 12px;
                    color: #666;
                    top: 15px;
                    font-style: inherit;
                    width: 0;
                    height: 0;
                }
                i:first-of-type {
                    margin-left: -5px;
                    left: 12% \9;
                }
                i:nth-of-type(2) {
                    left: 25% \9;
                }
                i:nth-of-type(3) {
                    left: 39% \9;
                }
                i:nth-of-type(4) {
                    left: 52% \9;
                }
                i:nth-of-type(5) {
                    left: 65% \9;
                }
                i:last-of-type {
                    margin-left: -15px;
                }
                a {
                    background-color: #ddd;
                    &.active {
                        background-color: #000;
                        border-color: #000;
                    }
                    &:hover {
                        background-color: #b0b0b0;
                    }
                }
            }
            .size {
            }
            .color {
                b {
                    position: relative;
                    top: -4px;
                }
                a.active {
                    border: 2px solid #000;
                    box-sizing: border-box;
                }
                .bwg {
                    box-sizing: border-box;
                    position: relative;
                }
            }
            .shape {
                line-height: 40px;
                .square {
                    width: 24px;
                    height: 24px;
                }
                .la-Rec {
                    height: 16px;
                    width: 32px;
                }
                .lo-Rec {
                    height: 32px;
                    width: 16px;
                }
                .round {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                }
                .irregular {
                    border: none;
                    width: 0;
                    height: 0;
                    text-decoration: none;
                    color: #666;
                    font-size: 36px;
                    position: relative;
                    top: 14px;
                }
                a {
                    transform: translate(0, 50%);
                    background-color: #fff;
                    border: 1px solid #666;
                    margin-right: 10%;
                    margin-top: -10px;
                    .default {
                        display: inline-block;
                        &:hover {
                            display: none;
                        }
                    }
                    .hover {
                        display: none;
                    }
                    .show {
                        display: none;
                    }
                    img {
                        width: 30px;
                    }
                    &:hover {
                        .default {
                            display: none;
                        }
                        .hover {
                            display: inline-block;
                        }
                        .show {
                            display: none;
                        }
                    }
                    &.active {
                        .default {
                            display: none;
                        }
                        .hover {
                            display: none;
                        }
                        .show {
                            display: inline-block;
                        }
                    }
                }
                & > b {
                    position: relative;
                    top: 4px;
                }
            }
            a {
                display: inline-block;
                width: 13%;
                box-sizing: border-box;
                height: 16px;
                cursor: pointer;
                margin-right: 2px;
                &:hover {
                    filter: opacity(80);
                    opacity: 0.8;
                }
            }
            & > p > b {
                font-size: 14px;
                margin-right: 50px;
            }
        }

        .choice-middle {
            float: left;
            width: 17.5%;
            & > .space {
                width: 62.5%;
            }
            & > div {
                float: left;
                text-align: left;
                h3 {
                    line-height: 80px;
                    font-size: 14px;
                }
                ul > a {
                    cursor: pointer;
                    line-height: 36px;
                    font-size: 14px;
                    color: #666;
                    display: block;
                    &.active {
                        color: #000;
                        font-weight: bold;
                    }
                }
            }
        }

        .choice-right {
            box-sizing: border-box;
            float: left;
            width: 32.5%;
            border-left: 1px solid #eee;
            .text {
                cursor: pointer;
                text-align: center;
                float: left;
                width: 30%;
                margin-top: 35px;
                ul {
                    margin-bottom: 30px;
                    a {
                        text-align: center;
                        line-height: 30px;
                        font-size: 14px;
                        color: #666;
                        display: block;
                        &.active {
                            color: #000;
                            font-weight: bold;
                        }
                    }
                }
            }
            .show-wall {
                background-size: cover;
                height: 310px;
                float: left;
                width: 70%;
                text-align: center;
                color: #fff;
                padding-top: 30px;
                position: relative;
                box-sizing: border-box;
                h2 {
                    font-size: 24px;
                    font-weight: 500;
                    position: relative;
                    z-index: 2;
                }
                hr {
                    margin: 20px auto;
                    background-color: #fff;
                    border: none;
                    height: 1px;
                    width: 30%;
                    position: relative;
                    z-index: 2;
                }
                p {
                    line-height: 26px;
                    text-align: left;
                    margin: 0 auto;
                    width: 90%;
                    font-size: 14px;
                    position: relative;
                    z-index: 2;
                }
            }
        }

        .prize, .size {
            position: relative;
        }
    }
</style>
