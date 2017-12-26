<template>
    <div class="searchBar">
        <div class="query">
            <div class="explore">
                <span>现在，去探索全新的艺术世界</span>
            </div>
            <div class="saved-search-wrapper">
                <label>
                    <select name="category">
                        <template v-for="(item,index) in categoryList">
                            <option value="item.id" :key="index">{{ item.name }}</option>
                        </template>
                    </select>
                </label>
                <label>
                    <select name="price">
                        <template v-for="(item,index) in priceList">
                            <option value="item.id" :key="index">{{ item.name }}</option>
                        </template>
                    </select>
                </label>
                <label>
                    <select name="size">
                        <template v-for="(item,index) in sizeList">
                            <option value="item.id" :key="index">{{ item.name }}</option>
                        </template>
                    </select>
                </label>
                <label>
                    <select name="style">
                        <template v-for="(item,index) in styleList">
                            <option value="item.id" :key="index">{{ item.name }}</option>
                        </template>
                    </select>
                </label>
            </div>
            <p class="moregou">前往
                <a href="/buy">原创艺术</a>利用更强大的筛选引擎挑选作品 ›</p>
        </div>
        <div class="go" @click="buyRedirect">
            <div class="bgblue"></div>
            <div class="text">开始<br>GO</div>
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        categoryList: [
          {id: '', name: '类别'},
          {id: '油画', name: '油画'},
          {id: '版画', name: '版画'},
          {id: '水墨', name: '水墨'},
          {id: '水彩(粉)', name: '水彩(粉)'},
          {id: '雕塑', name: '雕塑'},
          {id: '摄影', name: '摄影'},
          {id: '其他', name: '其他类别'}
        ],
        priceList: [
          {id: '', name: '价格'},
          {id: '0～2000', name: '¥ 2,000 以下'},
          {id: '2000～8000', name: '¥ 2,000 - ¥ 8,000'},
          {id: '8000～15000', name: '¥ 8,000& - ¥ 15,000'},
          {id: '15000～30000', name: '¥ 15,000 - ¥ 30,000'},
          {id: '30000～max', name: '¥ 30,000 以上'}
        ],
        sizeList: [
          {id: '', name: '尺寸'},
          {id: '0～50cm', name: '50cm以下'},
          {id: '50～100cm', name: '50cm～100cm'},
          {id: '100～150cm', name: '100cm～150cm'},
          {id: '150～200cm', name: '150cm～200cm'},
          {id: '200～max', name: '200cm以上'}
        ],
        styleList: [
          {id: '', name: '风格'},
          {id: '1', name: '抽象'},
          {id: '2', name: '具象'},
          {id: '3', name: '观念'},
          {id: '4', name: '卡通'},
          {id: '5', name: '传统国画'},
          {id: '6', name: '实验水墨'},
          {id: '7', name: '其他'}
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
        this.$router.push({path: '/buy'})
      }
    }
  }
</script>

<style lang="less">
    .searchBar {
        display: block;
        width: 100%;
        background-color: #666666;
        height: 300px;
        position: relative;
        .query {
            width: 100%;
            max-width: 1180px;
            padding: 40px 0;
            margin: 0 auto;
            .explore {
                height: 42px;
                line-height: 42px;
                font-size: 30px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                color: #ffffff;
                margin-bottom: 48px;
                text-align: left;
            }
            .saved-search-wrapper {
                text-align: left;
                label {
                    select {
                        padding: 0 20px;
                        margin-right: 10px;
                        font-size: 14px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        color: #333333;
                        width: 200px;
                        height: 44px;
                        border-radius: 4px;
                        background-color: #f8f8f8;
                        -webkit-appearance: none;
                        overflow: hidden;
                        background: url(../../../assets/images/common/select_bg.png) no-repeat right #fff;
                    }
                }
            }
            .moregou {
                margin-top: 48px;
                height: 42px;
                line-height: 42px;
                font-size: 14px;
                color: #eeeeee;
                text-align: left;
                a {
                    color: #fff;
                    margin: 0 20px;
                    font-weight: 600;
                    font-size: 14px;
                }
            }
        }
        .go {
            font-size: 40px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: 4px;
            text-align: center;
            color: #ffffff;
            background-color: #000;
            width: 27%;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 2;
            height: 300px;
            cursor: pointer;
            &:hover div.bgblue {
                width: 100%;
            }
            &:hover div.text {
                width: 180px;
            }
            .bgblue {
                background-color: #3c948b;
                height: 300px;
                width: 0;
                transition: all, 0.4s;
            }
            .text {
                transition: all, 0.4s;
                text-align: right;
                width: 90px;
                height: 100px;
                display: inline-block;
                margin: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
        }
    }
</style>
