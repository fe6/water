import Input from '@/components/input/Input.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const sizes = ['small', '', 'large'];

const base: ApiEntity = {
  title: '三种大小',
  desc: '我们为 <code>&lt;Input /&gt;</code> 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 24px。',
  code: sizes.reduce((acc: string, size: string, index: number) => `${acc}<${getTagName(Input.name)} placeholder="${size || 'default'} size"${size ? ` size="${size}"` : ''} />${index < sizes.length - 1 ? '\n' : ''}`, ''),
  render: (h: Function) => h(
    'section',
    {
      class: 'demo-demo',
    },
    sizes.map((size: string, index: number) => h(Input, {
      style: {
        marginBottom: index < sizes.length - 1 ? '16px' : 0,
      },
      props: {
        placeholder: `${size || 'default'} size`,
        size,
      },
    })),
  ),
};

export default base;
