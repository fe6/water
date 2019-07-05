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
        <WDemo
          :code="base.code"
          :render="base.render"
          :title="base.title"
          :desc="base.desc"
          :data="{ value: baseValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="tag.code"
          :render="tag.render"
          :title="tag.title"
          :desc="tag.desc"
          :data="{ value: tagValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="diy.code"
          :render="diy.render"
          :title="diy.title"
          :desc="diy.desc"
          :data="{ value: diyValue, options: diyOptions }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="multiplesearch.code"
          :render="multiplesearch.render"
          :title="multiplesearch.title"
          :desc="multiplesearch.desc"
          :data="{ value: multiplesearchValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="loading.code"
          :render="loading.render"
          :title="loading.title"
          :desc="loading.desc"
          :data="{ value: loadingValue, loading: loadingStatus, beforeHandle: beforeHandle }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="basesize.code"
          :render="basesize.render"
          :title="basesize.title"
          :desc="basesize.desc"
          :data="{ value: basesizeValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="basedisabled.code"
          :render="basedisabled.render"
          :title="basedisabled.title"
          :desc="basedisabled.desc"
          :data="{ value: basedisabledValue }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="slot.code"
          :render="slot.render"
          :title="slot.title"
          :desc="slot.desc"
          :data="{ value: slotValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="multiple.code"
          :render="multiple.render"
          :title="multiple.title"
          :desc="multiple.desc"
          :data="{ value: multipleValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="basesearch.code"
          :render="basesearch.render"
          :title="basesearch.title"
          :desc="basesearch.desc"
          :data="{ value: basesearchValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="tagsearch.code"
          :render="tagsearch.render"
          :title="tagsearch.title"
          :desc="tagsearch.desc"
          :data="{ value: tagsearchValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="prefix.code"
          :render="prefix.render"
          :title="prefix.title"
          :desc="prefix.desc"
          :data="{ value: prefixValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="multiplesize.code"
          :render="multiplesize.render"
          :title="multiplesize.title"
          :desc="multiplesize.desc"
          :data="{ value: multiplesizeValue }"
          @changeHandle="change"
        ></WDemo>
        <WDemo
          :code="tagdisabled.code"
          :render="tagdisabled.render"
          :title="tagdisabled.title"
          :desc="tagdisabled.desc"
          :data="{ value: tagdisabledValue }"
          @changeHandle="change"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Select API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Select Method</h2>
    <MethodTable :data="methods"></MethodTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import cloneDeep from 'lodash/cloneDeep';
import ApiTable from '@/views/components/ApiTable.vue';
import MethodTable from '@/views/components/MethodTable.vue';
import WRow from '@/components/grid/Row.vue';
import WCol from '@/components/grid/Col.vue';
import WDemo from '@/views/components/Demo.vue';
import { ApiEntity } from '@/views/entity/demoentity';
import base, { defaultDatas, DataEntity } from '@/views/code/select/base';
import slot from '@/views/code/select/slot';
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
import { props, methods } from '@/views/api/select';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
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
    MethodTable,
    WDemo,
  },
})
export default class SelectView extends Vue {
  Select: string = TITLE.Select;

  base: ApiEntity = base;

  baseValue: string = ''; // 苹果

  slot: ApiEntity = slot;

  slotValue: string = '苹果';

  tag: ApiEntity = tag;

  tagValue: string[] = ['苹果'];

  multiple: ApiEntity = multiple;

  multipleValue: string[] = ['苹果'];

  diy: ApiEntity = diy;

  diyOptions: DataEntity[] = cloneDeep(defaultDatas);

  diyValue: string = '更多';

  basesearch: ApiEntity = basesearch;

  basesearchValue: string = '更多';

  multiplesearch: ApiEntity = multiplesearch;

  multiplesearchValue: string[] = ['更多'];

  tagsearch: ApiEntity = tagsearch;

  tagsearchValue: string[] = ['更多'];

  loading: ApiEntity = loading;

  loadingStatus: boolean = false;

  loadingValue: string = '更多';

  prefix: ApiEntity = prefix;

  prefixValue: string = '更多';

  basesize: ApiEntity = basesize;

  basesizeValue: string = '';

  multiplesize: ApiEntity = multiplesize;

  multiplesizeValue: string[] = ['苹果', '鸭梨'];

  basedisabled: ApiEntity = basedisabled;

  basedisabledValue: string = '苹果';

  tagdisabled: ApiEntity = tagdisabled;

  tagdisabledValue: string[] = ['苹果', '鸭梨'];

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  change({ attr, value }: ParamsEntity) {
    (this as any)[attr] = value;
  }

  beforeHandle() {
    this.loadingStatus = true;
    return new Promise((resolve) => {
      /* eslint-disable no-alert */
      setTimeout(() => {
        this.loadingStatus = false;
        if (window.confirm('你确定选择吗？')) {
          resolve();
        }
      }, 1000);
    });
  }
}
</script>
