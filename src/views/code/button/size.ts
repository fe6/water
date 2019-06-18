import { upperFirst } from 'lodash/string';
import Button from '@/components/button/Button.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import getTagName from '@/views/common/getTagName';

const sizes = ['small', '', 'large'];

const base: ApiEntity = {
  title: '按钮尺寸',
  desc: '按钮分大中小三种尺寸。通过属性 <code>size</code> 进行设置，可选值有 <code>large</code> 或 <code>small</code> 。',
  code: sizes.reduce((acc: string, size: string, index: number) => `${acc}<${getTagName(Button.name)} class="button" size="${size}">${upperFirst(size) || 'Default'}</${getTagName(Button.name)}>${index < sizes.length - 1 ? '\n' : ''}`, ''),
  render: (h: Function) => h('section', {
    class: 'demo-demo',
  }, sizes.map((size: string) => h(Button, {
    class: 'button',
    props: {
      size,
    },
  }, upperFirst(size) || 'Default'))),
};

export default base;
