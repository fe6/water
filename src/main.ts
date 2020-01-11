/** @format */

import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';

// require styles
import 'codemirror/lib/codemirror.css';

import App from '@/App.vue';
import router from '@/routers';
import './registerServiceWorker';

Vue.use(VueCodemirror);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
