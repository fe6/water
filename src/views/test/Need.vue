<template>
  <div>
    按需加载
    <TButton>123</TButton>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import water from '@/components/water';

  @Component({
    components: {
      TButton: (water as any).WButton,
    },
  })
  export default class TestNeed extends Vue {}
</script>
