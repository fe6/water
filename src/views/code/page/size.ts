import { ApiEntity } from '@/views/entity/demoentity';
import Page from '@/components/page/Page.vue';
import PageJump from '@/components/page/PageJump.vue';

interface PropEntity {
  total?: number;
}

interface RenderCommonParamsEntity {
  noLayout?: boolean; // 没有 上面的架子
  demoClassName?: string | object | any[];
  defaultText?: string;
  props?: PropEntity;
  render?: Function;
}

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-page :total="100"></w-page>
<w-page size="small" :total="100"></w-page>`;

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

export interface CodeCommonParamsEntity {
  attr?: string;
  content?: string;
}
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (
  h: Function,
  params: RenderCommonParamsEntity = { props: {} },
) => h(
  'section',
  {
    class: 'demo-demo',
  },
  [h(
    'div',
    {
      class: params.demoClassName,
    }, [
      h(Page, {
        class: 'page-inline',
        props: {
          total: 100,
        },
      }, ''),
      h(PageJump, {
      }),
      h('br'),
      h('br'),
      h(Page, {
        class: 'page-inline',
        props: {
          total: 100,
          size: 'small',
        },
      }, ''),
      h(PageJump, {
        props: {
          size: 'small',
        },
      }),
    ],
  )],
);

const base: ApiEntity = {
  title: '大小',
  desc: '设置 <code>size</code> 即可。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
