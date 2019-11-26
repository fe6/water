<template>
  <div>
    <h1>{{ Calendar }}</h1>
    <p>按照日历形式展示数据的容器。 <code>0.19.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>
        当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持
        <code>月/年/年代/世纪</code> 切换。
      </li>
    </ul>
    <h2>代码演示</h2>
    <OnlineReview
      :tem-code="base.code"
      :js-code="base.js"
      :title="base.title"
      :desc="base.desc"
      iframe-height="940px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="type.code"
      :js-code="type.js"
      :title="type.title"
      :desc="type.desc"
      iframe-height="660px"
    ></OnlineReview>
    <OnlineReview
      :tem-code="slot.code"
      :js-code="slot.js"
      :title="slot.title"
      :desc="slot.desc"
      iframe-height="940px"
    ></OnlineReview>
    <h2>Calendar API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Change 方法返回的参数 API</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
    <h2>Calendar Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>Calendar Slot</h2>
    <ChangeTable :data="slotProps"></ChangeTable>
    <h2>Slot Scope 参数</h2>
    <MethodTable :data="slotMethods"></MethodTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import ChangeTable from '@/views/components/ChangeTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/calendar/base';
  import type from '@/views/code/calendar/type';
  import slot from '@/views/code/calendar/slot';
  import {
    props,
    methods,
    changeProps,
    slotMethods,
    slotProps,
  } from '@/views/api/calendar';
  import {
    PropsEntity,
    ChangePropsEntity,
    MethodsEntity,
    SlotMethodsEntity,
  } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  interface ParamsEntity {
    attr: string;
    value: string;
    ctx?: any;
  }

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      ChangeTable,
      MethodTable,
      OnlineReview,
    },
  })
  export default class CalendarView extends Vue {
    Calendar: string = TITLE.Calendar;

    base: ApiEntity = base;

    type: ApiEntity = type;

    slot: ApiEntity = slot;

    props: PropsEntity[] = props;

    changeProps: ChangePropsEntity[] = changeProps;

    methods: MethodsEntity[] = methods;

    slotProps: ChangePropsEntity[] = slotProps;

    slotMethods: SlotMethodsEntity[] = slotMethods;
  }
</script>
