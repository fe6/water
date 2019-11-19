import { ApiEntity } from '@/views/entity/demoentity';
import Affix from '@/components/affix/src/Affix.vue';
import Button from '@/components/button/src/Button.vue';

interface PropEntity {
  offsetTop?: number;
}

interface RenderCommonParamsEntity {
  defaultText?: string;
  props?: PropEntity;
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
  `<w-affix${attr ? ` ${attr}` : ''}${content ? '' : ' /'}>${
    content ? `\n  <button>${content}</button>\n</w-affix>` : ''
  }`;
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (
  h: Function,
  aaa: any,
  params: RenderCommonParamsEntity
) =>
  h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(
        'div',
        {
          style: 'height: 30px',
        },
        [
          h(
            Affix,
            {
              props: {
                ...params.props,
              },
            },
            [h(Button, {}, params.defaultText || 'Affix')]
          ),
        ]
      ),
    ]
  );

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({ content: 'Affix' }),
  render: renderCommon,
};

export default base;
