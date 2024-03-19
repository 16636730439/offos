import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        // history模式需要通配所有路由，详见vue-router文档
        path: '/app/app1/:pathMatch(.*)*',
        name: 'app1',
        meta: {},
        component: () => import('@/components/SubContainer.vue')
      },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue'),
      children:[
        {
          path: '/info/index',
          name: '首页',
          component: () => import('../views/info/indexView.vue')
        },
        {
          path: '/info/zuo',
          name: '作品',
          component: () => import('../views/info/ZuoView.vue')
        },
        {
          path: '/info/su',
          name: '素材',
          component: () => import('../views/info/SuView.vue')
        },
        {
          path: '/info/mu',
          name: '模板',
          component: () => import('../views/info/MuView.vue')
        },
        {
          path: '/info/wjj',
          name: '文件夹',
          component: () => import('../views/info/WjjView.vue')
        },
        {
          path: '/info/hui',
          name: '回收站',
          component: () => import('../views/info/HuiView.vue')
        },
        {
          path: '/info/huo',
          name: '获客活码',
          component: () => import('../views/info/HuoView.vue')
        },
        {
          path: '/info/kehu',
          name: '客户群发',
          component: () => import('../views/info/KehuView.vue')
        },
        {
          path: '/info/pyq',
          name: '朋友圈转发',
          component: () => import('../views/info/PyqView.vue')
        },
        {
          path: '/info/leida',
          name: '智能雷达',
          component: () => import('../views/info/leidaView.vue')
        },
        {
          path: '/info/fenfa',
          name: '智能分发',
          component: () => import('../views/info/fenfaView.vue')
        },
        {
          path: '/info/quanyuan',
          name: '全员分发',
          component: () => import('../views/info/quanyuanView.vue')
        },
        {
          path: '/info/duanxing',
          name: '短信通知',
          component: () => import('../views/info/duanxingView.vue')
        },
        {
          path: '/info/shop',
          name: '商品管理',
          component: () => import('../views/info/shopView.vue')
        },
        {
          path: '/info/my',
          name: '个人主页',
          component: () => import('../views/info/myView.vue')
        },
        {
          path: '/info/qywkhgl',
          name: '企业微客户管理',
          component: () => import('../views/info/qywkhgl.vue')
        },
        {
          path: '/info/xskhgl',
          name: '线索客户管理',
          component: () => import('../views/info/xskhgl.vue')
        },
        {
          path: '/info/cygj',
          name: '创意工具',
          component: () => import('../views/info/cygj.vue')
        },
      ]
    }
  ]
})


export default router
