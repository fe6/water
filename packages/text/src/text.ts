/** @format */

import { Component, Prop, Vue } from 'vue-property-decorator';
import { VNode } from 'vue/types/umd';

@Component
export default class WText extends Vue {
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

  @Prop({
    type: [String, Object],
    default: '',
  })
  private className!: string | object;

  render(h: Function): VNode {
    let content = this.$slots.default;

    if (this.underline) {
      content = h(
        'u',
        {
          class: ['w-text-u', `w-text-u${this.type ? `-${this.type}` : ''}`],
        },
        [content],
      );
    }

    if (this.strong) {
      content = h(
        'strong',
        {
          class: 'w-text-strong',
        },
        [content],
      );
    }

    if (this.code) {
      content = h(
        'code',
        {
          class: 'w-text-code',
        },
        [content],
      );
    }

    if (this.mark) {
      let { markStyle } = this;

      if (this.code) {
        markStyle = Object.assign(this.markStyle, {
          background: 'transparent',
        });
      }

      content = h(
        'mark',
        {
          class: 'w-text-mark',
          style: markStyle,
        },
        [content],
      );
    }

    if (this.delete) {
      content = h(
        'del',
        {
          class: 'w-text-delete',
        },
        [content],
      );
    }

    const textChilds = [content];

    return h(
      'span',
      {
        class: [
          {
            'w-text': !!this.type,
          },
          `w-text${this.type ? `-${this.type}` : ''}`,
          {
            'w-text-disabled': this.disabled,
          },
          this.className,
        ],
      },
      textChilds,
    );
  }
}
