<template>
  <div>
    <h1>{{ Spin }}</h1>
    <p>用于页面和区块的加载中状态。 <code>0.5.0</code> 新增。</p>
    <h2>何时使用</h2>
    <p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
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
        <WDemo
          :code="basesize.code"
          :render="basesize.render"
          :title="basesize.title"
          :desc="basesize.desc"
        ></WDemo>
        <WDemo
          :code="tip.code"
          :render="tip.render"
          :title="tip.title"
          :desc="tip.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="region.code"
          :render="region.render"
          :title="region.title"
          :desc="region.desc"
        ></WDemo>
        <WDemo
          :code="regionsize.code"
          :render="regionsize.render"
          :title="regionsize.title"
          :desc="regionsize.desc"
          :data="{ value: regionsizeStatus }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Spin API</h2>
    <ApiTable :data="props"></ApiTable>
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
import base from '@/views/code/spin/base';
import basesize from '@/views/code/spin/basesize';
import color from '@/views/code/spin/color';
import tip from '@/views/code/spin/tip';
import region from '@/views/code/spin/region';
import regionsize from '@/views/code/spin/regionsize';
import { props } from '@/views/api/spin';
import { PropsEntity } from '@/views/entity/apientity';
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
export default class SpinView extends Vue {
  Spin: string = TITLE.Spin;

  base: ApiEntity = base;

  basesize: ApiEntity = basesize;

  color: ApiEntity = color;

  tip: ApiEntity = tip;

  region: ApiEntity = region;

  regionsize: ApiEntity = regionsize;

  regionsizeStatus: boolean = true;

  props: PropsEntity[] = props;

  change(status: boolean) {
    console.log(status, 'sss');
    this.regionsizeStatus = status;
  }
}
</script>
