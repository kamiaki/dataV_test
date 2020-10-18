<template>
  <div id="data-view">
    <!--全屏容器-->
    <dv-full-screen-container>

      <!--头部-->
      <div class="main-header">
        <div class="mh-left">
          作者:Aki
        </div>
        <div class="mh-middle">雷电项目</div>
        <div class="mh-right">
          <dv-border-box-2
            style="width: 120px; height: 50px;
            line-height: 50px; text-align:center;
            margin-left:200px;">
            综合管理台
          </dv-border-box-2>
        </div>
      </div>

      <!--内容主体-->
      <dv-border-box-1 class="main-container">

        <!--左边内容-->
        <dv-border-box-3 class="left-chart-container">
          <Left-Chart-1/>
          <Left-Chart-2/>
          <Left-Chart-3/>
        </dv-border-box-3>

        <!--右边内容-->
        <div class="right-main-container">

          <!--右 上-->
          <div class="rmc-top-container">
            <!--右上 左-->
            <dv-border-box-3 class="rmctc-left-container">
              <Center-Cmp/>
            </dv-border-box-3>
            <!--右上 右-->
            <div class="rmctc-right-container">
              <!--右上右 1-->
              <dv-border-box-3 class="rmctc-chart-1">
                <Right-Chart-1/>
              </dv-border-box-3>
              <!--右上右 2-->
              <!--:reverse="true" 代表边框镜像-->
              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2/>
              </dv-border-box-4>
            </div>
          </div>

          <!--右 下-->
          <dv-border-box-4 class="rmc-bottom-container">
            <Bottom-Charts/>
          </dv-border-box-4>

        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1'
import LeftChart2 from './LeftChart2'
import LeftChart3 from './LeftChart3'
import CenterCmp from './CenterCmp'
import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'
import BottomCharts from './BottomCharts'

export default {
  name: 'DataView',
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2,
    BottomCharts
  },
  data () {
    return {
    }
  },
  mounted () {
    this.updateL()
  },
  methods: {
    random (min, max) {
      // 若max不存在 min 赋值给max,并重新赋值min
      if (max == null) {
        max = min
        min = 0
      }
      return min + Math.floor(Math.random() * (max - min + 1))
    },
    updateL () {
      let vue = this
      let v = this.$store
      setInterval(() => {
        let optionOne = {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            {'日期': '1/1', '访问用户': vue.random(2000), '下单用户': vue.random(2000), '下单率': Math.random()},
            {'日期': '1/2', '访问用户': vue.random(2000), '下单用户': vue.random(2000), '下单率': Math.random()},
            {'日期': '1/3', '访问用户': vue.random(2000), '下单用户': vue.random(2000), '下单率': Math.random()},
            {'日期': '1/4', '访问用户': vue.random(2000), '下单用户': vue.random(2000), '下单率': Math.random()},
            {'日期': '1/5', '访问用户': vue.random(2000), '下单用户': vue.random(2000), '下单率': Math.random()},
            {'日期': '1/6', '访问用户': vue.random(2000), '下单用户': vue.random(2000), '下单率': Math.random()}
          ]
        }
        v.commit('updateLineTest', optionOne)
      }, 2000)
    }
  }
}
</script>

<!--不能写scoped，不然工用style无法修改这个组件-->
<style lang="less">
  /*最外层*/
  #data-view {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;

    /*全屏容器*/

    #dv-full-screen-container {
      background-image: url('../assets/bg.png');
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      /*伸缩布局*/
      display: flex;
      /*垂直布局，从上到下*/
      flex-direction: column;
    }

    /*头部*/

    .main-header {
      height: 80px;
      display: flex;
      /*flex两边对其，元素间距相等*/
      justify-content: space-between;
      /*flex横向排列，贴底对其*/
      align-items: flex-end;

      .mh-left {
        font-size: 20px;
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

    /*主要内容*/

    .main-container {
      font-size: 12px;
      /*总高度，减去标题高度*/
      height: calc(~"100% - 80px");

      .border-box-content {
        padding: 20px;
        /*计算盒子宽高的时候，包括padding和border */
        box-sizing: border-box;
        display: flex;
      }
    }

    /*左边容器*/

    .left-chart-container {
      width: 22%;
      padding: 10px;
      box-sizing: border-box;

      .border-box-content {
        flex-direction: column;
      }
    }

    /*右边容器*/

    .right-main-container {
      width: 78%;
      padding-left: 5px;
      box-sizing: border-box;
    }

    .rmc-top-container {
      height: 65%;
      display: flex;
      /*默认*/
      flex-direction: row;
    }

    .rmctc-left-container {
      width: 65%;
    }

    .rmctc-right-container {
      width: 35%;
    }

    .rmc-bottom-container {
      height: 35%;
    }

    .rmctc-chart-1, .rmctc-chart-2 {
      height: 50%;
    }
  }
</style>
