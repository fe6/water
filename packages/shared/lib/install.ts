/** @format */

// import { VueConstructor } from 'vue';

export const installVueComponent = (
  target: any,
  name: string,
  prefix: string = 'w-',
): any => {
  target.install = (Vue: any): void => {
    Vue.component(`${prefix}${name}`, target);
  };

  return target;
};

export const install = (Vue: any, components: any): void => {
  if (!(install as any).installed) {
    Object.keys(components).forEach((cptKey): void => {
      const cpt = (components as any)[cptKey];
      Vue.component(cptKey, cpt);
    });
  }
};
