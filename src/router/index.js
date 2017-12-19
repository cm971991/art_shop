import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Login from '../pages/login'
import Buy from '../pages/buy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    }
  ]
})
