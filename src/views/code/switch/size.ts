import { ApiEntity } from '@/views/entity/demoentity';
import WSwitch from '@/components/switch/Switch.vue';

interface PropEntity {
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
export const codeCommon = (): string => `<w-switch />
<w-switch size="small" />`;
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (h: Function, params: RenderCommonParamsEntity) => h(
  'section',
  {
    class: 'demo-demo',
  },
  [h(
    'div',
    {
      class: params.demoClassName,
    }, [
      h(WSwitch),
      h('br'),
      h('br'),
      h(WSwitch, {
        props: {
          size: 'small',
        },
      }),
    ],
  )],
);

const base: ApiEntity = {
  title: '两种大小',
  desc: '设置 <code>size</code> 属性即可',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
