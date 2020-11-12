import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

let address = process.env.VUE_APP_ISSUEADDRESS || 'localhost';
let port = process.env.VUE_APP_PORT || '4000';

Vue.prototype.$proxy = `http://${address}:${port}`;

import HomeComponent from './components/HomeComponent.vue';
import IndexIssueComponent from './components/issues/IndexIssueComponent.vue'


const routes = [
  {
    name: 'home',
    path:'/', 
    component: HomeComponent
  },
  {
    name: 'issues',
    path:'/issues',
    component: IndexIssueComponent
  }
]


const router = new VueRouter({mode:'history', routes: routes});


new Vue(Vue.util.extend({router}, App)).$mount('#app');


