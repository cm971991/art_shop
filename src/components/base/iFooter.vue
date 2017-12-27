<template>
    <div class="footer" :class="{ 'simple' : type === 'simple' }">
        <div class="banner" v-if="type !== 'simple' ">
            <div class="footer_top">
                <div class="top-left">
                    <img :src="logoImg">
                </div>
                <div class="top-right">
                    <p>
                        <a href="http://weibo.com/YWARTCOM" target="_blank">
                            <i class="icon-sina" v-html="sinaIcon"></i>
                        </a>
                        <i class="icon-wechat" v-html="wechatIcon"></i>
                        <img class="wechatShare" :src="wechatImg">
                    </p>
                    <p>
                        <i class="icon-tellphone" v-html="tellphoneIcon"></i>400-605-7033
                    </p>
                </div>
            </div>
            <div class="row">
                <ul>
                    <li>
                        <strong>YWART.COM</strong>
                        <a href="/index">精选</a>
                        <a href="/buy">原创艺术</a>
                        <a href="/makeart">造艺</a>
                        <a href="/collect/index">藏艺术</a>
                        <a href="/User/UserWishList" rel="nofollow">我的珍藏</a>
                    </li>
                    <li>
                        <strong>了解我们</strong>
                        <a href="/about_us">关于我们</a>
                        <a href="https://pages.ywart.com/jobs">工作机会</a>
                        <a href="/Common/WebMap" rel="nofollow">网站地图</a>
                    </li>
                    <li>
                        <strong>支持与帮助</strong>
                        <a href="http://pages.ywart.com/howtobuy">如何购买</a>
                        <a href="http://pages.ywart.com/delivery">物流说明</a>
                        <a href="http://pages.ywart.com/contactus" rel="nofollow">联系我们</a>
                    </li>
                    <li>
                        <strong>合作</strong>
                        <a href="http://pages.ywart.com/acquisition">作品征集</a>
                        <a href="/Agent/RegStep0">合作伙伴入驻</a>
                    </li>
                </ul>
                <div class="app-download">
                    <div class="QRcode">
                        <div class="apple">
                            <img :src="iosDowndarkImg" alt="apple">
                            <img class="QRcodeimg" :src="iosDownQRcodeImg">
                            <p class="saoyisao">扫一扫，下载app</p>
                        </div>
                        <div class="android">
                            <img :src="AndroidDowndarkImg" alt="android">
                            <img class="QRcodeimg" :src="AndroidDownQRcodeImg">
                            <p class="saoyisao">扫一扫，下载app</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>京ICP备16003461号&nbsp;Copyright © 2015-2016 艺网YWART.COM 版权所有</p>
            <p class="thrid">
                <i id="footerLink" class="fa fa-sort-desc"></i>
                <strong>友情链接</strong>
                <span>
          <a href="http://www.r021.com" target="_blank">上海论坛</a>
          <a href="http://www.zhhdq.com" target="_blank">中华丹青网</a>
          <a href="http://www.zh88w.com" target="_blank">书法交易网</a>
          <a href="http://news.zxart.cn" target="_blank">艺术资讯</a>
          <a href="http://www.pmv.cn" target="_blank">中华收藏网</a>
          <a href="http://www.szsao.com" target="_blank">主题酒店设计</a>
          <a href="http://www.sjbb.com" target="_blank">室内设计</a>
          <a href="http://www.artyy.org" target="_blank">艺缘网</a>
          <a href="http://www.zghrsh.com" target="_blank">中国华人书画网</a>
          <a href="http://www.youaila.com/" target="_blank">买购网</a>
          <a href="http://www.pifashuhua.com/" target="_blank">字画批发</a>
          <a href="http://www.shuhua100.net" target="_blank">中国书画百强网</a>
          <a href="http://www.jyzzh.com" target="_blank">集雅斋字画网</a>
        </span>
            </p>
        </div>

        <div class="simple-footer" v-else>
            <p class="footer-link">
                <a href="/index" rel="nofollow">精选</a>
                <a href="/buy">原创艺术</a>
                <a href="http://pages.ywart.com/howtobuy">如何购买</a>
                <a href="/about_us">关于我们</a>
                <a href="/common/webmap">网站地图</a>
                <span><img
                        src="https://www.ywart.com/svg_file?path=/Content/image/logo_footer.svg&amp;rgb=0,0,0"></span>
            </p>
            <p>京ICP备16003461号&nbsp;Copyright © 2015-2016 艺网YWART.COM 版权所有</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        logoImg: require('../../assets/images/pages/index/footer/logo.svg'),
        wechatImg: require('../../assets/images/pages/index/footer/weChatQRcode.jpg'),
        iosDowndarkImg: require('../../assets/images/pages/index/footer/iosDowndark.png'),
        iosDownQRcodeImg: require('../../assets/images/pages/index/footer/iosDownQRcode.png'),
        AndroidDowndarkImg: require('../../assets/images/pages/index/footer/AndroidDowndark.png'),
        AndroidDownQRcodeImg: require('../../assets/images/pages/index/footer/AndroidDownQRcode.png'),
        sinaIcon: '&#xe67b;',
        wechatIcon: '&#xe61b;',
        tellphoneIcon: '&#xe6be;'
      }
    },
    created () {

    },
    mounted () {

    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less">
    .footer {
        position: absolute;
        width: 100%;
        background-color: #34353d;
        padding: 70px 0 10px;
        display: block;
        .banner {
            width: 100%;
            max-width: 1178px;
            margin: 0 auto;
            .footer_top {
                color: #fff;
                margin-bottom: 70px;
                position: relative;
                display: block;

                .top-left {
                    float: left;
                    width: 112px;
                    margin-right: 47px;
                    img {
                        width: 100%;
                    }
                }

                .top-right {
                    float: left;
                    margin-top: 7px;
                    p {
                        text-align: left;
                    }
                    i {
                        margin-right: 20px;
                        color: #fff;
                        &.icon-wechat:hover + img {
                            display: block;
                        }
                    }

                    .wechatShare {
                        position: absolute;
                        top: -20px;
                        width: 120px;
                        height: 120px;
                        left: 0;
                        display: none;
                    }
                    p + p {
                        margin-top: 20px;
                        i {
                            margin-right: 15px;
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
            .row {
                display: block;

                ul {
                    li {
                        margin-right: 130px;
                        float: left;
                        text-align: left;
                        strong {
                            padding-bottom: 22px;
                            display: block;
                            font-size: 18px;
                            color: #fff;
                        }
                        a {
                            padding: 5px 0;
                            display: block;
                            text-decoration: none;
                            font-size: 14px;
                            color: #fff;
                        }

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }

                .app-download {
                    float: right;
                    position: relative;
                    .QRcode {
                        & > div {
                            margin-bottom: 20px;
                            img:not(.QRcodeimg) {
                                display: block;
                                height: 40px;
                            }
                        }
                    }
                    .QRcodeimg {
                        width: 120px;
                        height: 120px;
                        position: absolute;
                        top: -170px;
                        left: 10px;
                        display: none;
                    }
                    .saoyisao {
                        display: none;
                        position: absolute;
                        font-size: 12px;
                        top: -35px;
                        left: 24px;
                        color: rgba(255, 255, 255, 0.3);
                    }

                    .apple img[alt="apple"]:hover + .QRcodeimg {
                        display: block;
                    }
                    .apple img[alt="apple"]:hover + .QRcodeimg + p {
                        display: block;
                    }
                    .android img[alt="android"]:hover + .QRcodeimg {
                        display: block;
                    }
                    .android img[alt="android"]:hover + .QRcodeimg + p {
                        display: block;
                    }
                }

                & + p {
                    margin-top: 90px;
                    color: #999;
                    font-size: 12px;
                    text-align: left;
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
            .thrid {
                white-space: nowrap;
                overflow: hidden;
                border-top: 1px solid #666;
                margin: 10px auto 0;
                color: #999;
                padding: 10px 0;
                font-size: 12px;
                i {
                    transition: all, 0.2s;
                    transform: rotate(90deg);
                    top: 2px;
                    left: 5px;
                    display: inline-block;
                    float: right;
                    position: relative;
                    z-index: 10;
                    font-size: 14px;
                    cursor: pointer;
                }
                strong {
                    height: 20px;
                    float: left;
                }
                span {
                    display: inline-block;
                    overflow: hidden;
                    width: 1100px;
                }
                a {
                    text-decoration: none;
                    cursor: pointer;
                    color: #999;
                    margin-left: 20px;
                }
            }
        }

        .simple-footer {
            height: 140px;
            background-color: #fff;
            max-width: 1366px;
            width: 100%;
            margin: 0 auto;
            padding: 30px 100px 0;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            .footer-link {
                text-align: left;
                position: relative;
                line-height: 50px;
                margin-bottom: 25px;
                a {
                    font-size: 14px;
                    margin-right: 7.5%;
                    color: #000;
                }
                span {
                    img {
                        position: absolute;
                        right: 0;
                        top: -20px;
                        height: 80px;
                    }
                }
            }
            p {
                text-align: center;
                font-size: 12px;
                color: #666;
            }
        }
        &.simple {
            width: 100%;
            padding: 0;
            background: #fff;
        }
    }
</style>
