<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
    this.toMainPage()
  },
  methods: {
    toMainPage () {
      // 设置导航到那个初始页面
    }
  }
}
</script>

<style>
</style>
