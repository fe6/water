import { upperFirst } from 'lodash/string';
import { ApiEntity } from '@/views/entity/demoentity';
import { IMAGE, ALT } from '@/views/common/constant';

const sizes = ['', 'large'];

const base: ApiEntity = {
  title: '超链尺寸',
  desc: '超链分两种尺寸。通过属性 <code>size</code> 进行设置，可选值有 <code>large</code> 。',
  code: sizes.reduce((acc: string, size: string, index: number) => `${acc}<w-link${size ? ` size="${size}"` : ''}>\n  <img slot="icon" src="${IMAGE}" alt="${ALT}" />这是个超链 ${upperFirst(size) || 'Default'}\n</w-link>${index < sizes.length - 1 ? '\n<br />\n' : ''}`, ''),
};

export default base;
