<template>
  <div>
    <h1>{{ Popconfirm }}</h1>
    <p>点击元素，弹出气泡式的确认框。</p>
    <h2>何时使用</h2>
    <p>
      目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。交互形式更轻量。
    </p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :tem-code="base.code"
          :js-code="base.js"
          :title="base.title"
          :desc="base.desc"
          iframe-height="200px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="modal.code"
          :js-code="modal.js"
          :title="modal.title"
          :desc="modal.desc"
          iframe-height="260px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :tem-code="before.code"
          :js-code="before.js"
          :title="before.title"
          :desc="before.desc"
          iframe-height="200px"
        ></OnlineReview>
        <OnlineReview
          :tem-code="pos.code"
          :js-code="pos.js"
          :title="pos.title"
          :desc="pos.desc"
          iframe-height="200px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Popconfirm API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Popconfirm Method</h2>
    <MethodTable :data="methods"></MethodTable>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ApiTable from '@/views/components/ApiTable.vue';
  import MethodTable from '@/views/components/MethodTable.vue';
  import WRow from '@/components/grid/src/Row.vue';
  import WCol from '@/components/grid/src/Col.vue';
  import OnlineReview from '@/views/components/OnlineReview.vue';
  import { ApiEntity } from '@/views/entity/demoentity';
  import base from '@/views/code/popconfirm/base';
  import modal from '@/views/code/popconfirm/modal';
  import before from '@/views/code/popconfirm/before';
  import pos from '@/views/code/popconfirm/pos';
  import { props, methods } from '@/views/api/popconfirm';
  import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      MethodTable,
      OnlineReview,
    },
  })
  export default class PopconfirmView extends Vue {
    Popconfirm: string = TITLE.Popconfirm;

    base: ApiEntity = base;

    modal: ApiEntity = modal;

    before: ApiEntity = before;

    pos: ApiEntity = pos;

    props: PropsEntity[] = props;

    methods: MethodsEntity[] = methods;
  }
</script>
