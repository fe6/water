import Link from '@/components/link/Link.vue';
import Icon from '@/components/icon/Icon.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import { upperFirst } from 'lodash/string';

const sizes = ['', 'large'];

const base: ApiEntity = {
  title: '超链尺寸',
  desc: '超链分两种尺寸。通过属性 <code>size</code> 进行设置，可选值有 <code>large</code> 。',
  code: sizes.reduce((acc: string, size: string, index: number) => `${acc}<${Link.name} class="button" size="${size}">这是个超链 ${upperFirst(size) || 'Default'}</${Link.name}>${index < sizes.length - 1 ? '\n' : ''}`, ''),
  render: (h: Function) => h('section', {
    class: 'demo-demo',
  }, sizes.map((size: string) => h(Link, {
    style: {
      marginRight: '16px',
    },
    props: {
      size,
    },
  }, [
    h(Icon, {
      slot: 'icon',
    }),
    `这是个超链 ${upperFirst(size) || 'Default'}`,
  ]))),
};

export default base;
