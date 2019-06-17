<template>
  <div>
    <h1>Icon 图标</h1>
    <p>语义化的矢量图形。</p>
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
          :code="color.code"
          :render="color.render"
          :title="color.title"
          :desc="color.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="spin.code"
          :render="spin.render"
          :title="spin.title"
          :desc="spin.desc"
        ></WDemo>
        <WDemo
          :code="diy.code"
          :render="diy.render"
          :title="diy.title"
          :desc="diy.desc"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/icon/base';
import spin from '@/views/code/icon/spin';
import color from '@/views/code/icon/color';
import diy from '@/views/code/icon/diy';
import { props } from '@/views/api/icon';
import { PropsEntity } from '@/views/entity/apientity';

@Component({
  components: {
    ApiTable,
    WRow,
    WCol,
    WDemo,
  },
})
export default class IconView extends Vue {
  base: ApiEntity = base;

  spin: ApiEntity = spin;

  color: ApiEntity = color;

  diy: ApiEntity = diy;

  props: PropsEntity[] = props;
}
</script>
