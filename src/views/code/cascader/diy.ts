import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/cascader/base';

const base: ApiEntity = {
  title: '默认值',
  desc: '切换按钮和结果分开。',
  code: codeCommon({ attr: ':value="[\'zhejiang\', \'hangzhou\', \'xihu\']"' }),
  render: (h: Function, context: any) => renderCommon(h, context, {
    attr: 'diyValue',
    render: (createElement: Function) => {
      const { value } = context.props.data;
      return createElement('div', [
        createElement('span', {
          style: {
            paddingRight: '16px',
          },
        }, [value.length > 0 ? value.join(',') : '暂未选择']),
        createElement('a', {
          class: 'link',
        }, '选择城市'),
      ]);
    },
  }),
};

export default base;
