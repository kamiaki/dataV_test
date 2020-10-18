// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import dataV from '@jiaminghi/data-view'
import VCharts from 'v-charts'
import Vuex from 'vuex'

Vue.use(dataV)
Vue.use(VCharts)
Vue.use(Vuex)
Vue.config.productionTip = false

// 这个store名字不能换
const store = new Vuex.Store({
  state: {
    lineTest: {
      columns: ['日期', '访问用户', '下单用户', '下单率'],
      rows: [
        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
      ]
    }
  },
  mutations: {
    updateLineTest (state, n) {
      state.lineTest = n
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
