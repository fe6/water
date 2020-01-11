/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '自定义数值样式',
  desc: '添加 <code>value-style</code> 即可。',
  code: `<w-statistic title="Active" v-model="value1" :precision="1" value-style="color: #3f8600"  style="display:inline-block">
  <w-icon slot="prefix">
    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="arrow-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
  </w-icon>
  <template slot="suffix">%</template>
</w-statistic>
<w-statistic title="Idle" v-model="value2" :precision="1" value-style="color: #cf1322"  style="margin-left: 32px;display:inline-block">
  <w-icon slot="prefix">
    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="arrow-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path></svg>
  </w-icon>
  <template slot="suffix">%</template>
</w-statistic>`,
  js: `
  {
    data() {
      return {
        value1: 11.28,
        value2: 9.3,
      };
    },
  }
`,
};

export default base;
