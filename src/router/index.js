import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login/login'
import Buy from '../pages/buy/buy'
import Artworks from '../pages/artworks/artworks'
import Artist from '../pages/artist/artist'
import Solicitation from '../pages/solicitation/solicitation'
import Cart from '../pages/shopping/cart'
import OrderPay from '../pages/order/orderPay/orderPay'
import OrderDetail from '../pages/order/orderDetail/orderDetail'

Vue.use(Router)
const defaultTitle = '爱艺'
export const router = new Router({
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
      meta: {title: '登录注册页-爱艺'},
      component: Login
    },
    {
      path: '/buy',
      name: 'buy',
      meta: {title: '原创艺术-爱艺'},
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
    },
    {
      path: '/order',
      name: 'order',
      component: OrderPay
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail
    }
  ]
})
router.afterEach((to) => {
  // 设置标题
  if (to.meta.title || defaultTitle !== document.title) {
    Vue.$utils.Common.setTitle(to.meta.title || defaultTitle)
  }
})
