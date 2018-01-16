import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login'
import Buy from '../pages/buy/buy'
import Artworks from '../pages/artworks/artworks'
import Artist from '../pages/artist/artist'
import Solicitation from '../pages/solicitation/solicitation'
import Cart from '../pages/shopping/cart'

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
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: Artist
    },
    {
      path: '/solicitation',
      name: 'solicitation',
      component: Solicitation
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
