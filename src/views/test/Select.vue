<!-- @format -->

<template>
  <div>
    --{{ value1 }}
    <br />
    <WSelect
      search
      :options="defaultDatas"
      @change="change"
      style="width: 240px;"
    ></WSelect>
    <br />
    -{{ multipleValue }}
    <w-select
      mode="multiple"
      v-model="multipleValue"
      :options="multipleDatas"
    ></w-select>
    <br />
    <w-select v-model="divValue" :options="divDatas">
      <div
        slot="diy"
        style="
        cursor: pointer; 
        padding: 5px 12px; 
        line-height: 22px; 
        border-top: 1px solid #ccc; 
        color: #1996f9; 
        font-size: 12px;"
        @click="digFn"
      >
        添加元素
      </div>
    </w-select>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WSelect from '@/components/select/src/Select.vue';
  import { defaultDatas } from '@/views/code/select/base';

  @Component({
    components: {
      WSelect,
    },
  })
  export default class SelectView extends Vue {
    value1 = '1999-11-10';

    defaultDatas: any[] = defaultDatas;

    multipleValue: string[] = ['苹果', '鸭梨'];

    multipleDatas: any[] = [
      { value: 'Apple', label: '苹果', loading: false, disabled: true },
      { value: 'Pear', label: '鸭梨', loading: false },
      { value: 'more', label: '更多', loading: false },
    ];

    divValue: string = '更多';

    divDatas: any[] = [
      { value: 'Apple', label: '苹果', loading: false, disabled: true },
      { value: 'Pear', label: '鸭梨', loading: false },
      { value: 'more', label: '更多', loading: false },
    ];

    change(params: any) {
      this.value1 = '1999++01++01++';
      console.log(params, 'params');
    }

    digFn(ev: any) {
      this.divDatas.push({
        value: `new${this.divDatas.length}`,
        label: `新建${this.divDatas.length}`,
        loading: false,
      });
      ev.stopPropagation();
    }
  }
</script>
