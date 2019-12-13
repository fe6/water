import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '基本使用',
  desc: '基本使用。',
  code: `<w-countdown v-model="value1" title="Countdown" />`,
  js: `
  {
    data() {
      return {
        value1: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      };
    },
  }
`,
};

export default base;
