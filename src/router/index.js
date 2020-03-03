import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Style from '@/router/style.js'
import Echarts from '@/router/echarts.js'
import Assembly from '@/router/assembly.js'
import htmlFive from '@/router/htmlFive.js'
import eui from '@/router/eui.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [ 
        ...Style,
        ...Echarts,
        ...Assembly,
        ...htmlFive,
        ...eui
      ]
    }
  ]
})
