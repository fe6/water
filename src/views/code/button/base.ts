import { upperFirst } from 'lodash/string';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

interface PropEntity {
  ghost?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

interface RenderCommonParamsEntity {
  noLayout?: boolean; // 没有 上面的架子
  demoClassName?: string | object | any[];
  defaultText?: string;
  props?: PropEntity;
  render?: Function;
}

export interface CodeCommonParamsEntity {
  attr?: string;
  content?: string;
}

export interface RenderReturnEntity {
  type: string;
  typeValue: string;
}

const types = ['', 'info', 'border', 'dashed', 'danger'];

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr, content }: CodeCommonParamsEntity = {}): string => types.reduce(
  (acc: string, type: string, index: number) => `${acc}<${getTagName(Button.name)} class="button"${attr ? ` ${attr}` : ''} type="${type}">${content || (upperFirst(type) || 'Default')}</${getTagName(Button.name)}>${index < types.length - 1 ? '\n' : ''}`,
  '',
);

/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (h: Function, params: RenderCommonParamsEntity) => h(
  'section',
  {
    class: params.noLayout ? '' : 'demo-demo',
  },
  [h(
    'div',
    {
      class: params.demoClassName,
    }, types.map((type: string) => h(
      Button,
      {
        class: 'button',
        props: {
          type,
          ...params.props,
        },
      },
      [params.render ? params.render(h, { type, typeValue: upperFirst(type) }) : (upperFirst(type) || params.defaultText || 'Default')],
    )),
  )],
);

const base: ApiEntity = {
  title: '按钮类型',
  desc: '按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
