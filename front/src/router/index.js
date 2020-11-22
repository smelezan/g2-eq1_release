import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/tests',
    name:'Test',
    component : ()=>import('../components/tests/IndexTestComponent.vue')
  },
  {
    path:'/populate',
    name:'Populate',
    component : ()=>import('../components/HomeComponent.vue')
  },
  {
    path:'/managePriority',
    name:'managePriority',
    component: ()=>import('../components/issues/PriorityManagement.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
