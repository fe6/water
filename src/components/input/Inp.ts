import { VNode } from 'vue';
import {
  Component,
  Model,
  Prop,
  Vue,
} from 'vue-property-decorator';

export interface ReturnParamsEntity {
  ev: Event;
  value: string;
}

@Component
export default class Inp extends Vue {
  name: string = 'Input';

  preName: string = 'w-input-';

  beError: boolean = false;

  @Model('model', { type: String }) readonly value!: string;

  @Prop(String) private placeholder!: string;

  @Prop(String) private size!: string;

  @Prop({
    type: String,
    default: 'text',
  }) private type!: string;

  @Prop(Boolean) private disabled!: boolean;

  @Prop({
    type: Function,
    default: (): boolean => false,
  }) private error?: Function;

  @Prop({
    type: Function,
    default: () => {},
  }) private change?: Function;

  get classList(): any[] {
    return [
      `w-input${this.size ? `-${this.size}` : ''}`,
      {
        'w-input-disabled': this.disabled,
        'w-input-error': this.beError,
      },
    ];
  }

  mounted() {
    this.beError = (this.error as Function)({}, this.value);
  }

  render(h: Function): VNode {
    return h('input', {
      class: [
        'w-input',
        this.classList,
      ],
      attrs: {
        type: this.type,
        placeholder: this.placeholder,
        value: this.value,
        disabled: this.disabled,
      },
      on: {
        input: (ev: Event): void => {
          const { value } = (ev.target as any);
          const reParams: ReturnParamsEntity = {
            ev,
            value,
          };

          this.beError = (this.error as Function)(reParams);
          this.$emit('model', value);
          this.$emit('change', reParams);
          (this.change as Function)(reParams);
        },
      },
    });
  }
}
