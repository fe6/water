import { ApiEntity } from '@/views/entity/demoentity';
import Select from '@/components/select/Select.vue';
import { isFunction } from '@/helper/type';

export interface DataEntity {
  value: string;
  label: string;
  loading: boolean;
  disabled?: boolean;
}

interface PropEntity {
  disabled?: boolean;
  mode?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  before?: Function;
  search?: boolean;
  loading?: boolean;
}

interface RenderCommonParamsEntity {
  datas?: DataEntity[]; // 如果为 true 就用传进来的数据
  props?: PropEntity;
  attr: string,
  render?: Function;
}

export const defaultDatas = [
  {
    value: 'Apple',
    label: '苹果',
    loading: false,
    disabled: true,
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
  datas?: DataEntity[];
}
/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr, datas = defaultDatas, content = '' }: CodeCommonParamsEntity = {}): string => `<w-select${attr ? ` ${attr}` : ''} :options="${datas.map(data => JSON.stringify(data))}">${content}</w-select>`;
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
    render: () => {},
  },
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
        placeholder: '请选择',
        options: datas,
        ...params.props,
      },
      on: {
        change(ctx: any) {
          context.props.change({
            attr: params.attr,
            value: ctx.value,
          });
        },
      },
    }, [
      isFunction(params.render) ? (params.render as Function)(h, datas) : '1',
    ])],
  );
};

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({ attr: 'value="更多"' }),
  render: renderCommon,
};

export default base;
