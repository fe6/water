<template>
  <div>
    <h1>{{ Button }}</h1>
    <p>按钮用于开始一个即时操作。</p>
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :temCode="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="loading.code"
          :render="loading.render"
          :title="loading.title"
          :desc="loading.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="ghost.code"
          :render="ghost.render"
          :title="ghost.title"
          :desc="ghost.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="icon.code"
          :render="icon.render"
          :title="icon.title"
          :desc="icon.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="disabled.code"
          :render="disabled.render"
          :title="disabled.title"
          :desc="disabled.desc"
        ></OnlineReview>
        <WDemo
          :code="group.code"
          :render="group.render"
          :title="group.title"
          :desc="group.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Button API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Button 点击事件( click )返回的参数 API</h2>
    <ChangeTable :data="clickProps"></ChangeTable>
    <h2>Button Method</h2>
    <MethodTable :data="methods"></MethodTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import ChangeTable from '@/views/components/ChangeTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/button/base';
import size from '@/views/code/button/size';
import loading from '@/views/code/button/loading';
import ghost from '@/views/code/button/ghost';
import icon from '@/views/code/button/icon';
import disabled from '@/views/code/button/disabled';
import group from '@/views/code/button/group';
import { props, methods, clickProps } from '@/views/api/button';
import { PropsEntity, ChangePropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface StatusEntity {
  ev: AnimationEvent;
  current: number;
}

@Component({
  components: {
    WRow,
    WCol,
    ApiTable,
    ChangeTable,
    MethodTable,
    WDemo,
    OnlineReview,
  },
})
export default class ButtonView extends Vue {
  Button: string = TITLE.Button;

  base: ApiEntity = base;

  size: ApiEntity = size;

  loading: ApiEntity = loading;

  ghost: ApiEntity = ghost;

  icon: ApiEntity = icon;

  disabled: ApiEntity = disabled;

  group: ApiEntity = group;

  props: PropsEntity[] = props;

  clickProps: ChangePropsEntity[] = clickProps;

  methods: MethodsEntity[] = methods;
}
</script>

<style lang="scss">
@import '~assets/style/button.scss';
</style>
