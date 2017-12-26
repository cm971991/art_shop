<template>
    <div id="app">
        <i-header></i-header>
        <router-view/>
        <i-footer></i-footer>
    </div>
</template>

<script>
import iHeader from './components/base/iHeader'
import iFooter from './components/base/iFooter'

export default {
  components: {
    iHeader, iFooter
  },
  data () {
    return {

    }
  },
  created () {
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style>
/* @import "../node_modules/ress/ress.css"; */
@import "./assets/styles/common/base.less";
@import "./assets/styles/common/icon.less";

body {
  min-width: 1200px;
  margin-top: 0;
  position: relative;
  padding-bottom: 445px;
}

#app {
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
