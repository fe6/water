/** @format */

import { ApiEntity } from '@/views/entity/demoentity';

const base: ApiEntity = {
  title: '通知事项日历',
  desc: '一个复杂的应用示例，用 scope slot 自定义。',
  code: `<w-calendar>
  <template
    v-slot:picker="{
      dateItem,
      dateIndex,
      dateWeekIndex,
      dateWeek,
      value,
      type,
      headerDate,
      pickerValue,
    }"
  >
    <div class="w-picker-date">
      <div class="w-calendar-date">
        {{ pickerValue }}
      </div>
      <div
        class="demo-calendar-content"
        style="width: 100%;text-align: left;"
        v-if="hasOwn(listData, dateItem.date)"
      >
        <w-scroll class="demo-calendar-scroll" :edge-is-prevent-default="false" style="height: 90px;">
          <div
            class="demo-calendar-badge"
            v-for="(info, idx) in listData[dateItem.date]"
            :key="idx"
            style="color: #333;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"
          >
            <w-badge :status="info.type" :text="info.content" />
          </div>
        </w-scroll>
      </div>
    </div>
  </template>
</w-calendar>`,
  js: `{
  data() {
    return {
      hasOwn: (item, attr) => Object.prototype.hasOwnProperty.call(item, attr),
      listData: {
        8: [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ],
        10: [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ],
        15: [
          { type: 'warning', content: 'This is warning event' },
          {
            type: 'success',
            content: 'This is very long usual event。。....',
          },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ],
      }
    };
  },
}`,
};

export default base;
