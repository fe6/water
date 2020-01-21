/** @format */

import { Component, Prop, Vue } from 'vue-property-decorator';
import { VNode } from 'vue/types/umd';
import { tupleNum, tuple, warn } from '@fe6/water-shared';
import WText from '@fe6/water-text';

const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5, 6);
const BORDER_ELE_LIST = tuple('', 'left');

@Component
export default class WTitle extends Vue {
  @Prop(Boolean) private disabled!: boolean;

  @Prop(Boolean) private underline!: boolean;

  @Prop(Boolean) private mark!: boolean;

  @Prop(Boolean) private code!: boolean;

  @Prop(Boolean) private delete!: boolean;

  @Prop({
    type: Number,
    default: 1,
  })
  private level!: typeof TITLE_ELE_LIST[number];

  @Prop({
    type: String,
    default: '',
  })
  private border!: string;

  @Prop({
    type: String,
    default: '',
  })
  private type!: string;

  @Prop([String, Object])
  private markStyle!: string | object;

  @Prop([String, Object]) private className!: string | object;

  getCompTag(level: string): string {
    if (TITLE_ELE_LIST.indexOf(level as any) !== -1) {
      return `h${level}`;
    }
    warn('Title only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value.');
    return 'h1';
  }

  getBorder(border: string): string {
    if (BORDER_ELE_LIST.indexOf(border as any) !== -1) {
      return this.border;
    }
    warn('Title only accept `left` as `border` value.');
    return '';
  }

  render(h: Function): VNode {
    const { border, level, ...props } = this.$props;
    const tag: string = this.getCompTag(level);
    const borderDir: string = this.getBorder(border);

    return h(
      WText,
      {
        class: [
          `w-title-h${this.level}`,
          {
            [`w-title-border-${borderDir}`]: !!borderDir,
          },
          props.className,
        ],
        props: {
          tag,
          ...props,
        },
      },
      this.$slots.default,
    );
  }
}
