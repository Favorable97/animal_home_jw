import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/AppHome.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/ListProjects.vue')
  },
  {
    path: '/cats',
    name: 'cats',
    component: () => import('../components/CatsApp.vue')
  },
  {
    path: '/dogs',
    name: 'cats',
    component: () => import('../components/DogsApp.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../components/TeamProject.vue')
  },
  {
    path: '*',
    name: 'default',
    component: () => import('../components/AppHome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
