<template>
  <div>
    <h1>{{ Select }}</h1>
    <p>下拉选择器。 <code>0.3.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
      <li>当选项少时（少于 5 项），建议直接将选项平铺，使用 <a class="link" href="/radio">Radio</a> 是更好的选择。</li>
    </ul>
    <h2>代码演示</h2>
    <WRow :gutter="16">
      <WCol :span="12">
        <OnlineReview
          :temCode="base.code"
          :jsCode="base.js"
          :title="base.title"
          :desc="base.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="tag.code"
          :jsCode="tag.js"
          :title="tag.title"
          :desc="tag.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="diy.code"
          :jsCode="diy.js"
          :title="diy.title"
          :desc="diy.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="multiplesearch.code"
          :jsCode="multiplesearch.js"
          :title="multiplesearch.title"
          :desc="multiplesearch.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="loading.code"
          :jsCode="loading.js"
          :title="loading.title"
          :desc="loading.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="basesize.code"
          :jsCode="basesize.js"
          :title="basesize.title"
          :desc="basesize.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="basedisabled.code"
          :jsCode="basedisabled.js"
          :title="basedisabled.title"
          :desc="basedisabled.desc"
          iframeHeight="200px"
        ></OnlineReview>
      </WCol>
      <WCol :span="12">
        <OnlineReview
          :temCode="multiple.code"
          :jsCode="multiple.js"
          :title="multiple.title"
          :desc="multiple.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="basesearch.code"
          :jsCode="basesearch.js"
          :title="basesearch.title"
          :desc="basesearch.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="tagsearch.code"
          :jsCode="tagsearch.js"
          :title="tagsearch.title"
          :desc="tagsearch.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="prefix.code"
          :jsCode="prefix.js"
          :title="prefix.title"
          :desc="prefix.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="multiplesize.code"
          :jsCode="multiplesize.js"
          :title="multiplesize.title"
          :desc="multiplesize.desc"
          iframeHeight="200px"
        ></OnlineReview>
        <OnlineReview
          :temCode="tagdisabled.code"
          :jsCode="tagdisabled.js"
          :title="tagdisabled.title"
          :desc="tagdisabled.desc"
          iframeHeight="200px"
        ></OnlineReview>
      </WCol>
    </WRow>
    <h2>Select API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Select Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>change 函数返回的参数</h2>
    <ChangeTable :data="changeProps"></ChangeTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApiTable from '@/views/components/ApiTable.vue';
import ChangeTable from '@/views/components/ChangeTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import OnlineReview from '@/views/components/OnlineReview.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base from '@/views/code/select/base';
import tag from '@/views/code/select/tag';
import multiple from '@/views/code/select/multiple';
import diy from '@/views/code/select/diy';
import basesearch from '@/views/code/select/basesearch';
import multiplesearch from '@/views/code/select/multiplesearch';
import tagsearch from '@/views/code/select/tagsearch';
import loading from '@/views/code/select/loading';
import prefix from '@/views/code/select/prefix';
import basesize from '@/views/code/select/basesize';
import multiplesize from '@/views/code/select/multiplesize';
import basedisabled from '@/views/code/select/basedisabled';
import tagdisabled from '@/views/code/select/tagdisabled';
import { props, changeProps, methods } from '@/views/api/select';
import { PropsEntity, ChangePropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface ParamsEntity {
  attr: string;
  value: string;
}

@Component({
  components: {
    WRow,
    WCol,
    ApiTable,
    ChangeTable,
    MethodTable,
    OnlineReview,
  },
})
export default class SelectView extends Vue {
  Select: string = TITLE.Select;

  base: ApiEntity = base;

  tag: ApiEntity = tag;

  multiple: ApiEntity = multiple;

  diy: ApiEntity = diy;

  basesearch: ApiEntity = basesearch;

  multiplesearch: ApiEntity = multiplesearch;

  tagsearch: ApiEntity = tagsearch;

  loading: ApiEntity = loading;

  prefix: ApiEntity = prefix;

  basesize: ApiEntity = basesize;

  multiplesize: ApiEntity = multiplesize;

  basedisabled: ApiEntity = basedisabled;

  tagdisabled: ApiEntity = tagdisabled;

  props: PropsEntity[] = props;

  changeProps: ChangePropsEntity[] = changeProps;

  methods: MethodsEntity[] = methods;
}
</script>
