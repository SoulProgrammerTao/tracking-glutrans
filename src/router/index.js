import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/GTS25110015',
      name: 'GTS25110015',
      component: () => import('../views/GTS25110015.vue')
    },
    // {
    //   path: '/GTS25110030',
    //   name: 'GTS25110030',
    //   component: () => import('../views/GTS25110030.vue')
    // }
  ],
})

export default router
