import { ApiEntity } from '@/views/entity/demoentity';
import { codeCommon, renderCommon } from '@/views/code/breadcrumb/base';

const base: ApiEntity = {
  title: '分隔符自定义',
  desc: '设置 <code>separator</code> 属性即可，支持普通符号及 HTML 标签。',
  code: codeCommon({ attr: 'separator="<b class=\'breadcrumb-item\'>|</b>"', content: '活动易' }),
  render: (createElement: Function) => renderCommon(createElement, {
    defaultText: '活动易',
    props: {
      separator: '<b class="breadcrumb-item">|</b>',
    },
  }),
};

export default base;
