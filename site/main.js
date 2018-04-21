import Vue from 'vue';

import App from './App';
import router from './routers';
import Http from './apis';

// import water from '../dist/water.min';
import water from '../water/water';
import '../water/water.scss';

Vue.config.productionTip = false;

Vue.use(Http);
Vue.use(water);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
