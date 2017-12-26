<template>
    <div class="buy-art">
        <div class="simple">
            <div class="choice-left">
                <p class="price">
                    <b>价格</b>
                    <i>0</i>
                    <a v="0～2000" data-text="2,000元以下" href="/buy?price=0～2000&amp;page=1"></a>
                    <i>¥2,000</i>
                    <a v="2000～8000" data-text="2,000～8,000元" href="/buy?price=2000～8000&amp;page=1"></a>
                    <i>¥8,000</i>
                    <a v="8000～15000" data-text="8,000～15,000元" href="/buy?price=8000～15000&amp;page=1"></a>
                    <i>¥15,000</i>
                    <a v="15000～30000" data-text="15,000～30,000" href="/buy?price=15000～30000&amp;page=1"></a>
                    <i>¥30,000</i>
                    <a v="30000～max" data-text="30,000元以上" href="/buy?price=30000～max&amp;page=1"></a>
                    <i>max</i>
                </p>
                <p class="size">
                    <b>尺寸</b>
                    <i>0</i>
                    <a v="0～50cm" data-text="50cm以下" href="/buy?price=0～20000&amp;size=0～50cm&amp;page=1"></a>
                    <i>50cm</i>
                    <a v="50～100cm" data-text="50～100cm" href="/buy?price=0～20000&amp;size=50～100cm&amp;page=1"></a>
                    <i>100cm</i>
                    <a v="100～150cm" data-text="100～150cm" href="/buy?price=0～20000&amp;size=100～150cm&amp;page=1"></a>
                    <i>150cm</i>
                    <a v="150～200cm" data-text="150～200cm" href="/buy?price=0～20000&amp;size=150～200cm&amp;page=1"></a>
                    <i>200cm</i>
                    <a v="200～max" data-text="200cm以上" href="/buy?price=0～20000&amp;size=200～max&amp;page=1"></a>
                    <i>max</i>
                </p>
                <p class="color">
                    <b>颜色</b>
                    <a class="red" v="红色系" href="/buy?price=0～20000&amp;color=红色系&amp;page=1"></a>
                    <a class="yellow" v="黄色系" href="/buy?price=0～20000&amp;color=黄色系&amp;page=1"></a>
                    <a class="green" v="绿色系" href="/buy?price=0～20000&amp;color=绿色系&amp;page=1"></a>
                    <a class="blue" v="蓝色系" href="/buy?price=0～20000&amp;color=蓝色系&amp;page=1"></a>
                    <a class="bwg" v="黑白灰" href="/buy?price=0～20000&amp;color=黑白灰&amp;page=1"><img
                            :src="bwgImg" alt="黑白灰"></a>
                </p>
                <p class="shape">
                    <b>形状</b>
                    <a class="square" v="方" href="/buy?price=0～20000&amp;shape=方&amp;page=1)"></a>
                    <a class="la_Rec" v="横" href="/buy?price=0～20000&amp;shape=横&amp;page=1"></a>
                    <a class="lo_Rec" v="竖" href="/buy?price=0～20000&amp;shape=竖&amp;page=1"></a>
                    <a class="round " v="圆" href="/buy?price=0～20000&amp;shape=圆&amp;page=1"></a>
                    <a class="irregular" v="不规则" href="/buy?price=0～20000&amp;shape=不规则&amp;page=1">
                        <img :src="starEmptyImg" alt="default" class="default">
                        <img :src="starMiddleImg" alt="hover"
                             class="hover">
                        <img :src="starChooseImg" alt="active" class="show">
                    </a>
                </p>
            </div>
            <div class="choice-middle">
                <div class="space">
                    <h3>摆放空间</h3>
                    <ul class="Space">
                        <a v="办公" href="/buy?price=0～20000&amp;space=不规则&amp;page=1">办公</a>
                        <a v="客厅" href="/buy?price=0～20000&amp;space=客厅&amp;page=1">客厅</a>
                        <a v="书房" href="/buy?price=0～20000&amp;space=书房&amp;page=1">书房</a>
                        <a v="餐厅" href="/buy?price=0～20000&amp;space=餐厅&amp;page=1">餐厅</a>
                        <a v="儿童房" href="/buy?price=0～20000&amp;space=儿童房&amp;page=1">儿童房</a>
                        <a v="走廊/回廊" href="/buy?price=0～20000&amp;space=走廊/回廊&amp;page=1">走廊/回廊</a>
                    </ul>
                </div>
                <div class="category">
                    <h3>分类</h3>
                    <ul class="Category">
                        <a v="油画" href="/buy?price=0～20000&amp;category=油画&amp;page=1">油画</a>
                        <a v="版画" href="/buy?price=0～20000&amp;category=版画&amp;page=1">版画</a>
                        <a v="水墨" href="/buy?price=0～20000&amp;category=水墨&amp;page=1">水墨</a>
                        <a v="水彩(粉)" href="/buy?price=0～20000&amp;category=水彩(粉)&amp;page=1">水彩(粉)</a>
                        <a v="雕塑" href="/buy?price=0～20000&amp;category=雕塑&amp;page=1">雕塑</a>
                        <a v="摄影" href="/buy?price=0～20000&amp;category=摄影&amp;page=1">摄影</a>
                    </ul>
                </div>
            </div>
            <div class="choice-right">
                <div class="text">
                    <ul class="style">
                        <a v="抽象" href="/buy?price=0～20000&amp;style=抽象&amp;page=1">抽象</a>
                        <a v="具象" href="/buy?price=0～20000&amp;style=具象&amp;page=1">具象</a>
                        <a v="观念" href="/buy?price=0～20000&amp;style=观念&amp;page=1">观念</a>
                        <a v="传统国画" href="/buy?price=0～20000&amp;style=传统国画&amp;page=1">传统国画</a>
                    </ul>
                    <ul class="theme">
                        <a v="人物" href="/buy?price=0～20000&amp;theme=人物&amp;page=1">人物</a>
                        <a v="风景" href="/buy?price=0～20000&amp;theme=风景&amp;page=1">风景</a>
                        <a v="静物" href="/buy?price=0～20000&amp;theme=静物&amp;page=1">静物</a>
                    </ul>
                </div>
                <div class="show_wall"
                     style="background-image: url(https://cdn.ywart.com/material/goodsbuy/20160727/02.jpg);">
                    <h2 class="cn_des">抽象</h2>
                    <h2 class="en_des">Abstract-Expression</h2>
                    <hr class="_hidden" style="display: block;">
                    <p class="hover_text">
                        是既不模仿又不直接再现外在现实，以形式和色彩本身来打动观众的艺术风格。通过对现实的扭曲变形来表现艺术家的激情和内心幻象，强调表现的自发性和艺术家的个性。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        bwgImg: require('../../assets/images/pages/buy/B_W_G.png'),
        starEmptyImg: require('../../assets/images/pages/buy/icon_star_empty.svg'),
        starMiddleImg: require('../../assets/images/pages/buy/icon_star_middle.svg'),
        starChooseImg: require('../../assets/images/pages/buy/icon_star_choose.svg')
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
    @import "../../assets/styles/pages/buy.less";
</style>
