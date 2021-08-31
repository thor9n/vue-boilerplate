import Vue from 'vue'
import VueRouter from 'vue-router'
import EventBus from '@/misc/event-bus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "account" */ '../router/pages/Home.vue'),
    meta: {}
  },
//   {
//     path: '/account',
//     name: 'Account',
//     component: () => import(/* webpackChunkName: "account" */ '../router/pages/Account.vue'),
//     meta: {
//       requiresAuth: true
//     },
//     children: [
//       {
//         path: '',
//         redirect: 'general'
//       },
//       {
//         path: 'general',
//         component: () => import(/* webpackChunkName: "account" */ '@/components/Account/General'),
//       },
//     ]
//   },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/*
 * Router guards
 * 
 */
// 
// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters['auth/isLoggedIn']) {
//       next()
//       return
//     }
//     next({ name: 'Guest' })
//   } else if(to.matched.some(record => record.meta.redirectAuth)) {
//     if (!store.getters['auth/isLoggedIn']) {
//       next()
//       return
//     }
//     next({ name: 'Home' })
//   } else {
//     next()
//   }
// })

/*
 * Send Tracking Events
 * 
 */

router.beforeEach((to, from, next) => {
  EventBus.$emit('TRACK_PAGE', to)
  next()
})

export default router