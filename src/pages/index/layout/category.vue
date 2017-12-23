<template>
    <div class="category">
        <div class="title">
            <h2>推荐 / CATEGORY</h2>
            <span class="more" @click="buyRedirect">更多</span>
            <template v-for="item in categoryTitleList">
                <div :class="{ active : item.active }" @click="categorySelect(item)">{{ item.name }}</div>
            </template>
        </div>
        <template v-for="item in categoryTitleList">
            <div class="item-box" :class="{ active : item.active }">
                <template v-for="category in categoryList">
                    <div class="item">
                        <router-link :to="{ path: '/artworks/' + category.id +''}" target="_blank">
                            <div class="img img-hover">
                                <img :src="category.img">
                            </div>
                        </router-link>
                        <div class="info_box">
                            <div>
                                <router-link :to="{ path: '/artist/' + category.artistId +''}" target="_blank">
                                    <h3>{{ category.artist }}</h3>
                                </router-link>
                                <router-link :to="{ path: '/artworks/' + category.id +''}" target="_blank">
                                    <h4>{{ category.name }}</h4>
                                    <h4>，</h4>
                                    <h4>{{ category.date }}</h4>
                                </router-link>
                                <div>
                                    <h4>{{ category.type }}</h4>
                                    <h4>{{ category.size }}</h4>
                                </div>
                                <p class="ysp_price">¥{{ category.price }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        categoryTitleList: [
          {name: '水彩', param: 'water', active: false},
          {name: '水墨', param: 'ink', active: false},
          {name: '版画', param: 'print', active: false},
          {name: '油画', param: 'oil', active: true}
        ],
        categoryList: [
          {
            id: '1',
            artist: '王缺土',
            artistId: 'wqe',
            name: '布景',
            date: '2015',
            type: '布面油画',
            size: '50x40cm',
            price: '10050',
            img: require('../../../assets/images/pages/index/category/oil_1.jpg')
          },
          {
            id: '2',
            artist: 'Pung刘',
            artistId: 'ddd',
            name: '空',
            date: '2013',
            type: '布面油画、墨',
            size: '70x50cm',
            price: '6050',
            img: require('../../../assets/images/pages/index/category/oil_2.jpg')
          },
          {
            id: '3',
            artist: '李昌龙',
            artistId: 'sss',
            name: '色层与边界系列90号',
            date: '2015',
            type: '布面油画',
            size: '40x30cm',
            price: '24050',
            img: require('../../../assets/images/pages/index/category/oil_3.jpg')
          },
          {
            id: '4',
            artist: '刘川',
            artistId: 'tew',
            name: '角落',
            date: '2017',
            type: '布面丙烯',
            size: '120x100cm',
            price: '28350',
            img: require('../../../assets/images/pages/index/category/oil_4.jpg')
          }
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 更多跳转事件
       */
      buyRedirect () {
        let categoryItem = this.categoryTitleList.find((item) => item.active)
        this.$router.push({path: '/buy', query: {category: categoryItem.param}})
      },
      /**
       * 种类切换事件
       * @param title
       */
      categorySelect (title) {
        this.categoryTitleList.forEach((item) => {
          if (item.param !== title.param) {
            item.active = false
          }
        })
        title.active = true
      }
    }
  }
</script>

<style lang="less">
    .category {
        display: block;
        position: relative;
        width: 100%;
        max-width: 1180px;
        margin: 80px auto 120px auto;
        user-select: none;
        height: 488px;
        .title {
            text-align: left;
            margin-bottom: 40px;
            height: 46px;
            line-height: 46px;
            border-bottom: 1px solid #ddd;
            h2 {
                letter-spacing: 3px;
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                font-size: 26px;
                font-weight: 600;
                font-style: normal;
                font-stretch: normal;
                color: #000000;
                margin-right: 40px;
            }
            .more {
                display: inline-block;
                cursor: pointer;
                color: #003569;
            }
            div {
                float: right;
                margin: 3px 0 0 20px;
                padding: 0;
                width: 100px;
                height: 43px;
                line-height: 43px;
                background-color: RGBA(255, 255, 255, 0);
                font-size: 18px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                letter-spacing: 2px;
                color: #000000;
                display: inline-block;
                border: 1px solid RGBA(255, 255, 255, 0);
                text-align: center;
                &:hover, &.active {
                    border: 1px solid #ddd;
                    border-bottom: 1px solid #fff;
                    background-color: #fff;
                    cursor: pointer;
                }
            }
        }
        .item-box {
            display: none;
            width: 100%;
            height: 400px;
            position: relative;
            top: 0;
            &.active {
                display: block;
            }
            .item {
                float: left;
                position: relative;
                word-spacing: normal;
                margin-right: 20px;
                width: 280px;
                height: 400px;
                overflow: hidden;
                box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
                &:last-child {
                    margin-right: 0;
                }
                .img {
                    width: 280px;
                    height: 280px;
                    position: relative;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        transition: all, 0.5s;
                        transition-timing-function: ease-out;
                    }
                }
                .info_box {
                    width: 280px;
                    height: 120px;
                    display: table-cell;
                    color: #666;
                    font-size: 12px;
                    text-align: left;
                    padding: 0 20px;
                    vertical-align: middle;
                    line-height: 18px;
                    a {
                        color: #666;
                        text-decoration: none;
                    }
                    h3 {
                        color: #000;
                        font-size: 12px;
                        font-weight: 600;
                    }
                    p {
                        text-align: left;
                        font-weight: 600;
                        color: #000;
                    }
                    h4 {
                        display: inline;
                        font-weight: 500;
                        color: #666;
                    }
                }
            }
        }
    }
</style>
