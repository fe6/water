<template>
  <div>
    <h1>{{ Popconfirm }}</h1>
    <p>点击元素，弹出气泡式的确认框。</p>
    <h2>何时使用</h2>
    <p>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。交互形式更轻量。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
        <WDemo
          :code="modal.code"
          :render="modal.render"
          :title="modal.title"
          :desc="modal.desc"
          :data="{ value: modalValue }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="before.code"
          :render="before.render"
          :title="before.title"
          :desc="before.desc"
          :data="{ value: beforeValue, loading: beforeStatus, beforeHandle: beforeHandle }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="pos.code"
          :render="pos.render"
          :title="pos.title"
          :desc="pos.desc"
        ></WDemo>
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
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/popconfirm/base';
import modal from '@/views/code/popconfirm/modal';
import before from '@/views/code/popconfirm/before';
import pos from '@/views/code/popconfirm/pos';
import { props, methods } from '@/views/api/popconfirm';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
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
    MethodTable,
    WDemo,
  },
})
export default class PopconfirmView extends Vue {
  Popconfirm: string = TITLE.Popconfirm;

  base: ApiEntity = base;

  modal: ApiEntity = modal;

  modalValue: boolean = false;

  before: ApiEntity = before;

  beforeValue: boolean = true;

  beforeStatus: boolean = false;

  pos: ApiEntity = pos;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  change({ attr, value }: ParamsEntity) {
    (this as any)[attr] = value;
  }

  beforeHandle() {
    this.beforeStatus = true;
    return new Promise((resolve) => {
      /* eslint-disable no-alert */
      setTimeout(() => {
        this.beforeStatus = false;
        if (window.confirm('你确定选择吗？')) {
          resolve();
        }
      }, 1000);
    });
  }
}
</script>
