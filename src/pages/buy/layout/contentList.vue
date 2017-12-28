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
            <div class="grid" style="position: relative; height: 4166.44px;">
                <template v-for="(item,index) in pdlist">
                    <div class="grid-item" :key="index">
                        <div class="thumb" data-id="1lwxy1">
                            <a href="#">
                                <img :src="item.imgUrl">
                            </a>
                        </div>
                        <div class="detail">
                            <p>
                                <a href="/artist/1w73m8" target="_blank">{{ item.artist }}</a>
                            </p>
                            <p>
                                <a href="/artworks/1lwxy1">人体2</a><span>{{  item.date }}</span>
                            </p>
                            <p>
                                <span>{{ item.type }}</span><span>{{ item.size }}</span>
                            </p>
                            <div class="qmBox">
                                <img src="https://cdn.ywart.com/material/DiscountAction/201712221339391693a0c4534.png"
                                     class="qmImg">
                                <p class="price">¥{{ item.price }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
  import MeScroll from 'mescroll.js'
  import contentList from '../../../../static/contentList'

  export default {
    components: {MeScroll},
    data () {
      return {
        mescroll: null,
        pdlist: []
      }
    },
    created () {
    },
    mounted () {
      let self = this
      self.mescroll = new MeScroll('body', {
        up: {
          htmlLoading: '',
          callback: self.upCallback,
          showNoMore: self.showNoMore,
          isBounce: false
        }
      })
    },
    computed: {},
    methods: {
      upCallback (page) {
        let self = this
        getListDataFromNet(page.num, page.size, function (curPageData) {
          if (page.num === 1) {
            self.pdlist = []
          }
          self.pdlist = self.pdlist.concat(curPageData)
          self.mescroll.endSuccess(curPageData.length)
        }, function () {
          self.mescroll.endErr()
        })

        function getListDataFromNet (pageNum, pageSize, successCallback, errorCallback) {
          setTimeout(function () {
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

<style lang="less">
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
            .grid {
                display: block;
                .grid-item {
                    width: 300px;
                    min-height: 100px;
                    float: left;
                    background: #FFF;
                    margin: 80px 46px 0 46px !important;
                    .thumb {
                        position: relative;
                        img {
                            width: 100%;
                            background: #ccc;
                            display: block;
                            cursor: pointer;
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
                        /*.image_list_icon {*/
                        /*position: absolute;*/
                        /*right: 0;*/
                        /*bottom: 0;*/
                        /*display: none;*/
                        /*a {*/
                        /*width: 30px;*/
                        /*height: 30px;*/
                        /*line-height: 30px;*/
                        /*text-align: center;*/
                        /*text-decoration: none;*/
                        /*display: block;*/
                        /*img {*/
                        /*width: 100%;*/
                        /*height: 100%;*/
                        /*&.default {*/
                        /*display: inline-block;*/
                        /*}*/
                        /*&.hover {*/
                        /*display: none;*/
                        /*}*/
                        /*}*/
                        /*}*/
                        /*}*/

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
                &::after {
                    visibility: hidden;
                    display: block;
                    font-size: 0;
                    content: " ";
                    clear: both;
                    height: 0;
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
