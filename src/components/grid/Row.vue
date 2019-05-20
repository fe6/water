<script lang="ts">
import { VNode } from 'vue';
import {
  Component, Vue, Prop, Provide,
} from 'vue-property-decorator';

interface ProvideEntity {
  basin: number;
  gutter: number;
  type: string;
}

@Component
export default class Col extends Vue {
  preName: string = 'w-row';

  name: string = 'Row';

  @Prop({
    type: String,
    default: 'div',
  }) private tag!: string;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Prop(String) private align!: string;

  @Prop(String) private justify!: string;

  @Prop(Number) private basin!: number;

  @Prop(Number) private gutter!: number;

  @Prop(String) private type!: string;

  @Provide('basin') rowBasin = this.basin;

  @Provide('gutter') rowGutter = this.gutter;

  @Provide('type') rowType = this.type;

  get classList(): object {
    return [
      {
        [`${this.preName}`]: !this.type,
        [`${this.preName}-${this.type}`]: !!this.type,
        [`${this.preName}-${this.align}`]: !!this.type && !!this.align,
        [`${this.preName}-${this.justify}`]: !!this.type && !!this.justify,
      },
    ];
  }

  get rowStyle(): string {
    const gapGutter = Math.max(this.gutter, 48) / 2;
    const gapBasin = this.basin / 2;
    const gutter = gapGutter > 0 ? `margin-left: -${gapGutter}px;margin-right: -${gapGutter}px;` : '';
    const basin = gapBasin > 0 ? `margin-top: -${gapBasin}px;margin-bottom: -${gapBasin}px;` : '';
    return `${gutter}${basin}`;
  }

  render(h: Function): VNode {
    return h(this.tag, {
      class: [this.preName, this.classList, this.className],
      style: this.rowStyle,
    }, this.$slots.default);
  }
}

</script>

<style lang="scss">
@import './row.scss';
</style>
