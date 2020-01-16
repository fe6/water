/** @format */

import Vue from 'vue';
import Water from '@fe6/water';

import App from './App.vue';
import router from './routers';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Water);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
