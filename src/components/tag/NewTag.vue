<template>
  <div
    v-if="!inputStatus"
    ref="newtag"
    class="w-newtag"
    :class="classList"
    @click="clickFn($event)"
    @animationend="removeClickName"
  >
    <i class="w-newtag-icon"></i>
    <slot></slot>
  </div>
  <w-input
    v-else
    ref="input"
    v-model="inputValue"
    v-doc-click="bodyClick"
    class="w-newtag-input"
    :class="{
      ['w-newtag-input-loading']: !loading,
      'w-newtag-input-lg': this.size === 'large',
      'w-newtag-input-sm': this.size === 'small',
    }"
    :placeholder="placeholder"
    :error="error"
    :style="`width: ${inputWidth}px`"
    @keyup.native.enter="inputEnter"
  >
    <w-icon v-show="loading" slot="suffix" spin />
  </w-input>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import WInput from '@/components/input/Input.vue';
  import WIcon from '@/components/icon/Icon.vue';
  import docClick from '@/directives/doclick';

  Vue.directive('doc-click', docClick as any);

  interface ReturnEntity {
    value: string;
  }

  @Component({
    components: {
      WInput,
      WIcon,
    },
  })
  export default class NewTag extends Vue {
    clicked = false;

    inputWidth = 0;

    inputStatus = false;

    inputValue = '';

    @Model('model', { type: String }) readonly value!: string;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private loading!: boolean;

    @Prop(Boolean) private stop!: boolean;

    @Prop(String) private size!: string;

    @Prop(String) private placeholder!: string;

    @Prop({
      type: Function,
      default: (): boolean => false,
    })
    private error!: Function;

    @Prop({
      type: Function,
      default() {
        return new Promise((resolve) => {
          resolve();
        });
      },
    })
    private before!: Function;

    @Prop({
      type: Function,
      default: () => {},
    })
    private change!: Function;

    get classList() {
      return [
        {
          'w-newtag-lg': this.size === 'large',
          'w-newtag-sm': this.size === 'small',
          'w-newtag-disabled': this.disabled,
          'w-tag-click': !this.loading && this.clicked,
        },
      ];
    }

    mounted() {
      this.inputWidth = (this.$refs.newtag as HTMLDivElement).offsetWidth;
    }

    clickFn(ev: MouseEvent) {
      this.clicked = !this.disabled;
      if (this.stop) {
        ev.stopPropagation();
      }
    }

    removeClickName() {
      this.clicked = false;
      this.inputStatus = true;
      this.$nextTick(() => {
        const inputElement = (this.$refs.input as any).$el.querySelector(
          '.w-input'
        ) || { focus: () => {} };
        (inputElement as HTMLInputElement).focus();
      });
    }

    bodyClick() {
      if (!this.error({ value: this.inputValue })) {
        const reParams: ReturnEntity = {
          value: this.inputValue,
        };
        (this.before as Function)(reParams).then(() => {
          this.changeValue();
          this.returnModel();
          this.inputReset();
        });
      }
    }

    inputReset() {
      this.inputValue = '';
      this.inputStatus = false;
    }

    inputEnter() {
      this.bodyClick();
    }

    @Emit('change')
    changeValue(): ReturnEntity {
      const params: ReturnEntity = {
        value: this.inputValue,
      };

      this.change(params);

      return params;
    }

    @Emit('model')
    returnModel() {
      return this.inputValue;
    }
  }
</script>

<style lang="scss">
  @import './newtag.scss';
</style>
