<template>
  <div>
    <h2>报错状态</h2>
    <p>
      <WInput placeholder="内容大于 8 个长度会报错" :error="errorFn" />
    </p>
    <h2>三种大小</h2>
    <div>
      <span>尺寸：</span>
    </div>
    <p>
      <WInput value="test" :disabled="true" />
    </p>
    <p>
      <WInput value="test" size="small" />
    </p>
    <p>
      <WInput value="test" />
    </p>
    <p>
      <WInput value="test" size="large" />
    </p>
    <h2>前缀和后缀</h2>
    <p>
      <WInput value="test" :disabled="true">
        <Icon slot="prefix" />
        <Icon slot="suffix" />
      </WInput>
    </p>
    <p>
      <WInput value="test" size="small">
        <Icon slot="prefix" />
        <Icon slot="suffix" />
      </WInput>
    </p>
    <p>
      <WInput value="test">
        <Icon slot="prefix" />
        <Icon slot="suffix" />
      </WInput>
    </p>
    <p>
      <WInput v-model="error" size="large">
        <Icon slot="prefix" />
        <Icon slot="suffix" />
      </WInput>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WInput from '@/components/input/Input.vue';
import Icon from '@/components/icon/Icon.vue';

@Component({
  components: {
    WInput,
    Icon,
  },
})
export default class InputView extends Vue {
  error: string = '内容';

  errorFn(ev: Event, val: string): boolean {
    this.error = val;
    return val.length > 8;
  }
}
</script>
