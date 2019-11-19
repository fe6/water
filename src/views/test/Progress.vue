<template>
  <div>
    <w-progress v-model="value1" stroke-linecap="square"></w-progress>
    <div>
      <w-progress
        v-model="value1"
        stroke-linecap="square"
        type="circle"
      ></w-progress>
      <w-progress
        v-model="value1"
        stroke-linecap="square"
        type="dashboard"
      ></w-progress>
    </div>
    1111
    <WProgress v-model="value1" inside :stroke-width="26" />
    <WProgress v-model="value1" inside status="warning" :stroke-width="26" />
    <!-- <WProgress v-model="value1" color="#00f" />
    <WProgress v-model="value1" :color="customColors" />
    <WProgress v-model="value1" :color="customColorMethod" />
    <WProgress v-model="value1" :strokeWidth="26" inside :color="customColors" />
    <WProgress v-model="value1" :strokeWidth="26" inside :color="customColorMethod" /> -->
    <WProgress v-model="value1" inside color="#00f" />
    <WProgress v-model="value1" inside stroke-linecap="square" status="error" />
    <WProgress v-model="value1" inside status="error" />
    <WProgress v-model="value1" inside status="warning" />
    <WProgress v-model="value1" :status="status" />111
    <div @click="status = 'error'">asdf</div>
    <WProgress v-model="value1" inside status="success" />0
    <WProgress v-model="value1" inside :show-info="false" />
    <WProgress v-model="value1" inside />
    <WProgress v-model="value1" inside :format="format" />
    <w-progress v-model="value1" inside></w-progress>
    <w-progress v-model="value1" status="success"></w-progress>
    <w-progress v-model="value1" status="error"></w-progress>
    <w-progress v-model="value1" status="warning"></w-progress>
    <w-progress v-model="value1"></w-progress>
    <w-progress v-model="value1" :show-info="false"></w-progress>
    12
    <WProgress v-model="value1" />
    <WProgress v-model="value1" type="circle" :width="300" />
    <WProgress v-model="value1" type="dashboard" />
    <WProgress v-model="value1" type="circle" stroke-linecap="square" />
    <WProgress v-model="value1" type="dashboard" stroke-linecap="square" />
    <button @click="value1 += 11.11">+{{ value1 }}++</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WProgress from '@/components/progress/src/Progress.vue';

  @Component({
    components: {
      WProgress,
    },
  })
  export default class TestInput extends Vue {
    value1 = 10;

    value3 = 10;

    status = '';

    modalStatus = false;

    customColors: any[] = [
      { color: '#f56c6c', value: 20 },
      { color: '#e6a23c', value: 40 },
      { color: '#5cb87a', value: 60 },
      { color: '#1989fa', value: 80 },
      { color: '#6f7ad3', value: 100 },
    ];

    format(p: number) {
      this.value3 = 0;
      return p < 100 ? p : '慢';
    }

    customColorMethod(percentage: number): string {
      this.value3 = 0;
      if (percentage < 30) {
        return '#909399';
      }

      if (percentage < 70) {
        return '#e6a23c';
      }
      return '#67c23a';
    }
  }
</script>
