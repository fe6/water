<!-- @format -->

<template>
  <WScroll type="horizontal" v-once class="table-box">
    <table style="width: calc(100vw - 286px);">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>是否必填</th>
          <th>默认值</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(source, sourceIndex) in data" :key="sourceIndex">
          <td>{{ source.param }}</td>
          <td v-html="source.description"></td>
          <td>{{ source.optionType }}</td>
          <td>
            <template v-if="source.options">
              <w-tag v-for="(opt, oIdx) in source.options" :key="oIdx">{{
                opt
              }}</w-tag>
            </template>
            <template v-else>-</template>
          </td>
          <td>{{ source.require }}</td>
          <td>{{ source.defaultValue }}</td>
          <td>{{ source.version }}</td>
        </tr>
      </tbody>
    </table>
  </WScroll>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import WScroll from '@/components/scroll/src/Scroll.vue';
  import WTag from '@/components/tag/src/Tag.vue';

  @Component({
    components: {
      WScroll,
      WTag,
    },
  })
  export default class ApiTable extends Vue {
    @Prop() private data!: any[];
  }
</script>
