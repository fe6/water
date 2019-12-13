<template>
  <div>
    <WCheckTag v-model="value1">WCheckTag</WCheckTag>
    <WCheckTag v-model="value3">WCheckTag</WCheckTag>
    <WTag>WTag</WTag>
    <WTag :color="value2">WTag</WTag>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WCheckTag from '@/components/tag/src/CheckTag.vue';
  import WTag from '@/components/tag/src/Tag.vue';

  @Component({
    components: {
      WTag,
      WCheckTag,
    },
  })
  export default class TagView extends Vue {
    value1: boolean = true;

    value2: string = '#333';

    value3: boolean = false;
  }
</script>
