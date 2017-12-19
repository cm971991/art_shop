<template>
    <div class="MyContain">
        <h1>artworks</h1>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    created () {
      debugger
      console.log('this.$route.params:', this.$route.params.id)
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less">
    .MyContain {
        background-color: #fff;
    }
</style>
