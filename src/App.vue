<template>
  <div id="app">
    <dv-border-box-3 style="width: 200px;height: 200px">
      <div id="myChart" style="width: 90%;height: 90%;margin:  0 auto"></div>
    </dv-border-box-3>
    <dv-decoration-1 style="width:200px;height:50px;"/>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'), true)
      // 绘制图表
      myChart.setOption({
        title: {text: ' '},
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style>
</style>
