<template>
  <div class="home">
    这是{{msg}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeView extends Vue {
  msg = '首页';
}
</script>
