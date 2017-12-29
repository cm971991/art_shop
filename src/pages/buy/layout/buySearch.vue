<template>
    <div class="buy-search">
        <input type="reset" class="s-reset" value="重置">
        <div>
            <i class="icon-search" v-html="searchIcon"></i>
            <input type="text" class="search" placeholder="搜索艺术家或艺术品">
        </div>
        <button class="sure">开始筛选</button>
        <a class="changeModel">高级筛选<i class="icon-down-arrow" v-html="downIcon"></i></a>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        downIcon: '&#xe64b;',
        searchIcon: '&#xe603;'
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

<style lang="less" scoped>
    .buy-search {
        position: relative;
        top: 0;
        width: 100%;
        text-align: left;
        line-height: 50px;
        height: 50px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 7.5%;
        border-bottom: 1px solid #eee;
        z-index: 0;
        .s-reset {
            display: none;
            background: none;
            border: none;
            color: #666;
            font-size: 14px;
            cursor: pointer;
            margin: 0 20px;
            position: relative;
        }
        div {
            display: inline-block;
            border-radius: 13px;
            position: relative;
            height: 28px;
            top: 12px;
            i {
                position: relative;
                top: -8px;
            }
            .search {
                position: relative;
                top: -12px;
                font-size: 14px;
                padding-left: 8px;
                border: none;
                line-height: 16px;
            }
        }
        .sure {
            border-color: #999;
            background-color: #999;
            color: #fff;
            transition: background-color, 1s;
        }

        .changeModel {
            position: absolute;
            text-align: center;
            background-color: #fff;
            top: 50px;
            left: 50%;
            margin-left: -70px;
            display: block;
            width: 140px;
            height: 30px;
            color: #333;
            font-size: 14px;
            text-decoration: none;
            line-height: 30px;
            border-radius: 0 0 4px 4px;
            -moz-border-radius: 0 0 4px 4px;
            -webkit-border-radius: 0 0 4px 4px;
            border: 1px solid #eee;
            border-top: none;
            i {
                margin-left: 10px;
            }
        }

        button {
            margin-top: 6px;
            float: right;
            border: none;
            width: 130px;
            height: 36px;
            cursor: pointer;
            outline: none;
            font-size: 14px;
            display: none;
        }
    }
</style>
