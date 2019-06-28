import { ApiEntity } from '@/views/entity/demoentity';
import InputNumber from '@/components/inputnumber/InputNumber.vue';

interface PropEntity {
  disabled?: boolean;
  readonly?: boolean;
  animate?: boolean;
  value?: number;
  step?: number;
  precision?: number;
  min?: number;
  max?: number;
}

interface RenderCommonParamsEntity {
  props?: PropEntity;
  attr?: string,
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
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string => `<w-inputnumber${attr ? ` ${attr}` : ''} />`;
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (
  h: Function,
  context: any,
  params: RenderCommonParamsEntity = {
    props: {},
    attr: 'baseValue',
  },
) => {
  const { value } = context.props.data;
  return h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(InputNumber, {
        props: {
          value,
          ...params.props,
        },
        on: {
          change(changeParams: any) {
            context.props.changeHandle({
              attr: params.attr,
              value: changeParams.value,
            });
          },
        },
      }),
    ],
  );
};

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
