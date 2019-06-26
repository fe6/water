import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/select/base';

const base: ApiEntity = {
  title: '加载中',
  desc: '添加 <code>loading</code> 属性即可。',
  code: codeCommon({ attr: ':value="更多" loading' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    props: {
      loading: context.props.data.loading,
      before: context.props.data.before,
    },
    attr: 'loadingValue',
  }),
};

export default base;
