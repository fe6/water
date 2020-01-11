/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const sectionColors = [
  {
    color: '#eb2f96',
    loading: false,
  },
  {
    color: '#f5222d',
    loading: false,
  },
  {
    color: '#fa541c',
    loading: false,
  },
  {
    color: '#fa8c16',
    loading: false,
  },
];

const allColors = [
  {
    color: '#eb2f96',
    loading: false,
  },
  {
    color: '#f5222d',
    loading: false,
  },
  {
    color: '#fa8c16',
    loading: false,
  },
  {
    color: '#faad14',
    loading: false,
  },
];

const base: ApiEntity = {
  title: '多彩标签',
  desc:
    '添加 <code>color</code> 即可设置颜色，添加 <code>colorType</code> 即可设置渲染类型。',
  code: `<h4>All:</h4>
<w-tag v-for="(sColor, sColorIndex) in sectionColors" closable :color="sColor.color" :key="sColorIndex" @close="close1(sColorIndex)">标签</w-tag>
<h4>Section:</h4>
<w-tag v-for="(aColor, aColorIndex) in allColors" closable color-type="section" :color="aColor.color" :key="\`a\${aColorIndex}\`" @close="close2(aColorIndex)">标签</w-tag>`,
  js: `{
    data() {
      return {
        sectionColors: ${JSON.stringify(sectionColors)},
        allColors: ${JSON.stringify(allColors)},
      };
    },
    methods: {
      close1(aIndex) {
        const { color } = this.sectionColors[aIndex];
        this.sectionColors.splice(aIndex, 1, {
          color,
          loading: true,
        });
        setTimeout(() => {
          this.sectionColors.splice(aIndex, 1);
        }, 1000);
      },
      close2(aIndex) {
        const { color } = this.allColors[aIndex];
        this.allColors.splice(aIndex, 1, {
          color,
          loading: true,
        });
        setTimeout(() => {
          this.allColors.splice(aIndex, 1);
        }, 1000);
      },
    },
  }`,
};

export default base;
