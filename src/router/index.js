import Vue from 'vue'
import Router from 'vue-router'
import DataVtest from '@/components/DataVtest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/DataVtest',
      name: 'DataVtest',
      component: DataVtest
    }
  ]
})
