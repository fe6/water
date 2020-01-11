/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '受控',
  desc: '设置 <code>v-modal</code> 即可。',
  code: `<w-tooltip content="文字提示" v-model="tooltipStatus" placement="rightTop">
  <span>鼠标移入时将显示 Tooltip 。</span>
</w-tooltip>
<br />
<br />
<w-button @click="tooltipStatus = !tooltipStatus">{{tooltipStatus ? '隐藏' : '显示'}}</w-button>`,
  js: `{
  data() {
    return {
      tooltipStatus: false,
    };
  },
}`,
};

export default base;
