<!-- @format -->

<template>
  <div>
    <codemirror
      v-model="codeValue"
      :class="{
        ['code-mirror']: border,
        ['code-auto']: height,
      }"
      :options="cmOptions"
      @ready="onCmReady"
      @cursorActivity="onCmCursorActivity"
    ></codemirror>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import 'codemirror/mode/vue/vue';
  import 'codemirror/addon/scroll/simplescrollbars';
  import 'codemirror/addon/scroll/simplescrollbars.css';
  import 'codemirror/theme/xq-light.css';

  interface CmOptionsEntity {
    mode: string;
    theme: string;
    gutters: string[];
    autoCloseTags: boolean;
    autoCloseBrackets: boolean;
    lint: boolean;
    lineNumbers: boolean;
    line: boolean;
    styleActiveLine: boolean;
    annotateScrollbar: boolean;
    showToken: any;
    matchTags: any;
    tabSize: number;
    scrollbarStyle: string;
  }

  @Component
  export default class Code extends Vue {
    codemirror: any = null;

    codeValue = '';

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

    get cmOptions(): CmOptionsEntity {
      return {
        styleActiveLine: true,
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        line: true,
        tabSize: 2,
        mode: `text/${this.getLang}`,
        theme: 'xq-light',
        gutters: ['CodeMirror-lint-markers'],
        lint: true,
        showToken: /\w/,
        annotateScrollbar: true,
        matchTags: { bothTags: true },
        scrollbarStyle: 'simple',
      };
    }

    created() {
      this.codeValue = this.code;
    }

    @Emit('mounted')
    onCmReady(codemirror: any) {
      this.codemirror = codemirror;
      return codemirror;
    }

    @Emit('change')
    onCmCursorActivity(codemirror: any) {
      this.codemirror = codemirror;
      return codemirror;
    }
  }
</script>

<style lang="scss" scope>
  @import '../../assets/style/components/code.scss';
</style>
