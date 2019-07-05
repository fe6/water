<template>
  <div>
    <h1>{{ Tooltip }}</h1>
    <p>简单的文字提示气泡框。 <code>0.8.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
      <li>可用来代替系统默认的 <code>title</code> 提示，提供一个按钮/文字/操作的文案解释。</li>
    </ul>
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
          :code="diy.code"
          :render="diy.render"
          :title="diy.title"
          :desc="diy.desc"
        ></WDemo>
        <WDemo
          :code="pos.code"
          :render="pos.render"
          :title="pos.title"
          :desc="pos.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Tooltip API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Tooltip Method</h2>
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
import base from '@/views/code/tooltip/base';
import diy from '@/views/code/tooltip/diy';
import modal from '@/views/code/tooltip/modal';
import pos from '@/views/code/tooltip/pos';
import { props, methods } from '@/views/api/tooltip';
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
export default class TooltipView extends Vue {
  Tooltip: string = TITLE.Tooltip;

  base: ApiEntity = base;

  diy: ApiEntity = diy;

  modal: ApiEntity = modal;

  modalValue: boolean = false;

  pos: ApiEntity = pos;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  change({ attr, value }: ParamsEntity) {
    (this as any)[attr] = value;
  }
}
</script>

<style lang="scss">
@import '~assets/style/button.scss';
</style>
