<template>
  <div class="left-chart-1">
    <div style="flex-grow: 0">我是标题</div>
    <div style="flex-grow: 0">我是副标题</div>
    <div style="flex-grow: 1">
      <ve-line
        :data="chartData"
        height="100%"
        :extend="chartExtend"></ve-line>
    </div>
    <dv-decoration-2 style="height:10px;flex-grow: 0" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data () {
    this.chartExtend = {
      grid: {
        top: 50,
        left: 10,
        right: 10,
        bottom: 10
      }
    }
    return {
      chartData: {}
    }
  },
  computed: {
    comUpdateL () {
      return this.$store.state.lineTest
    }
  },
  watch: {
    // 观察数据变化，执行相应的方法
    comUpdateL (val, oldval) {
      this.chartData = val
    }
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
}
</style>
