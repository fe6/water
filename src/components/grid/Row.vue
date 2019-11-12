<script lang="ts">
  import { VNode } from 'vue';
  import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
  import getSpacing from './helper';

  interface ProvideEntity {
    basin: number;
    gutter: number;
    type: string;
  }

  @Component
  export default class Row extends Vue {
    preName = 'w-row';

    name = 'Row';

    @Prop({
      type: String,
      default: 'div',
    })
    private tag!: string;

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
      return {
        [`${this.preName}`]: !this.type,
        [`${this.preName}-${this.type}`]: !!this.type,
        [`${this.preName}-${this.align}`]: !this.type && !!this.align,
        [`${this.preName}-${this.justify}`]: !this.type && !!this.justify,
      };
    }

    get rowStyle(): string {
      const gapGutter = getSpacing(this.gutter);
      const gapBasin = getSpacing(this.basin);
      const gutter = `margin-left: -${gapGutter};margin-right: -${gapGutter};`;
      const basin = `margin-top: -${gapBasin};margin-bottom: -${gapBasin};`;
      return `${gutter}${basin}`;
    }

    render(h: Function): VNode {
      return h(
        this.tag,
        {
          class: [this.classList, this.className],
          style: this.rowStyle,
        },
        this.$slots.default
      );
    }
  }
</script>

<style lang="scss">
  @import './row.scss';
</style>
