<!-- @format -->

<template>
  <div>
    --{{ value1 }}
    <WCascader search :options="defaultDatas" @change="change"></WCascader>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WCascader from '@/components/cascader/src/Cascader.vue';
  import { defaultDatas } from '@/views/code/cascader/base';

  @Component({
    components: {
      WCascader,
    },
  })
  export default class CascaderView extends Vue {
    value1 = '1999-11-10';

    defaultDatas: any[] = defaultDatas;

    change(params: any) {
      this.value1 = '1999++01++01++';
      console.log(params, 'params');
    }
  }
</script>
