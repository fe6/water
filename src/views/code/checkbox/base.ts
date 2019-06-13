import { ApiEntity } from '@/views/entity/demoentity';
import Checkbox from '@/components/checkbox/Checkbox.vue';

export interface DataEntity {
  value: string;
  label: string;
}

interface PropEntity {
  disabled?: boolean;
  checkColor?: string;
  hoverColor?: string;
  indeterminate?: boolean;
  value?: string;
}

interface RenderCommonParamsEntity {
  defaultText?: string;
  props?: PropEntity;
}

export const myDatas = [
  {
    value: 'Apple',
    label: '苹果',
  },
  {
    value: 'Pear',
    label: '鸭梨',
  },
  {
    value: 'more',
    label: '更多',
  },
];

export interface CodeCommonParamsEntity {
  attr?: string;
  content?: string;
}
/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string => myDatas.reduce((acc: string, data: DataEntity, index: number) => `${acc}<${Checkbox.name}${attr ? ` ${attr}` : ''} :label="${data.label}">${data.value}</${Checkbox.name}>${index < myDatas.length - 1 ? '\n' : ''}`, '');
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (h: Function, params: RenderCommonParamsEntity) => h(
  'section',
  {
    class: 'demo-demo',
  },
  myDatas.map((data: DataEntity) => h(Checkbox,
    {
      props: {
        label: data.label,
        ...params.props,
      },
    }, data.value)),
);

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
