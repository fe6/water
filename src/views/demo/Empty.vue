<template>
  <div>
    <h1>{{ Empty }}</h1>
    <p>空状态时的展示占位图。 <code>0.1.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当目前没有数据时，用于显式的用户提示。</li>
      <li>初始化场景时的引导创建流程。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="24">
        <OnlineReview
          :temCode="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="240px"
        ></OnlineReview>
        <OnlineReview
          :temCode="image.code"
          :render="image.render"
          :title="image.title"
          :desc="image.desc"
          iframeHeight="240px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Empty API</h2>
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
import base from '@/views/code/empty/base';
import image from '@/views/code/empty/image';
import { props } from '@/views/api/empty';
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
export default class EmptyView extends Vue {
  Empty: string = TITLE.Empty;

  base: ApiEntity = base;

  image: ApiEntity = image;

  props: PropsEntity[] = props;
}
</script>
