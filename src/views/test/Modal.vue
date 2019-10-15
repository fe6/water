<template>
  <div>
    <h1>弹框中的输入框</h1>
    <WButton @click="modalStatus = true">点击</WButton>
    <WModal v-model="modalStatus" title="Basic Modal">
      <div>Some contents...</div>
      <WInput
        v-model="value1"
        class="test-input"
        maxLength="10"
        show-word-limit
        size="small"
      ></WInput>
      <div>Some contents...</div>
      <div>Some contents...</div>
    </WModal>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import WInput from '@/components/input/Input.vue';
import WModal from '@/components/modal/Modal.vue';
import WButton from '@/components/button/Button.vue';

@Component({
  components: {
    WInput,
    WButton,
    WModal,
  },
})
export default class TestInput extends Vue {
  value1: string = '这是个输入框';

  modalStatus: boolean = false;
}
</script>

<style lang="scss" scoped>
.test-input {
  width: 300px;
  margin: 8px 0;
}
</style>
