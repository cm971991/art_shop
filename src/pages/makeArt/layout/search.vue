<template>
  <section class="nav-select">
    <p>
      <template v-for="(item,index) in searchList">
        <span
          :class="{ active: item.active }"
          :key="index"
          @mouseenter="mouseEnter(item)">{{ item.title }}</span>
      </template>
    </p>
    <ul>
      <template v-for="(item,index) in searchList">
        <li :class="[item.className,{ active: item.active }]" :key="index">
          <p>
            <template v-for="(listItem,index) in item.list">
              <template v-if="item.type !== 'color' && item.type !== 'shape'">
                 <span
                   :class="{ active: listItem.active }"
                   :key="index"
                   @click="listItemChoose(listItem,item)">{{ listItem.title }}</span>
              </template>
              <template v-else-if="item.type === 'color'">
                <span :class="[listItem.className,{ active: listItem.active }]"
                      :key="index"
                      @click="listItemChoose(listItem,item)"
                      v-if="listItem.className !== 'bwg'">{{ listItem.title }}</span>
                <span
                  :class="[listItem.className,{ active: listItem.active }]"
                  :key="index"
                  @click="listItemChoose(listItem,item)"
                  v-else>{{ listItem.title }}<a></a><i></i></span>
              </template>
              <template v-else>
                <span
                  :class="[listItem.className,{ active: listItem.active }]"
                  :key="index"
                  @click="listItemChoose(listItem,item)">{{ listItem.title }}</span>
              </template>
            </template>
          </p>
        </li>
      </template>
    </ul>
    <div class="collect-search">
      <p>
        <span :class="{ active: computePriceData.active }">50cm以上<i class="icon-close" v-html="closeIcon"></i></span>
        <span>¥500-¥1,099<i class="icon-close" v-html="closeIcon"></i></span>
        <span>动物<i class="icon-close" v-html="closeIcon"></i></span>
        <span>绿色<i class="icon-close" v-html="closeIcon"></i></span>
        <span>竖形<i class="icon-close" v-html="closeIcon"></i></span>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        closeIcon: '&#xe685;',
        searchList: [
          {
            title: '价格',
            type: 'price',
            active: true,
            className: '',
            list: [
              {title: '¥1-¥499', value: '1-499', active: false},
              {title: '¥500-¥1099', value: '500-1099', active: false},
              {title: '¥1100以上', value: '1099-max', active: false}
            ]
          },
          {
            title: '尺寸',
            type: 'size',
            active: false,
            className: '',
            list: [
              {title: '50cm以下', value: '0-50', active: false},
              {title: '50cm以上', value: '50-max', active: false}
            ]
          },
          {
            title: '题材',
            type: 'category',
            active: false,
            className: '',
            list: [
              {title: '风景', value: '风景', active: false},
              {title: '人物', value: '人物', active: false},
              {title: '静物', value: '静物', active: false},
              {title: '动物', value: '动物', active: false},
              {title: '其他', value: '其他', active: false}
            ]
          },
          {
            title: '颜色',
            type: 'color',
            active: false,
            className: 'sel-color',
            list: [
              {title: '粉色', value: '粉色', className: 'pink', active: false},
              {title: '红色', value: '红色', className: 'red', active: false},
              {title: '橙色', value: '橙色', className: 'orange', active: false},
              {title: '黄色', value: '黄色', className: 'yellow', active: false},
              {title: '绿色', value: '绿色', className: 'green', active: false},
              {title: '青色', value: '青色', className: 'cyan', active: false},
              {title: '蓝色', value: '蓝色', className: 'blue', active: false},
              {title: '紫色', value: '紫色', className: 'purple', active: false},
              {title: '棕色', value: '棕色', className: 'brown', active: false},
              {title: '白色', value: '白色', className: 'white', active: false},
              {title: '灰黑色', value: '灰黑色', className: 'bwg', active: false}
            ]
          },
          {
            title: '形状',
            type: 'shape',
            active: false,
            className: 'sel-shape',
            list: [
              {title: '方形', value: 'square', className: 'square', active: false},
              {title: '横形', value: 'la-rec', className: 'la-rec', active: false},
              {title: '竖形', value: 'lo-rec', className: 'lo-rec', active: false}
            ]
          }
        ],
        collectSearchList: [
          {title: '', value: '', type: '', active: false}
        ]
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
      computePriceData () {
        return {value: this.$store.getters.beautySearch.price, active: !!this.$store.getters.beautySearch.price}
      }
    },
    methods: {
      mouseEnter (item) {
        this.searchList.forEach((item) => {
          item.active = false
          // item.list.forEach((listItem) => {
          //   listItem.active = false
          // })
        })
        item.active = true
      },
      listItemChoose (self, parent) {
        parent.list.forEach((item) => {
          item.active = false
        })
        self.active = true
        this.$store.commit('', self.value)

        switch (self.type) {
          case 'price':

            break
        }
      }
    }
  }
</script>
