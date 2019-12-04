<template>
  <div>
    <WTextBase :render="baseRender" :slot="$slots.default" />
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import WTextBase from '@/components/text/src/base';

  @Component({
    components: {
      WTextBase,
    },
  })
  export default class WText extends Vue {
    name: string = 'WText';

    @Model('model', { type: [String, Number], default: 0 }) readonly value!:
      | string
      | number;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private strong!: boolean;

    @Prop(Boolean) private underline!: boolean;

    @Prop(Boolean) private mark!: boolean;

    @Prop(Boolean) private code!: boolean;

    @Prop(Boolean) private delete!: boolean;

    @Prop({
      type: String,
      default: '',
    })
    private type!: string;

    @Prop({
      type: [String, Object],
      default: 'background-color: #ffe58f',
    })
    private markStyle!: string | object;

    baseRender(createElement: Function): any {
      let content = this.$slots.default;

      if (this.underline) {
        content = createElement(
          'u',
          {
            class: ['w-text-u', `w-text-u${this.type ? `-${this.type}` : ''}`],
          },
          [content]
        );
      }

      if (this.strong) {
        content = createElement(
          'strong',
          {
            class: 'w-text-strong',
          },
          [content]
        );
      }

      if (this.code) {
        content = createElement(
          'code',
          {
            class: 'w-text-code',
          },
          [content]
        );
      }

      if (this.mark) {
        let { markStyle } = this;

        if (this.code) {
          markStyle = Object.assign(this.markStyle, {
            background: 'transparent',
          });
        }

        content = createElement(
          'mark',
          {
            class: 'w-text-mark',
            style: markStyle,
          },
          [content]
        );
      }

      if (this.delete) {
        content = createElement(
          'del',
          {
            class: 'w-text-delete',
          },
          [content]
        );
      }

      const textChilds = [content];

      return createElement(
        'span',
        {
          class: [
            'w-text',
            `w-text${this.type ? `-${this.type}` : ''}`,
            {
              'w-text-disabled': this.disabled,
            },
          ],
        },
        textChilds
      );
    }
  }
</script>

<style lang="scss">
  @import 'text.scss';
</style>
