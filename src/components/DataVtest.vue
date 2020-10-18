<template>
  <div id="data-view">
    <dv-full-screen-container>

      <div class="main-header">
        <div class="mh-left">
          技术支持:
          <a href="https://github.com/jiaming743/DataV">
            https://github.com/jiaming743/DataV
          </a>
        </div>
        <div class="mh-middle">
          机电设备电子档案
        </div>
        <div class="mh-right">
          <dv-border-box-7
            style="width: 120px; height: 50px;
            line-height: 50px; text-align:center;
            margin-left:200px;"
          >
            综合管理台
          </dv-border-box-7>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">

          <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 />

        </dv-border-box-3>

      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'DataVtest',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
  #data-view {
    width: 100%;
    height: 100%;
    background-color: #bf2256;
    color: #747474;

    #dv-full-screen-container {
      background-image: url('../assets/bg.png');
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      display: flex;
      /*主轴为垂直方向，起点在上沿*/
      flex-direction: column;
    }

    .main-header {
      height: 80px;
      display: flex;
      /*两端对齐，项目之间的间隔都相等*/
      justify-content: space-between;
      /*横向，贴底对其*/
      align-items: flex-end;

      .mh-left {
        font-size: 12px;
        color: rgb(1, 134, 187);
        a:visited {
          color: rgb(1, 134, 187);
        }
      }
      .mh-middle {
        font-size: 30px;
      }
      .mh-left, .mh-right {
        width: 450px;
      }
    }

    .main-container {
      height: calc(~"100% - 80px");
      .border-box-content {
        padding: 20px;
        /*对元素指定宽度和高度包括了 padding 和 border ,就是告诉浏览器如何计算盒子宽高*/
        box-sizing: border-box;
        display: flex;
      }
    }

    .left-chart-container {
      width: 22%;
      padding: 10px;
      box-sizing: border-box;
      .border-box-content {
        flex-direction: column;
      }
    }
  }

</style>
