<template>
  <div>
    <h1>{{ Tag }}</h1>
    <p>进行标记和分类的小标签。 <code>0.12.0</code> 新增。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用于标记事物的属性和维度。</li>
      <li>进行分类。</li>
    </ul>
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
          :code="loading.code"
          :render="loading.render"
          :title="loading.title"
          :desc="loading.desc"
        ></WDemo>
        <WDemo
          :code="newtag.code"
          :render="newtag.render"
          :title="newtag.title"
          :desc="newtag.desc"
          :data="{ newTags: newTags, newtagLoading: newtagLoading, beforeHandle: beforeHandle, }"
        ></WDemo>
      </WCol>
      <WCol :span="12">
        <WDemo
          :code="size.code"
          :render="size.render"
          :title="size.title"
          :desc="size.desc"
        ></WDemo>
        <WDemo
          :code="color.code"
          :render="color.render"
          :title="color.title"
          :desc="color.desc"
          :data="{ allColors: allColors, sectionColors: sectionColors }"
        ></WDemo>
      </WCol>
    </WRow>
    <h2>Tag API</h2>
    <ApiTable :data="props"></ApiTable>
    <h2>Tag Method</h2>
    <MethodTable :data="methods"></MethodTable>
    <h2>CheckTag API</h2>
    <ApiTable :data="checkTagProps"></ApiTable>
    <h2>NewTag API</h2>
    <ApiTable :data="newTagProps"></ApiTable>
    <h2>NewTag Method</h2>
    <MethodTable :data="newTagMethods"></MethodTable>
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
import base from '@/views/code/tag/base';
import size from '@/views/code/tag/size';
import color from '@/views/code/tag/color';
import loading from '@/views/code/tag/loading';
import newtag from '@/views/code/tag/newtag';
import {
  props,
  methods,
  checkTagProps,
  newTagProps,
  newTagMethods,
} from '@/views/api/tag';
import { PropsEntity, MethodsEntity } from '@/views/entity/apientity';
import { TITLE } from '@/views/common/constant';

interface ParamsEntity {
  attr: string;
  value: string;
  ctx?: any;
}

interface ChangeParamsEntity {
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
export default class TagView extends Vue {
  Tag: string = TITLE.Tag;

  base: ApiEntity = base;

  size: ApiEntity = size;

  color: ApiEntity = color;

  loading: ApiEntity = loading;

  newtag: ApiEntity = newtag;

  newtagLoading: boolean = false;

  newTags: any[] = [{
    value: '不可删除',
    closable: false,
  }];

  sectionColors: any[] = [{
    color: '#eb2f96',
    loading: false,
  },
  {
    color: '#f5222d',
    loading: false,
  },
  {
    color: '#fa541c',
    loading: false,
  },
  {
    color: '#fa8c16',
    loading: false,
  }];

  allColors: any = [{
    color: '#eb2f96',
    loading: false,
  }, {
    color: '#f5222d',
    loading: false,
  }, {
    color: '#fa8c16',
    loading: false,
  }, {
    color: '#faad14',
    loading: false,
  }];

  change({ attr, value }: ChangeParamsEntity) {
    (this as any)[attr] = value;
  }

  beforeHandle() {
    this.newtagLoading = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.newtagLoading = false;
        resolve();
      }, 1000);
    });
  }

  props: PropsEntity[] = props;

  methods: MethodsEntity[] = methods;

  checkTagProps: PropsEntity[] = checkTagProps;

  newTagProps: PropsEntity[] = newTagProps;

  newTagMethods: MethodsEntity[] = newTagMethods;
}
</script>
