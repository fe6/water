<template>
  <div>
    <!-- <WCalendar :showAge="false" :showYear="false" :showMonth="false" /> -->
    <WCalendar default-picker-value="1999-01-01" />
    <!-- <WCalendar type="month" /> -->
    <!-- <WCalendar type="year" /> -->
    <!-- <WCalendar type="age" :showAge="false" /> -->
    <!-- <WCalendar type="age" /> -->
    <!-- <WCalendar :pickerRender="pickerRender" /> -->
    <!-- <WCalendar>
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
            v-if="hasOwn(listData, dateItem.date)"
          >
            <WScroll class="demo-calendar-scroll" :edgeIsPreventDefault="false">
              <div
                class="demo-calendar-badge"
                v-for="(info, idx) in listData[dateItem.date]"
                :key="idx"
              >
                <WBadge :status="info.type" :text="info.content" />
              </div>
            </WScroll>
          </div>
        </div>
      </template>
    </WCalendar> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WCalendar from '@/components/calendar/src/Calendar.vue';
  import WBadge from '@/components/badge/src/Badge.vue';
  import WScroll from '@/components/scroll/src/Scroll.vue';
  import { hasOwn } from '@/helper/o';

  @Component({
    components: {
      WCalendar,
      WBadge,
      WScroll,
    },
  })
  export default class CalendarView extends Vue {
    date: string = '';

    hasOwn: Function = hasOwn;

    listData: any = {
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
    };
  }
</script>

<style lang="scss">
  @import '../../helper/config.scss';

  .demo-calendar {
    &-content {
      width: 100%;
      text-align: left;
    }

    &-scroll {
      height: 90px;
    }

    &-badge {
      @extend .ellipsis;

      color: $text-color;
    }
  }
</style>
