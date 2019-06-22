<template>
  <div>
    <h1>{{ Modal }}</h1>
    <p>模态对话框。 <code>0.2.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>Modal</code> 在当前页面正中打开一个浮层，承载相应的操作。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          :data="{ value: baseStatus }"
          @change="change"
        ></WDemo>
        <WDemo
          :code="before.code"
          :render="before.render"
          :title="before.title"
          :desc="before.desc"
          :data="{ value: beforeStatus, loading: beforeLoading, before: beforeHandle }"
          @change="change"
        ></WDemo>
        <WDemo
          :code="content.code"
          :render="content.render"
          :title="content.title"
          :desc="content.desc"
          :data="{ value: contentStatus }"
          @change="change"
        ></WDemo>
        <WDemo
          :code="esc.code"
          :render="esc.render"
          :title="esc.title"
          :desc="esc.desc"
          :data="{ value: escStatus }"
          @change="change"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="diy.code"
          :render="diy.render"
          :title="diy.title"
          :desc="diy.desc"
          :data="{ value: diyStatus, textStatus: diyTextStatus }"
          @change="change"
        ></WDemo>
        <WDemo
          :code="style.code"
          :render="style.render"
          :title="style.title"
          :desc="style.desc"
          :data="{ value: styleStatus }"
          @change="change"
        ></WDemo>
        <WDemo
          :code="mask.code"
          :render="mask.render"
          :title="mask.title"
          :desc="mask.desc"
          :data="{ value: maskStatus }"
          @change="change"
        ></WDemo>
        <WDemo
          :code="click.code"
          :render="click.render"
          :title="click.title"
          :desc="click.desc"
          :data="{ value: clickStatus }"
          @change="change"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Method</h2>
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
import base from '@/views/code/modal/base';
import diy from '@/views/code/modal/diy';
import before from '@/views/code/modal/before';
import style from '@/views/code/modal/style';
import content from '@/views/code/modal/content';
import mask from '@/views/code/modal/mask';
import esc from '@/views/code/modal/esc';
import click from '@/views/code/modal/click';
import { props, methods } from '@/views/api/modal';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface ParamsEntity {
  attr: string;
  status: boolean;
}

@Component({
  components: {
    ApiTable,
    MethodTable,
    WRow,
    WCol,
    WDemo,
  },
})
export default class ModalView extends Vue {
  Modal: string = TITLE.Modal;

  base: ApiEntity = base;

  baseStatus: boolean = false;

  diy: ApiEntity = diy;

  diyStatus: boolean = false;

  diyTextStatus: boolean = false;

  before: ApiEntity = before;

  beforeStatus: boolean = false;

  beforeLoading: boolean = false;

  style: ApiEntity = style;

  styleStatus: boolean = false;

  content: ApiEntity = content;

  contentStatus: boolean = false;

  mask: ApiEntity = mask;

  maskStatus: boolean = false;

  esc: ApiEntity = esc;

  escStatus: boolean = false;

  click: ApiEntity = click;

  clickStatus: boolean = false;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  change({ attr, status }: ParamsEntity) {
    if (status) {
      this.open(attr);
    } else {
      this.close(attr);
    }
  }

  open(attr: string) {
    (this as any)[attr] = true;
  }

  close(attr: string) {
    (this as any)[attr] = false;
  }

  beforeHandle() {
    /* eslint-disable no-alert */
    this.beforeLoading = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.beforeLoading = false;
        if (window.confirm('你确定选择吗？')) {
          resolve();
        }
      }, 1000);
    });
  }
}
</script>
