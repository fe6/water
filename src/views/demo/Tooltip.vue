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
        <OnlineReview
          :temCode="base.code"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="modal.code"
          :jsCode="modal.js"
          :title="modal.title"
          :desc="modal.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="diy.code"
          :title="diy.title"
          :desc="diy.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="pos.code"
          :title="pos.title"
          :desc="pos.desc"
        ></OnlineReview>
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
import OnlineReview from '@/views/components/OnlineReview.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/tooltip/base';
import diy from '@/views/code/tooltip/diy';
import modal from '@/views/code/tooltip/modal';
import pos from '@/views/code/tooltip/pos';
import { props, methods } from '@/views/api/tooltip';
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
export default class TooltipView extends Vue {
  Tooltip: string = TITLE.Tooltip;

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
