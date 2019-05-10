<script lang="ts">
import { VNode } from 'vue';
import {
  Component, Vue, Prop, Inject,
} from 'vue-property-decorator';
import SPACE from './space';
import getSpacing from './helper';

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

  @Inject() private basin!: number;

  @Inject() private gutter!: number;

  @Inject() private type!: string;

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
      class: [this.preName, {
        [`w-col-${this.type}`]: !!this.type,
      }, this.customize, this.className],
      style: this.colStyle,
    }, this.$slots.default);
  }
}
</script>

<style lang="scss">
@import './col.scss';
</style>
