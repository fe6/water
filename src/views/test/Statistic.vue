<template>
  <div class="statistic">
    <WStatistic title="Active Users" v-model="value1" groupSeparator="。" />
    <WStatistic title="Active Users" v-model="value2" />
    <WStatistic title="Active Users" v-model="value2" :precision="4" />
    <WStatistic v-model="value1">
      <div slot="title" style="color: red">Active Users</div>
    </WStatistic>
    <WStatistic title="Active Users" v-model="value2" />
    <WStatistic title="Feedback" v-model="value1">
      <WIcon slot="prefix" />
    </WStatistic>
    <WStatistic title="Unmerged" v-model="value1">
      <template slot="suffix">/ 100</template>
    </WStatistic>
    <WStatistic title="Unmerged" v-model="value2">
      <template slot="suffix">%</template>
    </WStatistic>
    <WStatistic title="Unmerged" v-model="value2" valueStyle="color: red">
      <WIcon slot="prefix" />
      <template slot="suffix">%</template>
    </WStatistic>

    <WStatistic
      title="Unmerged"
      v-model="value1"
      :precision="2"
      valueStyle="color: red"
    >
      <WIcon slot="prefix" />
      <template slot="suffix">%</template>
    </WStatistic>

    <WStatistic
      title="Unmerged"
      v-model="value2"
      :precision="1"
      valueStyle="color: red"
    >
      <WIcon slot="prefix" />
      <template slot="suffix">%</template>
    </WStatistic>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WStatistic from '@/components/statistic/src/Statistic.vue';
  import WIcon from '@/components/icon/src/Icon.vue';

  @Component({
    components: {
      WStatistic,
      WIcon,
    },
  })
  export default class StatisticView extends Vue {
    value1: number = 112893;

    value2: number = 12345.29;
  }
</script>
