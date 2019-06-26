import { ApiEntity } from '@/views/entity/demoentity';
import Select from '@/components/select/Select.vue';
import Option from '@/components/select/Option.vue';

export interface DataEntity {
  value: string;
  label: string;
  loading: boolean;
  disabled?: boolean;
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
  props?: PropEntity;
}

export const defaultDatas = [
  {
    value: 'Apple',
    label: '苹果',
    disabled: true,
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
export const codeCommon = ({ attr }: CodeCommonParamsEntity = {}): string => `<w-select${attr ? ` ${attr}` : ''}>${defaultDatas.reduce((acc: string, data: DataEntity, dataIndex: number) => `${acc}\n  <w-option :label="${data.label}" :value="${data.value}" :key="${dataIndex}"></w-option>`, '')}\n</w-select>`;
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
    [h(Select, {
      props: {
        value,
        ...params.props,
      },
      on: {
        change(ctx: any) {
          context.props.changeHandle({
            attr: 'slotValue',
            value: ctx.value,
          });
        },
      },
    }, [
      datas.map((data: DataEntity, dataIndex: number) => h(Option, {
        props: {
          value: data.value,
          label: data.label,
          disabled: data.disabled,
        },
        key: dataIndex,
      })),
    ])],
  );
};

const base: ApiEntity = {
  title: 'slot 用法',
  desc: '下拉内容可以通过默认内容自行定义。<code>Option</code> 组件的 <code>value</code> 必须传。 <code>label</code> 是选中的参照。',
  code: codeCommon({ attr: 'value="苹果"' }),
  render: renderCommon,
};

export default base;
