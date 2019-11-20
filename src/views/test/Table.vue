<template>
  <div>
    --{{ value1 }}
    <br />
    <w-table
      :col="sizeCol"
      :options="sizeOptions"
      :scroll="{ x: '130%', y: 300 }"
      border
      size="small"
    ></w-table>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WTable from '@/components/table/src/Table.vue';
  import { sizeCol, sizeOptions } from '@/views/code/table/options/size';

  @Component({
    components: {
      WTable,
    },
  })
  export default class TableView extends Vue {
    value1 = '1999-11-10';

    sizeCol: any = JSON.parse(sizeCol);

    sizeOptions: any = JSON.parse(sizeOptions);
  }
</script>
