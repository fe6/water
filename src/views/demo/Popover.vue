<template>
  <div>
    <h1>{{ Popover }}</h1>
    <p>点击/鼠标移入元素，弹出气泡式的卡片浮层。 <code>0.10.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p>
    <p>和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :temCode="base.code"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="pos.code"
          :title="pos.title"
          :desc="pos.desc"
          iframeHeight="200px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="diy.code"
          :title="diy.title"
          :desc="diy.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="modal.code"
          :jsCode="modal.js"
          :title="modal.title"
          :desc="modal.desc"
          iframeHeight="200px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Popover API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Popover Method</h2>
    <MethodTable :data="methods"></MethodTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/popover/base';
import diy from '@/views/code/popover/diy';
import modal from '@/views/code/popover/modal';
import pos from '@/views/code/popover/pos';
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
    OnlineReview,
  },
})
export default class PopoverView extends Vue {
  Popover: string = TITLE.Popover;

  base: ApiEntity = base;

  diy: ApiEntity = diy;

  modal: ApiEntity = modal;

  pos: ApiEntity = pos;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;
}
</script>

<style lang="scss">
@import '~assets/style/button.scss';
</style>
