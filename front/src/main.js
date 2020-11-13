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

let address = process.env.VUE_APP_ISSUEADDRESS || 'localhost';
let port = process.env.VUE_APP_PORT || '4000';

Vue.prototype.$proxy = `http://${address}:${port}`;

import HomeComponent from './components/HomeComponent.vue';
import IndexIssueComponent from './components/issues/IndexIssueComponent.vue'
import CreateIssueComponent from './components/issues/CreateIssueComponent.vue'
import DifficultyManagement from './components/issues/DifficultyManagement.vue'
import IndexSprintComponent from './components/sprints/IndexSprintComponent.vue';


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
      name: 'manage-difficulty',
      path: '/manage-difficulty',
      component: DifficultyManagement
  },
]


const router = new VueRouter({mode:'history', routes: routes});


new Vue(Vue.util.extend({router}, App)).$mount('#app');


