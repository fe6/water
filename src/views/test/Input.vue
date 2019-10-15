<template>
  <div>
    <h1>限制字数</h1>
    <WInput
      v-model="value1"
      class="test-input"
      maxLength="10"
      show-word-limit
      size="small"
    ></WInput>
    <WInput
      v-model="value1"
      class="test-input"
      maxLength="10"
      show-word-limit
    ></WInput>
    <WInput
      v-model="value1"
      class="test-input"
      maxLength="10"
      show-word-limit
      size="large"
    ></WInput>
    <br>
    <WInput
      v-model="value2"
      class="test-input"
      maxLength="10"
      size="small"
      show-word-limit
    >
      <WIcon slot="prefix"></WIcon>
    </WInput>
    <WInput
      v-model="value2"
      class="test-input"
      maxLength="10"
      show-word-limit
    >
      <WIcon slot="prefix"></WIcon>
    </WInput>
    <WInput
      v-model="value2"
      class="test-input"
      maxLength="10"
      size="large"
      show-word-limit
    >
      <WIcon slot="prefix"></WIcon>
    </WInput>
    <br>
    <WInput
      v-model="value2"
      class="test-input"
      maxLength="10"
      size="small"
      show-word-limit
    >
      <WIcon slot="suffix"></WIcon>
    </WInput>
    <WInput
      v-model="value2"
      class="test-input"
      maxLength="10"
      show-word-limit
    >
      <WIcon slot="suffix"></WIcon>
    </WInput>
    <WInput
      v-model="value2"
      class="test-input"
      maxLength="10"
      size="large"
      show-word-limit
    >
      <WIcon slot="suffix"></WIcon>
    </WInput>
    <br>
    <WInput
      class="test-input"
      maxLength="10"
      size="small"
      show-word-limit
      v-model="value2"
    >
      <WIcon slot="prefix"></WIcon>
      <WIcon slot="suffix"></WIcon>
    </WInput>
    <WInput
      class="test-input"
      maxLength="10"
      show-word-limit
      v-model="value2"
    >
      <WIcon slot="prefix"></WIcon>
      <WIcon slot="suffix"></WIcon>
    </WInput>
    <WInput
      class="test-input"
      maxLength="10"
      show-word-limit
      size="large"
      v-model="value2"
    >
      <WIcon slot="prefix"></WIcon>
      <WIcon slot="suffix"></WIcon>
    </WInput>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import WInput from '@/components/input/Input.vue';
import WIcon from '@/components/icon/Icon.vue';

@Component({
  components: {
    WInput,
    WIcon,
  },
})
export default class TestInput extends Vue {
  value1: string = '这是个输入框';

  value2: string = '这是个输入框内容很长很长很长很长很长很长很长很长';
}
</script>

<style lang="scss" scoped>
.test-input {
  width: 300px;
  margin: 8px 0;
}
</style>
