<template>
  <div class="center-cmp">
    <div class="cc-header" style="flex-grow: 0">
      <dv-decoration-1 style="width:200px;height:50px;" />
      <div>地图分布</div>
      <dv-decoration-1 style="width:200px;height:50px;" />
    </div>
    <div style="flex-grow: 1;">
      <ve-map :data="chartData" height="100%"></ve-map>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CenterCmp',
  data () {
    return {
      chartData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;

  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
}
</style>
