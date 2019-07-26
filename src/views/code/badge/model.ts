import { ApiEntity } from '@/views/entity/demoentity';
import { linkStyle } from './base';

const base: ApiEntity = {
  title: '动态',
  desc: '展示动态变化的效果。',
  code: `<w-badge v-model="badgeNumber" style="margin-right: 8px;"></w-badge>
<w-badge v-model="badgeNumber">
  <a href="javascript:;" style="${linkStyle}"></a>
</w-badge>
<br />
<br />
<w-button @click="jiaFn" size="small">加</w-button>
<w-button @click="shaoFn" size="small">减</w-button>`,
  js: `{
  data() {
    return {
      badgeNumber: 16,
    };
  },
  methods: {
    changeHandle(step) {
      this.badgeNumber += step;
    },
    jiaFn() {
      this.changeHandle(1);
    },
    shaoFn() {
      this.changeHandle(-1);
    },
  },
}`,
};

export default base;
