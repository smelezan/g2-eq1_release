
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';

import { BootstrapVue } from 'bootstrap-vue'
Vue.prototype.axios=axios
Vue.prototype.$proxyIssues = "http://localhost:4000";
Vue.prototype.$proxyTasks = "http://localhost:5000";
Vue.prototype.$proxyTests = "http://localhost:5001";
// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
