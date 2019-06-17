<template>
  <div class="home">
    <router-link :to="{ name: 'Icon' }">去 Icon</router-link>
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
