import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/switch/base';

const base: ApiEntity = {
  title: '加载状态',
  desc: '设置 <code>before</code> 属性即可',
  code: codeCommon({ attr: ':loading :value="false" :before="()=> new Promise((resolve) => {resolve();})"' }),
  render: (h: Function, context: any) => {
    const { beforeHandle, value, loading } = context.props.data;
    return renderCommon(h, {
      props: {
        value,
        loading,
        before: beforeHandle,
      },
    });
  },
};

export default base;
