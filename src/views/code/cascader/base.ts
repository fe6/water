import { ApiEntity, CodeCommonParamsEntity } from '@/views/entity/demoentity';

export const defaultDatas = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 453400,
      disabled: true,
    }, {
      value: 'zhonghuamen',
      label: 'Zhong',
      code: 900000,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  id: 2,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      code: 900000,
    }, {
      value: 'xihu2',
      label: 'West1 Lake',
      code: 100102,
    }],
  }, {
    value: 'xihu11',
    label: 'West3 Lake',
    code: 300392,
  }],
}, {
  value: 'beijing',
  label: 'Beijing',
  code: 100000,
}, {
  value: 'zhejiang',
  label: 'Zhejiang',
  disabled: true,
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 453400,
    }],
  }],
}];

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string => `<w-cascader${attr ? ` ${attr}` : ''} :options="defaultDatas"></w-cascader>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  js: `
  {
    data() {
      return {
        defaultDatas: ${JSON.stringify(defaultDatas)}
      };
    },
  }
`,
};

export default base;
