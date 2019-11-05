<template>
  <div>
    <!-- <WProgress v-model="value1" inside :strokeWidth="26" />
    <WProgress v-model="value1" inside status="warning" :strokeWidth="26" /> -->
    <!-- <WProgress v-model="value1" color="#00f" />
    <WProgress v-model="value1" :color="customColors" />
    <WProgress v-model="value1" :color="customColorMethod" />
    <WProgress v-model="value1" :strokeWidth="26" inside :color="customColors" />
    <WProgress v-model="value1" :strokeWidth="26" inside :color="customColorMethod" /> -->
    <!-- <WProgress v-model="value1" color="#00f" />
    <WProgress v-model="value1" strokeLinecap="square" status="error" />
    <WProgress v-model="value1" status="error" />
    <WProgress v-model="value1" status="warning" />
    <WProgress v-model="value1" status="success" />
    <WProgress v-model="value1" :showInfo="false" />
    <WProgress v-model="value1" />
    <WProgress v-model="value1" :format="format" /> -->
    <WProgress v-model="value1" />
    <WProgress type="circle" :width="300" v-model="value1" />
    <WProgress type="dashboard" v-model="value1" />
    <WProgress type="circle" strokeLinecap="square" v-model="value1" />
    <WProgress type="dashboard" strokeLinecap="square" v-model="value1" />
    <button @click="value1+=11.11">+{{value1}}++</button>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import WProgress from '@/components/progress/Progress.vue';

@Component({
  components: {
    WProgress,
  },
})
export default class TestInput extends Vue {
  value1: number = 10;

  value3: number = 10;

  modalStatus: boolean = false;

  customColors: any[] = [
    { color: '#f56c6c', value: 20 },
    { color: '#e6a23c', value: 40 },
    { color: '#5cb87a', value: 60 },
    { color: '#1989fa', value: 80 },
    { color: '#6f7ad3', value: 100 },
  ];

  format(p: number) {
    this.value3 = 0;
    console.log(p, p < 100, 999);
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
