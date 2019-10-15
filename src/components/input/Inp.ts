import { VNode } from 'vue';
import {
  Component,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { getMaxLengthValue } from '@/components/input/helpers';
import { isKorean } from '@/helper/type';

export interface ReturnParamsEntity {
  ev: Event;
  value: string;
  maxLength: string | number;
}

@Component
export default class Inp extends Vue {
  name: string = 'Input';

  preName: string = 'w-input-';

  beError: boolean = false;

  isWriting: boolean = false;

  @Model('model', { type: [String, Number] }) readonly value!: string | number;

  @Prop([String, Number]) private maxLength!: string | number;

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
        'w-input-error': this.inputError() || this.beError,
      },
    ];
  }

  mounted() {
    this.beError = (this.error as Function)({}, this.value);
  }

  handleCompositionStart() {
    this.isWriting = true;
  }

  handleCompositionUpdate(ev: Event) {
    const text = (ev.target as any).value;
    const lastCharacter = text[text.length - 1] || '';
    this.isWriting = !isKorean(lastCharacter);
  }

  handleCompositionEnd(ev: Event) {
    if (this.isWriting) {
      this.isWriting = false;
      this.inputHandle(ev);
    }
  }

  inputHandle(ev: Event): void {
    // 如果中文正在输入，不及时更新 v-model ，输入之后再更新
    if (this.isWriting) {
      return;
    }

    const target = (ev.target as any);
    const { value } = target;
    const reParams: ReturnParamsEntity = {
      ev,
      value,
      maxLength: this.maxLength,
    };

    target.value = getMaxLengthValue(value, this.maxLength);

    this.beError = (this.error as Function)(reParams);
    this.$emit('model', getMaxLengthValue(value, this.maxLength));
    this.$emit('change', reParams);
    (this.change as Function)(reParams);
  }

  inputError() {
    const newMax = Number(this.maxLength);
    return newMax > 0 && String(this.value).length > newMax;
  }

  render(h: Function): VNode {
    return h('input', {
      class: this.classList,
      attrs: {
        type: this.type,
        placeholder: this.placeholder,
        value: this.value,
        disabled: this.disabled,
      },
      ref: 'inpEle',
      on: {
        compositionstart: this.handleCompositionStart,
        compositionupdate: this.handleCompositionUpdate,
        compositionend: this.handleCompositionEnd,
        input: this.inputHandle.bind(this),
      },
    });
  }

  @Watch('value')
  getValue() {
    (this.$refs.inpEle as any).value = this.value;
  }
}
