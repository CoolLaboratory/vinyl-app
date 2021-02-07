import Home from '../views/Home.vue'
import MainLayout from '../layout/MainLayout.vue'

/** @type {Array<import('vue-router').RouteRecordRaw>} routes */
const routes = [
  { path: '/', component: MainLayout, children: [
      { path: '', redirect: { name: 'Browse' } },
      { path: 'browse', name: 'Browse', component: Home },
      { path: 'my-profile', name: 'Profile', meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
      },
      { path: 'about', name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  { path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '../layout/AuthLayout.vue'),
    children: [
      { path: '', redirect: { name: 'SignIn' } },
      { path: 'sign-in', name: 'SignIn', component: () => import(/* webpackChunkName: "auth" */ '../views/auth/Login.vue') },
      { path: 'sign-up', name: 'SignUp', component: () => import(/* webpackChunkName: "auth" */ '../views/auth/Register.vue') },
    ]
  },
  { path: '/dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../layout/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue')
      },
      {
        path: 'users',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Users.vue')
      }
    ]
  }
]

export default routes
