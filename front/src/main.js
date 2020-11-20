import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

let issuesAddress = process.env.VUE_APP_ISSUEADDRESS || 'localhost';
let tasksAddress = process.env.VUE_APP_TASKSADDRESS || 'localhost';
let testsAddress = process.env.VUE_APP_TESTSADDRESS || 'localhost';
let issuesPort = process.env.VUE_APP_ISSUEPORT || '4000';
let tasksPort = process.env.VUE_APP_TASKPORT || '5000';
let testsPort = process.env.VUE_APP_TESTPORT || '5001';

Vue.prototype.$proxyIssues = `http://${issuesAddress}:${issuesPort}`;
Vue.prototype.$proxyTasks = `http://${tasksAddress}:${tasksPort}`;
Vue.prototype.$proxyTests = `http://${testsAddress}:${testsPort}`;

import HomeComponent from './components/HomeComponent.vue';
import IndexIssueComponent from './components/issues/IndexIssueComponent.vue'
import CreateIssueComponent from './components/issues/CreateIssueComponent.vue'
import DifficultyManagement from './components/issues/DifficultyManagement.vue'
import IndexSprintComponent from './components/sprints/IndexSprintComponent.vue';
import IndexTaskComponent from './components/tasks/IndexTaskComponent.vue';
import CreateTaskComponent from './components/tasks/CreateTaskComponent.vue'
import IndexTestComponent from './components/tests/IndexTestComponent.vue'

const routes = [
  {
    name: 'home',
    path:'/', 
    component: HomeComponent
  },
  {
    name: 'sprint',
    path: '/sprint',
    component: IndexSprintComponent
  },
  {
    name: 'issues',
    path:'/issues',
    component: IndexIssueComponent
  },
  {
      name: 'createIssue',
      path: '/create-issue',
      component: CreateIssueComponent
  },
  {

    name: 'tasks',
    path: '/tasks',
    component: IndexTaskComponent
  },
  {
    name: 'createtasks',
    path: '/create-task',
    component: CreateTaskComponent
  },
  {
    name: 'manage-difficulty',
    path: '/manage-difficulty',
    component: DifficultyManagement
  },
  {
    name: 'tests',
    path: '/tests',
    component: IndexTestComponent
  },
]


const router = new VueRouter({mode:'history', routes: routes});


new Vue(Vue.util.extend({router}, App)).$mount('#app');


