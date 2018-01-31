import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Login from '../pages/login/login'
import Buy from '../pages/buy/buy'
import Artworks from '../pages/artworks/artworks'
import Artist from '../pages/artist/artist'
import Solicitation from '../pages/solicitation/solicitation'
import Cart from '../pages/shopping/cart/cart'
import OrderPay from '../pages/shopping/orderPay/orderPay'
import OrderDetail from '../pages/shopping/orderDetail/orderDetail'
import MakeArt from '../pages/makeArt/MakeArt'
import Broker from '../pages/broker/broker'
import UserWish from '../pages/user/userWish/userWish'
import UserCollect from '../pages/user/userCollect/userCollect'
import UserHistory from '../pages/user/userHistory/userHistory'
import UserCenter from '../pages/user/userCenter/userCenter'
import UserOrder from '../pages/user/userOrder/userOrder'
import DiscoveryIndex from '../pages/discovery/index/index'
import DiscoveryDetail from '../pages/discovery/detail/detail'

Vue.use(Router)
export const defaultTitle = '爱艺'
export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title: '爱艺', showNav: true, navType: 'logo', footer: 'default'},
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      meta: {title: '爱艺', showNav: true, navType: 'logo', footer: 'default'},
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      meta: {title: '登录注册页-爱艺', showNav: false, navType: '', footer: 'none'},
      component: Login
    },
    {
      path: '/buy',
      name: 'buy',
      meta: {title: '原创艺术-爱艺', showNav: true, navType: 'buy', footer: 'none'},
      component: Buy
    },
    {
      path: '/artworks/:id',
      name: 'artworks',
      meta: {title: '原创艺术-爱艺', showNav: true, navType: 'buy', footer: 'none'},
      component: Artworks
    },
    {
      path: '/artist/:id',
      name: 'artist',
      meta: {title: '艺术家-爱艺', showNav: false, navType: '', footer: 'none'},
      component: Artist
    },
    {
      path: '/solicitation',
      name: 'solicitation',
      meta: {title: '艺术家作品征集-爱艺', showNav: true, navType: '', footer: 'default'},
      component: Solicitation
    },
    {
      path: '/shopping/cart',
      name: 'cart',
      meta: {title: '购物车-爱艺', showNav: true, navType: '', footer: 'none'},
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      meta: {title: '订单-爱艺', showNav: true, navType: '', footer: 'default'},
      component: OrderPay
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      meta: {title: '订单-爱艺', showNav: true, navType: '', footer: 'default'},
      component: OrderDetail
    },
    {
      path: '/makeArt',
      name: 'makeArt',
      meta: {title: '美物-爱艺', showNav: true, navType: 'makeArt', footer: 'default'},
      component: MakeArt
    },
    {
      path: '/broker',
      name: 'broker',
      meta: {title: '经纪人专享-爱艺', showNav: true, navType: 'broker', footer: 'default'},
      component: Broker
    },
    {
      path: '/user/userWish',
      name: 'userWish',
      meta: {title: '我的珍藏-爱艺', showNav: true, navType: 'userWish', footer: 'simple'},
      component: UserWish
    },
    {
      path: '/user/userCollect',
      name: 'userCollect',
      meta: {title: '我的珍藏-爱艺', showNav: true, navType: 'userWish', footer: 'simple'},
      component: UserCollect
    },
    {
      path: '/user/userHistory',
      name: 'userHistory',
      meta: {title: '我的珍藏-爱艺', showNav: true, navType: 'userWish', footer: 'simple'},
      component: UserHistory
    },
    {
      path: '/user/userCenter',
      name: 'userCenter',
      meta: {title: '会员中心-爱艺', showNav: true, navType: '', footer: 'default'},
      component: UserCenter
    },
    {
      path: '/user/userOrder',
      name: 'userOrder',
      meta: {title: '我的订单-爱艺', showNav: true, navType: '', footer: 'default'},
      component: UserOrder
    },
    {
      path: '/discovery/index',
      name: 'discovery',
      meta: {title: '发现-爱艺', showNav: true, navType: 'discovery', footer: 'simple'},
      component: DiscoveryIndex
    },
    {
      path: '/discovery/detail/:id',
      name: 'discoveryDetail',
      meta: {title: '发现-爱艺', showNav: true, navType: 'discovery', footer: 'simple'},
      component: DiscoveryDetail
    }
  ]
})
