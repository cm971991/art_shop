<template>
  <div class="artists">
    <div class="title">
      <h2>艺术家 / ARTIST</h2>
      <a href="/Solicitation/step0">作品征集全面开放</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.artists {
  display: block;
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 100px;
  .title {
    text-align: left;
    margin-bottom: 40px;
    height: 46px;
    line-height: 46px;
    h2 {
      letter-spacing: 3px;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      font-size: 26px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      color: #000000;
      margin-right: 34px;
    }
    a {
      display: inline-block;
      width: 180px;
      text-align: center;
      line-height: 38px;
      cursor: pointer;
      vertical-align: middle;
      height: 40px;
      border-radius: 20px;
      border: solid 1px #3c948b;
      box-sizing: border-box;
      color: #3a8373;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>