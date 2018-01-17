<template>
  <section class="remind-section">
    <p @click="showRemind">
      <i class="icon-bookmark" v-html="remindIcon"></i>
      <span>爱艺小贴士</span>
      <i class="icon-down-solid-arrow f_r" :class="{active:!remindActive}" v-html=" downArrowIcon"></i>
      <i class="icon-up-solid-arrow f_r" :class="{active:remindActive}" v-html="upArrowIcon"></i>
    </p>
    <div class="remind-contain" :class="{active:remindActive}">
      <div class="remind">
        <p>绘画作品</p>
        <div>
          <h3>存放</h3>
          <ul>
            <li>
              <p>放置画作的理想环境为室温14℃-18℃，相对湿度50%-60%；</p>
            </li>
            <li>
              <p>避光、防潮请避免阳光长期直射画面，保持画作放置处的空气流通，并远离厨卫等湿气较重的地方，避免灰尘、油烟损害画作；</p>
            </li>
            <li>
              <p>防风请勿在空调口、暖气扇旁放置画作，避免风力过大造成画作受损；</p>
            </li>
            <li>
              <p>防损请勿过于频繁地搬动画作，并避免任何腐蚀性材料（如化学药剂、清洁剂等）接触画面；观赏画作时，请尽量避免肢体与画作的直接接触。</p>
            </li>
          </ul>
          <h3>清洁与保养</h3>
          <h4>油画</h4>
          <ul>
            <li>
              <p>请使用干净、柔软的材料（擦布或黑貂豪笔）轻轻擦拭画上的灰尘；避免清洁剂、海绵或吸尘器接触画面；</p>
            </li>
            <li>
              <p>若受潮，请先用净布吸去水渍，再进行阴干，切忌暴晒；</p>
            </li>
            <li>
              <p>切勿将两张油画对贴放置，一旦画面粘连，会导致油彩脱坏。</p>
            </li>
          </ul>
          <h4>中国画</h4>
          <ul>
            <li>
              <p>请使用软质毛刷（如拂尘、羽毛掸子）清除灰尘，勿使用布类，并保证动作轻柔，避免损伤画纸；</p>
            </li>
            <li>
              <p>若受潮，请用干布或纸巾吸水，再进行阴干，切忌暴晒；</p>
            </li>
          </ul>
          <h4>版画</h4>
          <ul>
            <li>
              <p>未装裱的版画，请平铺放于干燥处或卷入画筒内；若多张叠放，请在画作之间用软质白纸进行分隔；</p>
            </li>
            <li>
              <p>已装裱的版画，定期用擦布或纸巾清洁画框即可。</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="remind">
        <p>雕塑作品</p>
        <div>
          <h3>存放</h3>
          <ul>
            <li>
              <p>放置雕塑品的理想温度为18℃-24℃，相对湿度为40%-50%。请勿将作品放于过高或过低的温度和湿度下，易引起作品变形损坏；</p>
            </li>
            <li>
              <p>防损请将雕塑品放于平稳处，避免碰撞、叠压作品造成物理损伤。</p>
            </li>
          </ul>
          <h3>清洁与保养</h3>
          <ul>
            <li>
              <p>请用柔软的干布或软毛刷清洁雕塑品表面，切勿用湿布或化学试剂擦拭作品，避免作品受到腐蚀；</p>
            </li>
            <li>
              <p>接触作品时，请尽量保持动作轻柔，避免损害作品。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        remindIcon: '&#xe717;',
        downArrowIcon: '&#xe602;',
        upArrowIcon: '&#xe60f;',
        remindActive: false
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 小贴士 切换显示
       */
      showRemind () {
        this.remindActive = !this.remindActive
      }
    }
  }
</script>
