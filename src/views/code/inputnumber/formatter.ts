
import { ApiEntity } from '@/views/entity/demoentity';
import InputNumber from '@/components/inputnumber/InputNumber.vue';

interface PropEntity {
  disabled?: boolean;
  readonly?: boolean;
  value?: number;
  step?: number;
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
          formatter: (val: number | string) => `$ ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          parser: (val: number | string) => String(val).replace(/\$\s?|(,*)/g, ''),
        },
        style: {
          display: 'block',
          width: '100%',
        },
        on: {
          change(changeParams: any) {
            context.props.changeHandle({
              attr: 'formatterValue',
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
  desc: '通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。',
  code: codeCommon({
    attr: ':formatter="val => \'$\'+ val" :parser="val=> String(val).replace(/\\$\\s?/g, \'\')"',
  }),
  render: renderCommon,
};

export default base;
