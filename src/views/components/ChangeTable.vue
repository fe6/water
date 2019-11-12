<template>
  <div v-once class="table-box">
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(source, sourceIndex) in data" :key="sourceIndex">
          <td>{{ source.key }}</td>
          <td v-html="source.desc"></td>
          <td>{{ source.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class ApiTable extends Vue {
    @Prop() private data!: any[];
  }
</script>
