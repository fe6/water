<template>
  <div class="table-box">
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(source, sourceIndex) in data" :key="sourceIndex">
          <td>{{source.name}}</td>
          <td>{{source.desc}}</td>
          <td>{{source.return}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class MethodTable extends Vue {
  @Prop() private data!: any[];
}
</script>
