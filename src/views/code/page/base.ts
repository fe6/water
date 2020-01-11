/** @format */

import { ApiEntity } from '@/views/entity/demoentity';
import Page from '@/components/page/src/Page.vue';

interface PropEntity {
  total?: number;
  showTotal?: any;
  simple?: boolean;
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

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string =>
  `<w-page${attr ? ` ${attr}></w-page>` : ' />'}`;
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (h: Function, params: RenderCommonParamsEntity) =>
  h(
    'section',
    {
      class: params.noLayout ? '' : 'demo-demo',
    },
    [
      h(
        'div',
        {
          class: params.demoClassName,
        },
        [
          h(
            Page,
            {
              props: {
                ...params.props,
              },
            },
            '',
          ),
        ],
      ),
    ],
  );

const base: ApiEntity = {
  title: '基本使用',
  desc: '基础分页。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
