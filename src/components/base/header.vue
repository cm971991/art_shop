<template>
    <div class="header">
        <div class="logo active">
            <a href="/">
                <img src="https://www.ywart.com/svg_file?path=/Content/image/logo_text.svg&amp;rgb=255,255,255"
                     alt="艺网logo">
            </a>
        </div>
        <div class="nav">
            <a href="/buy">原创艺术</a>
            <a href="/makeart">造艺</a>
            <a href="/collect/index">藏艺术</a>
            <a href="/user/userwishlist">我的珍藏</a>
            <div class="search">
                <a href="javascript:void(0);">
                    <img src="https://www.ywart.com/svg_file?path=/Content/image/search.svg&amp;rgb=255,255,255"
                         class="souicon active">
                    <img src="https://www.ywart.com/svg_file?path=/Content/image/closeInput.svg&amp;rgb=255,255,255"
                         class="close">
                </a>
            </div>
        </div>
        <div class="member">
            <div class="login_prev">
                <a href="/login">
                    <b>登录 / 注册</b>
                </a>
            </div>
        </div>
        <div class="searchBox" style="display: none;">
            <input placeholder="搜索艺术家或艺术品">
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
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
    .header {
        min-width: 1028px;
        width: 100%;
        height: 68px;
        padding: 0 40px;
        position: fixed;
        top: 0;
        text-align: center;
        background: #000;
        box-shadow: 0 -1px 8px 1px #333;

        .logo {
            float: left;
            height: 68px;
            margin: 0 100px 0 20px;
            img {
                height: 68px;
                width: 42px;
            }
            &:after {
                width: 100px;
                height: 5px;
                background-color: #fff;
                display: none;
                content: '';
                position: absolute;
                bottom: 0;
                left: 33px;
            }
        }

        .nav {

            &.active {

            }

            .search {

            }
        }

        .member {

        }
    }
</style>
