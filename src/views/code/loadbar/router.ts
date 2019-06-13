export default `// 部分代码省略
import Water from 'water';
Vue.use(Water);

router.beforeEach((to, from, next) => {
    Water.LoadingBar.start();
    next();
});

router.afterEach(route => {
    Water.LoadingBar.finish();
});`;
