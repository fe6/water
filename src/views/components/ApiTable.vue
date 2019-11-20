<template>
  <WScroll type="horizontal" v-once class="table-box">
    <table style="width: calc(100vw - 286px);">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>是否必填</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(source, sourceIndex) in data" :key="sourceIndex">
          <td>{{ source.param }}</td>
          <td v-html="source.desc"></td>
          <td>{{ source.type }}</td>
          <td>{{ source.require }}</td>
          <td>{{ source.default }}</td>
        </tr>
      </tbody>
    </table>
  </WScroll>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import WScroll from '@/components/scroll/src/Scroll.vue';

  @Component({
    components: {
      WScroll,
    },
  })
  export default class ApiTable extends Vue {
    @Prop() private data!: any[];
  }
</script>
