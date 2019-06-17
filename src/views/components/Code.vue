<template>
  <div>
    <codemirror
      :class="{
        ['code-mirror']: border,
        ['code-auto']: height,
      }"
      v-model="code"
      :options="cmOptions"
    ></codemirror>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Vue,
} from 'vue-property-decorator';
import 'codemirror/mode/vue/vue';
import 'codemirror/theme/xq-light.css';

interface CmOptionsEntity {
  mode: string;
  theme: string;
  lineNumbers: boolean;
  line: boolean;
  styleActiveLine: boolean;
  readOnly: boolean;
}

@Component
export default class Code extends Vue {
  @Model('model', { type: String }) readonly code!: string;

  @Prop({ type: String, default: 'vue' }) private lang!: string;

  @Prop({ type: Boolean }) private border!: boolean;

  @Prop({ type: Boolean, default: true }) private height!: boolean;

  get getLang(): string {
    let langValue = this.lang;

    switch (langValue) {
      case 'js':
        langValue = 'javascript';
        break;
      default:
        langValue = 'x-vue';
        break;
    }

    return langValue;
  }

  get cmOptions():CmOptionsEntity {
    return {
      styleActiveLine: true,
      lineNumbers: true,
      line: true,
      mode: `text/${this.getLang}`,
      theme: 'xq-light',
      readOnly: true,
    };
  }
}
</script>

<style lang="scss" scope>
  @import "../../assets/style/components/code.scss";
</style>
