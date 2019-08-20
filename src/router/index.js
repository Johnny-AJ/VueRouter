// 1引入vue
import Vue from 'vue'
// 2引入vue-router
import VueRouter from 'vue-router'
// 6引入组件
import index from '@/components/index.vue'
import product from '@/components/product.vue'
import qwe from '@/components/qwe.vue'
import asd from '@/components/asd.vue'
import zxc from '@/components/zxc.vue'
// 3使用use
Vue.use(VueRouter)
// 4创建路由对象,实现路由和组件的映射
const router = new VueRouter({
  routes: [
    {
      name: 'router',
      path: '/',
      redirect: { name: 'index' }
    },
    {
      name: 'index',
      path: '/index',
      component: index
    },
    {
      name: 'product',
      path: '/product/:id',
      component: product,
      children: [
        {
          name: 'qwe',
          path: 'qwe',
          component: qwe
        },
        {
          name: 'asd',
          path: 'asd',
          component: asd
        }, {
          name: 'zxc',
          path: 'zxc',
          component: zxc
        }
      ]
    }
  ]
})

export default router
