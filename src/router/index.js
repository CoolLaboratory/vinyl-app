import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

/**@param {{ auth: import('@/main').firebaseAuth }} */
export const makeVueRouter = ({auth}) => {
  console.log('makeVueRouter');


  /**@type {import('vue-router').RouterOptions}  routerOptions*/
  const routerOptions = {
    history: createWebHistory(process.env.BASE_URL),
    routes
  }

  const router = createRouter(routerOptions)

  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      console.log('router:globalGuard');
      if (!auth.currentUser) {
        next({ name: 'SignIn', query: { redirect: encodeURI(to.fullPath) } })
      } else { next() }
    } else next()
  }) 
  
  return router
}
