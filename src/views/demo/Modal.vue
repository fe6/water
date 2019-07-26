<template>
  <div>
    <h1>{{ Modal }}</h1>
    <p>模态对话框。 <code>0.2.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>Modal</code> 在当前页面正中打开一个浮层，承载相应的操作。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="24">
        <OnlineReview
          :temCode="base.code"
          :jsCode="base.js"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="before.code"
          :jsCode="before.js"
          :title="before.title"
          :desc="before.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="content.code"
          :jsCode="content.js"
          :title="content.title"
          :desc="content.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="esc.code"
          :jsCode="esc.js"
          :title="esc.title"
          :desc="esc.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="diy.code"
          :jsCode="diy.js"
          :title="diy.title"
          :desc="diy.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="style.code"
          :jsCode="style.js"
          :title="style.title"
          :desc="style.desc"
          iframeHeight="300px"
        ></OnlineReview>
        <OnlineReview
          :temCode="mask.code"
          :jsCode="mask.js"
          :title="mask.title"
          :desc="mask.desc"
          iframeHeight="300px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Modal API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Modal Method</h2>
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
import base from '@/views/code/modal/base';
import diy from '@/views/code/modal/diy';
import before from '@/views/code/modal/before';
import style from '@/views/code/modal/style';
import content from '@/views/code/modal/content';
import mask from '@/views/code/modal/mask';
import esc from '@/views/code/modal/esc';
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
    OnlineReview,
  },
})
export default class ModalView extends Vue {
  Modal: string = TITLE.Modal;

  base: ApiEntity = base;

  diy: ApiEntity = diy;

  before: ApiEntity = before;

  style: ApiEntity = style;

  content: ApiEntity = content;

  mask: ApiEntity = mask;

  esc: ApiEntity = esc;

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;
}
</script>
