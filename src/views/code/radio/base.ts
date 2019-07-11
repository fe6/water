import { ApiEntity } from '@/views/entity/demoentity';
import Radio from '@/components/radio/Radio.vue';

export interface DataEntity {
  value: string;
  label: string;
  loading: boolean;
}

interface PropEntity {
  disabled?: boolean;
  checkColor?: string;
  hoverColor?: string;
  indeterminate?: boolean;
  value?: string;
  before?: Function;
}

interface RenderCommonParamsEntity {
  datas?: DataEntity[]; // 如果为 true 就用传进来的数据
  attr?: string;
  props?: PropEntity;
}

export const defaultDatas = [
  {
    value: 'Apple',
    label: '苹果',
    loading: false,
  },
  {
    value: 'Pear',
    label: '鸭梨',
    loading: false,
  },
  {
    value: 'more',
    label: '更多',
    loading: false,
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
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string => defaultDatas.reduce((acc: string, data: DataEntity, index: number) => `${acc}<w-radio${attr ? ` ${attr}` : ''} :label="${data.label}">${data.value}</w-radio>${index < defaultDatas.length - 1 ? '\n' : ''}`, '');
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (
  h: Function,
  context: any,
  params: RenderCommonParamsEntity = { props: {} },
) => {
  const { value } = context.props.data;
  const datas = params.datas || defaultDatas;
  return h(
    'section',
    {
      class: 'demo-demo',
    },
    datas.map((data: DataEntity) => h(Radio,
      {
        props: {
          label: data.label,
          value,
          loading: data.loading,
          ...params.props,
        },
        on: {
          change(changeParams: any) {
            context.props.changeHandle({
              attr: params.attr || 'baseValue',
              value: changeParams.value,
            });
          },
        },
      }, data.value)),
  );
};

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({ attr: 'value="苹果"' }),
  render: renderCommon,
};

export default base;
