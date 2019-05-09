<template>
  <div>
    <button @click="start">start</button>
    <button @click="finish">finish</button>
    <button @click="fail">fail</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loadbar from '@/components/loadbar/Loadbar.vue';

@Component
export default class LoadbarView extends Vue {
  start() {
    console.log(this);
    Loadbar.start();
  }

  finish() {
    console.log(this);
    Loadbar.finish();
  }

  fail() {
    console.log(this);
    Loadbar.fail();
  }
}
</script>
