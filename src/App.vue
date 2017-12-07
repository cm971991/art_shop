<template>
    <div id="app">
        <i-header></i-header>
        <!--<router-view/>-->
    </div>
</template>

<script>
  import iHeader from './components/base/header'

  export default {
    components: {
      iHeader
    }
  }
</script>

<style>
    @import "../node_modules/ress/ress.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
