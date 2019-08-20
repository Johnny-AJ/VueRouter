// 1引入vue
import Vue from 'vue'
// 2引入vue-router
import VueRouter from 'vue-router'
// 6引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'
// 3使用use
Vue.use(VueRouter)
// 4创建路由对象,实现路由和组件的映射
const router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/index',
      component: index
    },
    {
      name: 'product',
      path: '/product',
      component: product
    }
  ]
})

export default router
