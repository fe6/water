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
// 初始化 全局页面切换进度条
water.WLoadbar.init();

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // 开启 全局页面切换进度条
  water.WLoadbar.start();
  next();
});

router.afterEach(() => {
  // 关闭 全局页面切换进度条
  water.WLoadbar.finish();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App);
  },
});
