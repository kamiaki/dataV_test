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
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
