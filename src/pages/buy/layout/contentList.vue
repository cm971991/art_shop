<template>
    <div class="content">
        <div class="filter">
            <select>
                <option value="0">上架时间</option>
                <option value="4">上架时间最新</option>
                <option value="3">上架时间最早</option>
            </select>
            <select>
                <option value="0">价格</option>
                <option value="1">价格从低到高</option>
                <option value="2">价格从高到低</option>
            </select>
            <select>
                <option value="false">作品状态</option>
                <option value="false">全部</option>
                <option value="true">未售作品</option>
            </select>
        </div>
        <div class="container">
            <vue-waterfall-easy :imgsArr="productList" :gap="92" :maxCols="3" :imgWidth="300"
                                @scrollLoadImg="fetchData">
                <div class="detail" slot-scope="props">
                    <p><a href="#" target="_blank">{{ props.item.artist }}</a></p>
                    <p><a href="#">{{ props.item.name }}</a>&nbsp;&nbsp;<span>{{  props.item.date }}</span></p>
                    <p><span>{{ props.item.type }}</span>&nbsp;&nbsp;&nbsp;<span>{{ props.item.size }}</span>
                    </p>
                    <div class="qmBox">
                        <img src="https://cdn.ywart.com/material/DiscountAction/201712221339391693a0c4534.png"
                             class="qmImg">
                        <p class="price">¥{{ props.item.price }}</p>
                    </div>
                </div>
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
  import vueWaterfallEasy from '../../../components/common/waterfall-easy'
  import contentList from '../../../../static/contentList'
  
  export default {
    components: {
      vueWaterfallEasy
    },
    data () {
      return {
        productList: []
      }
    },
    created () {
      this.productList = contentList
    },
    mounted () {
    },
    computed: {
      filterList () {
        let search = this.$store.getters.search
        if (search.price) {
          let pMin = search.price.split('-')[0] || 0
          let pMax = search.price.split('-')[1] || 0
          this.productList = this.productList.filter((item) => {
            return item.price >= pMin && item.price <= pMax
          })
        }
        if (search.size) {
          let sMin = search.size.split('-')[0] || 0
          let sMax = search.size.split('-')[1] || 0
          this.productList = this.productList.filter((item) => {
            let itemWidth = item.size.split('x')[0]
            let itemHeight = item.size.split('x')[1]
            return (itemWidth >= sMin && itemHeight >= sMin) && (itemWidth <= sMax && itemHeight <= sMax)
          })
        }
        if (search.color) {
          this.productList = this.productList.filter((item) => {
            return item.color === search.color
          })
        }
        if (search.shape) {
          this.productList = this.productList.filter((item) => {
            return item.shape === search.shape
          })
        }
        if (search.space) {
          this.productList = this.productList.filter((item) => {
            return item.space === search.space
          })
        }
        if (search.category) {
          this.productList = this.productList.filter((item) => {
            return item.category === search.category
          })
        }
        if (search.style) {
          this.productList = this.productList.filter((item) => {
            return item.style === search.style
          })
        }
        this.productList = this.initList(0, 10)
        return this.productList
      }
    },
    methods: {
      initList (n, m) {
        let arr = []
        let listLength = this.productList.length
        if (listLength < m) {
          m = listLength
        }
        for (let i = n; i < m; i++) {
          arr.push(this.productList[i])
        }
        return arr
      },
      fetchData () {
        if (this.productList.length > 40) {
          // document.querySelector('.container').style.height = '8900px'
          // document.querySelector('.footer').style.display = 'block'
          return
        }
        this.productList = this.productList.concat(this.initList(10, 20))
      }
    }
  }
</script>

<style lang="less" scoped>
    .content {
        width: 100%;
        background-color: #fff;
        padding: 30px 0 50px;
        .filter {
            text-align: right;
            margin: 0 auto 30px;
            max-width: 1200px;
            padding-right: 20px;
            box-sizing: border-box;
            select {
                outline: none;
                width: 100px;
                height: 30px;
                font-size: 12px;
                color: #666;
                padding-right: 0;
                border: 1px solid #eee;
                border-radius: 4px;
                option {
                    outline: none;
                }
            }
        }

        .container {
            margin: 0 auto;
            max-width: 1200px;
            display: block;

            .img-box {
                .detail {
                    position: relative;
                    padding: 12px 0 0 0;
                    text-align: left;
                    .qmBox {
                        display: flex;
                        .qmImg {
                            height: 26px;
                            top: 85px;
                            left: 18px;
                        }
                        .price {
                            margin-top: 5px;
                            padding-left: 10px;
                        }
                    }
                    p {
                        color: #666666;
                        font-size: 12px;
                        line-height: 20px;
                        padding: 0 20px;
                        height: 20px;
                        width: 80%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-style: italic;

                        .price {
                            margin-top: 10px;
                            color: black;
                            font-size: 14px;
                            font-weight: 500;
                            margin-bottom: 20px;
                            font-style: normal;
                        }

                        &:nth-child(1) {
                            font-style: normal;
                            margin-bottom: 8px;
                        }
                    }
                    div {
                        margin-top: 10px;
                        padding: 0 20px;
                    }
                }
            }

            .detail {
                position: relative;
                padding: 12px 0 0 0;
                .qmBox {
                    display: flex;
                    .qmImg {
                        height: 26px;
                        top: 85px;
                        left: 18px;
                    }
                    .price {
                        margin-top: 5px;
                        padding-left: 10px;
                    }
                }
                p {
                    color: #666666;
                    font-size: 12px;
                    line-height: 20px;
                    padding: 0 20px;
                    height: 20px;
                    width: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-style: italic;

                    &.price {
                        margin-top: 10px;
                        color: black;
                        font-size: 14px;
                        font-weight: 500;
                        margin-bottom: 20px;
                        font-style: normal;
                    }

                    &:nth-child(1) {
                        font-style: normal;
                        margin-bottom: 8px;
                        a {
                            color: #000;
                            font-weight: 600;
                        }
                    }
                }
                div {
                    margin-top: 10px;
                    padding: 0 20px;
                }
            }

            &::after {
                visibility: hidden;
                display: block;
                font-size: 0;
                content: " ";
                clear: both;
                height: 0;
            }
        }
    }
</style>
