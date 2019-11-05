import { ApiEntity } from '@/views/entity/demoentity';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-progress v-model="value" :color="customColor" style="margin-bottom: 8px"></w-progress>
<w-progress v-model="value" :color="customColorMethod" style="margin-bottom: 8px"></w-progress>
<w-progress v-model="value" :color="customColors" style="margin-bottom: 8px"></w-progress>
<div>
  <w-progress v-model="value" type="circle" :color="customColor" :width="60" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
  <w-progress v-model="value" type="circle" :color="customColorMethod" :width="60" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
  <w-progress v-model="value" type="circle" :color="customColors" :width="60" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
  <w-progress v-model="value" type="dashboard" :color="customColor" :width="60" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
  <w-progress v-model="value" type="dashboard" :color="customColorMethod" :width="60" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
  <w-progress v-model="value" type="dashboard" :color="customColors" :width="60" :stroke-width="3" style="margin-bottom: 8px"></w-progress>
</div>
<div>
  <w-button-group>
    <w-button @click="decrease">增加</w-button>
    <w-button @click="increase">减少</w-button>
  </w-button-group>
</div>`;

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      value: 30,
      customColor: '#409eff',
      customColors: [
        {color: '#f56c6c', value: 20},
        {color: '#e6a23c', value: 40},
        {color: '#5cb87a', value: 60},
        {color: '#1989fa', value: 80},
        {color: '#6f7ad3', value: 100}
      ],
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399';
      } else if (percentage < 70) {
        return '#e6a23c';
      } else {
        return '#67c23a';
      }
    },
    increase() {
      this.value += 10;
      if (this.value > 100) {
        this.value = 100;
      }
    },
    decrease() {
      this.value -= 10;
      if (this.value < 0) {
        this.value = 0;
      }
    }
  }
}`,
};

export default base;
