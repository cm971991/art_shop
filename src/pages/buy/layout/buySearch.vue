<template>
    <div class="buy-search">
        <span class="price" :class="{ active : computePriceData.active }">{{ computePriceData.value }}
            <i class="icon-close-small" v-html="closeIcon" @click="clearSearch('price')"></i>
        </span>
        <span class="size" :class="{ active : computeSizeData.active }">{{ computeSizeData.value }}
            <i class="icon-close" v-html="closeIcon" @click="clearSearch('size')"></i>
        </span>
        <span class="color" :class="[{ active : computeColorData.active }, computeColorData.value]">{{ computeColorData.displayName }}
            <i class="icon-close" v-html="closeIcon" @click="clearSearch('color')"></i>
        </span>
        <span class="shape" :class="{ active : computeShapeData.active }">{{ computeShapeData.displayName }}
            <i class="icon-close" v-html="closeIcon" @click="clearSearch('shape')"></i>
        </span>
        <span class="space" :class="{ active : computeSpaceData.active }">{{ computeSpaceData.value }}
            <i class="icon-close" v-html="closeIcon" @click="clearSearch('space')"></i>
        </span>
        <span class="category" :class="{ active : computeCategoryData.active }">{{ computeCategoryData.value }}
            <i class="icon-close" v-html="closeIcon" @click="clearSearch('category')"></i>
        </span>
        <span class="style" :class="{ active : computeStyleData.active }">{{ computeStyleData.value }}
            <i class="icon-close" v-html="closeIcon" @click="clearSearch('style')"></i>
        </span>
        <input type="reset" class="s-reset" value="重置" @click="resetSearch">
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
        searchIcon: '&#xe603;',
        closeIcon: '&#xe60d;'
      }
    },
    created () {
    },
    mounted () {},
    computed: {
      computePriceData () {
        return {value: this.$store.getters.search.price, active: !!this.$store.getters.search.price}
      },
      computeSizeData () {
        return {value: this.$store.getters.search.size, active: !!this.$store.getters.search.size}
      },
      computeColorData () {
        let displayName = ''
        switch (this.$store.getters.search.color) {
          case 'red':
            displayName = '红色系'
            break
          case 'yellow':
            displayName = '黄色系'
            break
          case 'green':
            displayName = '绿色系'
            break
          case 'blue':
            displayName = '蓝色系'
            break
          case 'bwg':
            displayName = '黑白灰'
            break
        }
        return {
          value: this.$store.getters.search.color,
          active: !!this.$store.getters.search.color,
          displayName: displayName
        }
      },
      computeShapeData () {
        let displayName = ''
        switch (this.$store.getters.search.shape) {
          case 'square':
            displayName = '方'
            break
          case 'la-Rec':
            displayName = '横'
            break
          case 'lo-Rec':
            displayName = '竖'
            break
          case 'round':
            displayName = '圆'
            break
          case 'irregular':
            displayName = '不规则'
            break
        }
        return {
          value: this.$store.getters.search.shape,
          active: !!this.$store.getters.search.shape,
          displayName: displayName
        }
      },
      computeSpaceData () {
        return {value: this.$store.getters.search.space, active: !!this.$store.getters.search.space}
      },
      computeCategoryData () {
        return {value: this.$store.getters.search.category, active: !!this.$store.getters.search.category}
      },
      computeStyleData () {
        return {value: this.$store.getters.search.style, active: !!this.$store.getters.search.style}
      }
    },
    methods: {
      /**
       * 重置查询条件
       */
      resetSearch () {
        this.$store.commit('INIT_SEARCH')
      },
      /**
       * 清除某个查询条件
       * @param type 查询条件类型
       */
      clearSearch (type) {
        let search = this.$store.getters.search
        switch (type) {
          case 'price':
            search.price = ''
            break
          case 'size':
            search.size = ''
            break
          case 'color':
            search.color = ''
            break
          case 'shape':
            search.shape = ''
            break
          case 'space':
            search.space = ''
            break
          case 'category':
            search.category = ''
            break
          case 'style':
            search.style = ''
            break
        }
        this.$store.commit('UPDATE_SEARCH', search)
      }
    }
  }
</script>
