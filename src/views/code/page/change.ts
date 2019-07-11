import { ApiEntity } from '@/views/entity/demoentity';
import Page from '@/components/page/Page.vue';
import Select from '@/components/select/Select.vue';

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

const selOption = [{
  value: '10 条 / 页',
  label: '10',
}, {
  value: '20 条 / 页',
  label: '20',
}, {
  value: '30 条 / 页',
  label: '30',
}, {
  value: '40 条 / 页',
  label: '40',
}];

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-page v-model="pageValue" :pageSize="pageSize" :total="100"></w-page>
<w-select v-model="pageValue" :options="[${selOption.map(data => JSON.stringify(data))}]"></w-select>`;

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
            pageSize: value,
            total: 100,
            ...params.props,
          },
        }, [params.render ? params.render(h) : '']),
        h(Select, {
          class: 'page-inline',
          props: {
            value: String(value),
            options: selOption,
          },
          on: {
            change(changeParams: any) {
              context.props.changeHandle({
                attr: 'changeSize',
                value: Number(changeParams.value),
              });
            },
          },
        }),
      ],
    )],
  );
};

const base: ApiEntity = {
  title: '改变',
  desc: '改变每页显示条目数。',
  code: codeCommon(),
  render: renderCommon,
};

export default base;
