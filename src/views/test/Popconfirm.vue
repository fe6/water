<template>
  <div>
    <h1>弹框中的输入框</h1>
    <WButton @click="modalStatus = true">点击</WButton>
    <WPopconfirm v-model="modalStatus" placement="bottomLeft">
      <span>点击我。</span>
      <div slot="content">
        <WInput
          v-model="value1"
          class="test-input"
          maxLength="10"
          show-word-limit
          size="small"
          style="width: auto;"
        ></WInput>
        <a href="https://github.com/fe6/water" target="_blank">水滴</a>
        官网，大家可以去看看，提提建议。
      </div>
    </WPopconfirm>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import WInput from '@/components/input/Input.vue';
import WPopconfirm from '@/components/popconfirm/Popconfirm.vue';
import WButton from '@/components/button/Button.vue';

@Component({
  components: {
    WInput,
    WButton,
    WPopconfirm,
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
