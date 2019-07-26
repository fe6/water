import { upperFirst } from 'lodash/string';
import { ApiEntity } from '@/views/entity/demoentity';

const sizes = ['small', '', 'large'];

const base: ApiEntity = {
  title: '按钮尺寸',
  desc: '按钮分大中小三种尺寸。通过属性 <code>size</code> 进行设置，可选值有 <code>large</code> 或 <code>small</code> 。',
  code: sizes.reduce((acc: string, size: string, index: number) => `${acc}<w-button${size ? ` size="${size}"` : ''}>${upperFirst(size) || 'Default'}</w-button>${index < sizes.length - 1 ? '\n' : ''}`, ''),
};

export default base;
