<script lang="ts">
import { VNode } from 'vue';
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import SPACE from './space';
import getSpacing from './helper';
import { isString, isNumber } from '../../helper/type';
import { findUpNode } from '../../helper/node';

interface colStyleEntity {
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

@Component
export default class Col extends Vue {
  preName: string = 'w-col';

  @Prop({
    type: String,
    default: 'div',
  }) private tag!: string;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Prop(Number) private span!: number;

  @Prop(Number) private order!: number;

  @Prop(Number) private offset!: number;

  @Prop(Number) private pull!: number;

  @Prop(Number) private push!: number;

  @Prop(Number) private xs!: number | object;

  @Prop(Number) private sm!: number | object;

  @Prop(Number) private md!: number | object;

  @Prop(Number) private lg!: number | object;

  @Prop(Number) private xl!: number | object;

  @Prop(Number) private xxl!: number | object;

  get parent(): any {
    return findUpNode(this, 'Row');
  }

  get gutter(): number {
    const { gutter } = this.parent;
    return isNumber(gutter) ? gutter : 0;
  }

  get basin(): number {
    const { basin } = this.parent;
    return isNumber(basin) ? basin : 0;
  }

  get type(): string {
    const { type } = this.parent;
    return isString(type) ? `${this.preName}-${type}` : '';
  }

  get colStyle(): colStyleEntity {
    const gutter = getSpacing(this.gutter);
    const basin = getSpacing(this.basin);

    return {
      paddingLeft: gutter,
      paddingRight: gutter,
      paddingTop: basin,
      paddingBottom: basin,
    };
  }

  get customize(): string[] {
    const customize: string[] = SPACE.filter((size: string): string => (this as any)[size]);

    return customize.map((prop: string): string => `${this.preName}-${(this as any)[prop]}-${prop}`);
  }

  render(h: Function): VNode {
    return h('div', {
      class: [this.preName, this.type, this.customize, this.className],
      style: this.colStyle,
    }, this.$slots.default);
  }
}
</script>

<style lang="scss">
@import './col.scss';
</style>
