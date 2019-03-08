import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/ProductList'
import Product from '@/components/Product'
import Cart from '@/components/cart'
import Admin from '@/components/admin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:sku',
      name: 'Product',
      component: Product
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },

  ]
})
