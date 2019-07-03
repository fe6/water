import { ApiEntity } from '@/views/entity/demoentity';
import { renderCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '动态加载选项',
  desc: '配合 <code>before</code> 属性。',
  code: '<w-cascader :loading="loadingStatus" :before="()=> new Promise((resolve) => {resolve();})" :options="[]"></w-cascader>',
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'loadingValue',
    datas: context.props.data.options,
    props: {
      loading: context.props.data.loading,
      before: context.props.data.beforeHandle,
    },
  }),
};

export default base;
