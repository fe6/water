import tag from 'water-helper-maps/out/maps/attrs/tag/tag.json';
import checkTag from 'water-helper-maps/out/maps/attrs/tag/check-tag.json';
import newTag from 'water-helper-maps/out/maps/attrs/tag/new-tag.json';
import getProps from '@/views/common/getprop';

export const props = getProps(tag);

export const methods = [
  {
    name: 'close',
    desc: '关闭触发的方法',
    return: '{Event对象}({ev})',
  },
];

export const checkTagProps = getProps(checkTag);

export const checkTagMethods = [];

export const newTagProps = getProps(newTag);

export const newTagMethods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{当前值}({ value })',
  },
];
