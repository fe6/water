<template>
  <div class="affix">
    <h1>{{ Affix }}</h1>
    <p>将页面元素钉在可视范围。</p>
    <h2>何时使用</h2>
    <p>
      当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
    </p>
    <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="offsettop.code"
          :render="offsettop.render"
          :title="offsettop.title"
          :desc="offsettop.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Affix API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Affix Method</h2>
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
  import base from '@/views/code/affix/base';
  import offsettop from '@/views/code/affix/offsettop';
  import { props, methods } from '@/views/api/affix';
  import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
  import { TITLE } from '@/views/common/constant';

  @Component({
    components: {
      WRow,
      WCol,
      ApiTable,
      MethodTable,
      WDemo,
    },
  })
  export default class AffixView extends Vue {
    Affix: string = TITLE.Affix;

    base: ApiEntity = base;

    offsettop: ApiEntity = offsettop;

    props: PropsEntity[] = props;

    methods: MethodsEntity[] = methods;
  }
</script>

<style lang="scss">
  .affix {
    &-box {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      &-left {
        height: 2000px;
        width: 760px;
        margin-right: 20px;
        background: #f00;
        padding: 32px 20px 24px;
        border-radius: 8px;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
      }

      &-right {
        position: relative;
        width: 320px;
      }
    }
  }
</style>
