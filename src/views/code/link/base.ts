/** @format */

import Link from '@/components/link/src/Link.vue';
import { ApiEntity } from '@/views/entity/demoentity';

interface PropEntity {
  to?: object;
  href?: string;
  target?: string;
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

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({
  attr,
  content,
}: CodeCommonParamsEntity = {}): string =>
  `<w-link${attr ? ` ${attr}` : ''}>${content}</w-link>`;

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
            Link,
            {
              props: {
                ...params.props,
              },
            },
            [params.render ? params.render(h) : params.defaultText],
          ),
        ],
      ),
    ],
  );

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: codeCommon({ content: '这个超链没有链接' }),
  render: (h: Function) =>
    renderCommon(h, {
      defaultText: '这个超链没有链接',
    }),
};

export default base;
