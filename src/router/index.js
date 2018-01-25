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
import MakeArt from '../pages/makeArt/MakeArt'
import Broker from '../pages/broker/broker'
import UserWish from '../pages/userWish/userWish'

Vue.use(Router)
export const defaultTitle = '爱艺'
export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title: '爱艺', showNav: true, footer: 'default'},
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      meta: {title: '爱艺', showNav: true, footer: 'default'},
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      meta: {title: '登录注册页-爱艺', showNav: false, footer: 'none'},
      component: Login
    },
    {
      path: '/buy',
      name: 'buy',
      meta: {title: '原创艺术-爱艺', showNav: true, footer: 'none'},
      component: Buy
    },
    {
      path: '/artworks/:id',
      name: 'artworks',
      meta: {title: '原创艺术-爱艺', showNav: true, footer: 'none'},
      component: Artworks
    },
    {
      path: '/artist/:id',
      name: 'artist',
      meta: {title: '艺术家-爱艺', showNav: false, footer: 'none'},
      component: Artist
    },
    {
      path: '/solicitation',
      name: 'solicitation',
      meta: {title: '艺术家作品征集-爱艺', showNav: true, footer: 'default'},
      component: Solicitation
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {title: '购物车-爱艺', showNav: true, footer: 'none'},
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      meta: {title: '订单-爱艺', showNav: true, footer: 'default'},
      component: OrderPay
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      meta: {title: '订单-爱艺', showNav: true, footer: 'default'},
      component: OrderDetail
    },
    {
      path: '/makeArt',
      name: 'makeArt',
      meta: {title: '美物-爱艺', showNav: true, footer: 'default'},
      component: MakeArt
    },
    {
      path: '/broker',
      name: 'broker',
      meta: {title: '经纪人专享-爱艺', showNav: true, footer: 'default'},
      component: Broker
    },
    {
      path: '/userWish',
      name: 'userWish',
      meta: {title: '我的珍藏-爱艺', showNav: true, footer: 'default'},
      component: UserWish
    }
  ]
})
