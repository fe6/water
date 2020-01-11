/** @format */

// 挂载方法
import confirm from '@/components/modal/src/confirm';

const waterCpt = {};

// 动态组件管理
export const importCpts = () => {
  const rq = require.context('@/components', true, /index\.ts$/);
  rq.keys().forEach((key) => {
    const rqDef = rq(key).default;
    (waterCpt as any)[rqDef.waterName] = rqDef;
  });
};

importCpts();

const install = (Vue: any) => {
  if ((install as any).installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(key, (waterCpt as any)[key]);
  });

  if (!Vue.prototype.$WConfirm) {
    Object.defineProperties(Vue.prototype, {
      $WConfirm: {
        get() {
          return confirm;
        },
      },
    });
  }
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  version: '1.0.0',
  install,
  ...waterCpt,
};
