import { ApiEntity } from '@/views/entity/demoentity';
import Cascader from '@/components/cascader/Cascader.vue';

export interface DataEntity {
  value: string;
  label: string;
  loading?: boolean;
  children?: DataEntity[];
}

interface PropEntity {
  disabled?: boolean;
  mode?: string;
  value?: string;
  changeOnSelect?: boolean;
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

export const defaultDatas = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 453400,
      disabled: true,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      code: 900000,
    }, {
      value: 'xihu2',
      label: 'West1 Lake',
      code: 100102,
    }],
  }, {
    value: 'xihu11',
    label: 'West3 Lake',
    code: 300392,
  }],
}, {
  value: 'beijing',
  label: 'Beijing',
  code: 100000,
}, {
  value: 'zhejiang',
  label: 'Zhejiang',
  disabled: true,
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 453400,
    }],
  }],
}];

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
export const codeCommon = ({ datas = defaultDatas }: CodeCommonParamsEntity = {}): string => `<w-cascader size="small" :options="${datas.map(data => JSON.stringify(data))}"></w-cascader>
<w-cascader :options="${datas.map(data => JSON.stringify(data))}"></w-cascader>
<w-cascader size="large" :options="${datas.map(data => JSON.stringify(data))}"></w-cascader>`;
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
    attr: 'sizeValue',
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
    [
      h(Cascader, {
        props: {
          value,
          placeholder: '请选择',
          options: datas,
          size: 'small',
        },
        on: {
          change(ctx: any) {
            context.props.changeHandle({
              attr: params.attr,
              value: ctx.value,
            });
          },
        },
      }),
      h('br'),
      h(Cascader, {
        props: {
          value,
          placeholder: '请选择',
          options: datas,
        },
        on: {
          change(ctx: any) {
            context.props.changeHandle({
              attr: params.attr,
              value: ctx.value,
            });
          },
        },
      }),
      h('br'),
      h(Cascader, {
        props: {
          value,
          placeholder: '请选择',
          options: datas,
          size: 'large',
        },
        on: {
          change(ctx: any) {
            context.props.changeHandle({
              attr: params.attr,
              value: ctx.value,
            });
          },
        },
      }),
    ],
  );
};

const base: ApiEntity = {
  title: '三种大小',
  desc: '我们为 <Cascader /> 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 24px。',
  code: codeCommon({ attr: ':value="[]"' }),
  render: renderCommon,
};

export default base;
