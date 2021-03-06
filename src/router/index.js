import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MainLayout from '../layout/MainLayout.vue'

/**@type {import('vue-router').RouteRecordRaw[]} */
const routes = [
  { 
    path: '/', component: MainLayout, children: [
      { path: '', redirect: { name: 'Browse' } },
      { path: 'browse', name: 'Browse', component: Home },
      { path: 'about', name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  { 
    path: '/dashboard', name: 'Dashboard', 
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
