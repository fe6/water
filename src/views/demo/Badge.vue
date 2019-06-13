<template>
  <div>
    <h1>Badge 徽标数</h1>
    <p>图标右上角的圆形徽标数字。</p>
    <h2>何时使用</h2>
    <p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>
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
          :code="cap.code"
          :render="cap.render"
          :title="cap.title"
          :desc="cap.desc"
        ></WDemo>
        <WDemo
          :code="model.code"
          :render="model.render"
          :title="model.title"
          :desc="model.desc"
          :data="{ value: clickValue, change: clickChange }"
          :change="clickChange"
        ></WDemo>
        <WDemo
          :code="status.code"
          :render="status.render"
          :title="status.title"
          :desc="status.desc"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="number.code"
          :render="number.render"
          :title="number.title"
          :desc="number.desc"
        ></WDemo>
        <WDemo
          :code="click.code"
          :render="click.render"
          :title="click.title"
          :desc="click.desc"
        ></WDemo>
        <WDemo
          :code="dot.code"
          :render="dot.render"
          :title="dot.title"
          :desc="dot.desc"
        ></WDemo>
        <WDemo
          :code="color.code"
          :render="color.render"
          :title="color.title"
          :desc="color.desc"
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
import base from '@/views/code/badge/base';
import number from '@/views/code/badge/number';
import cap from '@/views/code/badge/cap';
import click from '@/views/code/badge/click';
import model from '@/views/code/badge/model';
import dot from '@/views/code/badge/dot';
import status from '@/views/code/badge/status';
import color from '@/views/code/badge/color';
import { props } from '@/views/api/badge';
import { PropsEntity } from '@/views/entity/apientity';

@Component({
  components: {
    ApiTable,
    WRow,
    WCol,
    WDemo,
  },
})
export default class BadgeView extends Vue {
  base: ApiEntity = base;

  number: ApiEntity = number;

  cap: ApiEntity = cap;

  click: ApiEntity = click;

  model: ApiEntity = model;

  dot: ApiEntity = dot;

  status: ApiEntity = status;

  color: ApiEntity = color;

  props: PropsEntity[] = props;

  clickValue: number = 2;

  clickChange(step: number) {
    console.log(step, 'type');
    this.clickValue = this.clickValue + step;
  }
}
</script>

<style lang="scss">
@import '~assets/style/badge.scss';
</style>
