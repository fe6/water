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
export const codeCommon = (): string => `<w-page v-model="jumpValue" :total="100"></w-page>
<w-page-jump v-model="jumpValue"></w-page-jump>`;

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
  context: any,
  params: RenderCommonParamsEntity = { props: {} },
) => {
  const { value } = context.props.data;
  return h(
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
            value: Number(value),
            total: 100,
          },
        }, ''),
        h(PageJump, {
          on: {
            change(val: number) {
              context.props.changeHandle({
                attr: 'jumpNumber',
                value: Number(val),
              });
            },
          },
        }),
      ],
    )],
  );
};

const base: ApiEntity = {
  title: '跳转',
  desc: '快速跳转到某一页。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
