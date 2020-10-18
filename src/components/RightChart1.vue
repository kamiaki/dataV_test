<template>
  <div class="right-chart-1">
    <div class="rc1-header" style="flex-grow: 0">赵六收费站</div>
    <div style="flex-grow: 1">
      <ve-pie :data="chartData"
              height="100%"
              :settings="chartSettings"
              :extend="chartExtend"></ve-pie>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart1',
  data () {
    this.chartExtend = {
      grid: {
        top: 50,
        left: 10,
        right: 10,
        bottom: 10
      }
    }
    this.chartSettings = {
      offsetY: 60,
      legendLimit: 0,
      radius: 30
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }
}
</style>
