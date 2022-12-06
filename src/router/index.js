import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '國立科技高中-校團介紹網'
      }
    },
    {
      path: '/guitar',
      name: 'guitar',
      component: () => import('@/views/GuitarHistory.vue'),
      meta: {
        title: '吉他社社史'
      }
    },
    {
      path: '/guitar/events',
      name: 'guitar-events',
      component: () => import('@/views/GuitarEvents.vue'),
      meta: {
        title: '活動公告'
      }
    },
    {
      path: '/guitar/teach',
      name: 'guitar-teach',
      component: () => import('@/views/GuitarTeach.vue'),
      meta: {
        title: '教學內容'
      }
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import('@/views/NotReady.vue'),
      alias: ['/dance', '/baseball', '/soccer', '/badminton', '/scout'],
      meta: {
        title: 'NotReady'
      }
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '404'
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'all',
      redirect: '/404',
      meta: {
        title: '404'
      }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
