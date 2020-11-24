import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import CreateIssueComponent from '../components/issues/CreateIssueComponent.vue'
import IndexIssueComponent from '../components/issues/IndexIssueComponent.vue'

let address = process.env.VUE_APP_ISSUEADDRESS || 'localhost';
let port = process.env.VUE_APP_PORT || '4000';

Vue.use(VueRouter)
Vue.prototype.$proxy = `http://${address}:${port}`;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Project/:id',
    name: 'Project',
    component: Project
  },
  {
    name: 'createIssue',
    path: '/Project/:id/create-issue',
    component: CreateIssueComponent
  },
  {
    name: 'issues',
    path:'/Project/:id/issues',
    component: IndexIssueComponent
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
    path:'/tasks',
    name:'tasks',
    component : ()=>import('../components/tasks/IndexTaskComponent.vue')
  },
  {
    path:'/tasks/:id',
    name:'task',
    component : ()=>import('../components/tasks/TaskComponent.vue')
  },
  {
    path:'/create-task',
    name:'createTask',
    component : ()=>import('../components/tasks/CreateTaskComponent.vue')
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
