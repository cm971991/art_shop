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
            <select class="IsSale">
                <option value="false">作品状态</option>
                <option value="false">全部</option>
                <option value="true">未售作品</option>
            </select>
        </div>
        <div class="container">
            <!--<div class="grid" style="position: relative; height: 4166.44px;">-->
            <!--<template v-for="(item,index) in pdlist">-->
            <!--<div class="grid-item" :key="index">-->
            <!--<div class="thumb" data-id="1lwxy1">-->
            <!--<a href="#">-->
            <!--<img :src="item.imgUrl">-->
            <!--</a>-->
            <!--</div>-->
            <!--<div class="detail">-->
            <!--<p><a href="/artist/1w73m8" target="_blank">{{ item.artist }}</a></p>-->
            <!--<p><a href="/artworks/1lwxy1">人体2</a><span>{{  item.date }}</span></p>-->
            <!--<p><span>{{ item.type }}</span><span>{{ item.size }}</span></p>-->
            <!--<div class="qmBox">-->
            <!--<img src="https://cdn.ywart.com/material/DiscountAction/201712221339391693a0c4534.png"-->
            <!--class="qmImg">-->
            <!--<p class="price">¥{{ item.price }}</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</template>-->
            <!--</div>-->
            <waterfall :list="pdlist">
                <template slot="item" slot-scope="item">
                    <div class="detail">
                        <p><a href="#" target="_blank">{{ item.item.artist }}</a></p>
                        <p><a href="#">{{ item.item.name }}</a>&nbsp;&nbsp;<span>{{  item.item.date }}</span></p>
                        <p><span>{{ item.item.type }}</span>&nbsp;&nbsp;&nbsp;<span>{{ item.item.size }}</span>
                        </p>
                        <div class="qmBox">
                            <img src="https://cdn.ywart.com/material/DiscountAction/201712221339391693a0c4534.png"
                                 class="qmImg">
                            <p class="price">¥{{ item.item.price }}</p>
                        </div>
                    </div>
                </template>
            </waterfall>
        </div>
    </div>
</template>

<script>
  import MeScroll from 'mescroll.js'
  import waterfall from '../../../components/common/waterfall'
  import contentList from '../../../../static/contentList'

  export default {
    components: {
      MeScroll,
      waterfall
    },
    data () {
      return {
        mescroll: null,
        pdlist: []
      }
    },
    created () {
      window.onscroll = () => {
        if (this.flag) {
          return
        }
        if (document.documentElement.scrollTop + document.body.clientHeight + 150 > document.documentElement.scrollHeight) {
          this.flag = true
          if (this.pdlist.length < 30) {
            this.pdlist = this.pdlist.concat([
              {
                'id': '4',
                'imgUrl': 'https://cdn.ywart.com/yw/2016111117372065643c76a49.jpg@600w_1e_1c_1wh_90Q',
                'artist': '',
                'name': '鸟与林二',
                'date': '2014',
                'type': '铜版腐蚀',
                'size': '75x75cm',
                'price': '6050',
                'height': '599',
                'width': '600'
              },
              {
                'id': '5',
                'imgUrl': 'https://cdn.ywart.com/yw/201606081450399568ad65519.jpg@600w_1e_1c_1wh_90Q',
                'artist': '姜波',
                'name': '谈些什么5',
                'date': '2015',
                'type': '综合材料',
                'size': '12x18cm',
                'price': '1050',
                'height': '917',
                'width': '600'
              },
              {
                'id': '6',
                'imgUrl': 'https://cdn.ywart.com/yw/20160805115126168201c9db4.jpg@600w_1e_1c_1wh_90Q',
                'artist': '真琦',
                'name': '盛夏-鸟语林',
                'date': '2015',
                'type': '丝网版',
                'size': '55x75cm',
                'price': '3050',
                'height': '895',
                'width': '600'
              }
            ])
          }
          setTimeout(() => {
            if (this.pdlist.length >= 30) {
              this.flag = true
            } else {
              this.flag = false
            }
          }, 500)
        }
      }
    },
    mounted () {
      this.pdlist = contentList
      // let self = this
      // self.mescroll = new MeScroll('body', {
      //   up: {
      //     htmlLoading: '',
      //     callback: self.upCallback,
      //     showNoMore: self.showNoMore,
      //     isBounce: false
      //   }
      // })
    },
    computed: {},
    methods: {
      upCallback (page) {
        let self = this
        getListDataFromNet(page.num, page.size, (curPageData) => {
          if (page.num === 1) {
            self.pdlist = []
          }
          self.pdlist = self.pdlist.concat(curPageData)
          self.mescroll.endSuccess(curPageData.length)
        }, () => {
          self.mescroll.endErr()
        })

        function getListDataFromNet (pageNum, pageSize, successCallback, errorCallback) {
          setTimeout(() => {
            let data = contentList
            let listData = []
            for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
              if (i === data.length) {
                break
              }
              listData.push(data[i])
            }
            successCallback && successCallback(listData)
          }, 500)
        }
      },
      showNoMore (mescroll, upwarp) {
        mescroll.upwarp = ''
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

            .column-item {
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
