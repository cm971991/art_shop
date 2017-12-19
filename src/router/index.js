import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Login from '../pages/login'
import Buy from '../pages/buy'
import Artworks from '../pages/artworks'

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
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: Artworks
    },
    {
      path: '/artworks/:id',
      name: 'artworks',
      component: Artworks
    }
  ]
})
