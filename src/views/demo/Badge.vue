<template>
  <div>
    <h1>{{ Badge }}</h1>
    <p>图标右上角的圆形徽标数字。</p>
    <h2>何时使用</h2>
    <p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :temCode="base.code"
          :title="base.title"
          :desc="base.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="cap.code"
          :title="cap.title"
          :desc="cap.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="model.code"
          :jsCode="model.js"
          :title="model.title"
          :desc="model.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="status.code"
          :title="status.title"
          :desc="status.desc"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="number.code"
          :title="number.title"
          :desc="number.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="click.code"
          :title="click.title"
          :desc="click.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="dot.code"
          :title="dot.title"
          :desc="dot.desc"
        ></OnlineReview>
        <OnlineReview
          :temCode="color.code"
          :title="color.title"
          :desc="color.desc"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Badge API</h2>
    <ApiTable :data="props"></ApiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
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
import { TITLE } from '@/views/common/constant';

@Component({
  components: {
    ApiTable,
    WRow,
    WCol,
    OnlineReview,
  },
})
export default class BadgeView extends Vue {
  Badge: string = TITLE.Badge;

  base: ApiEntity = base;

  number: ApiEntity = number;

  cap: ApiEntity = cap;

  click: ApiEntity = click;

  model: ApiEntity = model;

  dot: ApiEntity = dot;

  status: ApiEntity = status;

  color: ApiEntity = color;

  props: PropsEntity[] = props;
}
</script>

<style lang="scss">
@import '~assets/style/badge.scss';
</style>
