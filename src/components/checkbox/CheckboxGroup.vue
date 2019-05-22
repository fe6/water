<template>
  <div class="w-checkbox-group" :class="className">
    <Checkbox
      v-for="(item, itemIndex) in options"
      :key="item[fieldNames.label] || itemIndex"
      @change="checkFn($event, item)"
      :disabled="disabled || item[fieldNames.disabled]"
      :value="checkValue.includes(item[fieldNames.value])"
      :class="checkboxClassName"
    >{{item[fieldNames.value]}}</Checkbox>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import Checkbox from './Checkbox.vue';

interface OptionsEntity {
  value: string;
  [propName: string]: any;
}

interface FieldNamesEntity extends OptionsEntity {
  label: string;
  disabled: string;
}

interface ReturnParamsEntity {
  ev: Event;
  value?: any;
  item?: any;
  status?: boolean;
}

@Component({
  components: {
    Checkbox,
  },
})
export default class CheckboxGroup extends Vue {
  name: string = 'CheckboxGroup';

  @Model('model', { type: Array, default: () => [] }) readonly value!: [];

  @Prop(Boolean) private disabled!: boolean;

  @Prop([String, Object, Array]) private className!: string | object | any[];

  @Prop([String, Object, Array]) private checkboxClassName!: string | object | any[];

  @Prop({
    type: Object,
    default: (): FieldNamesEntity => ({
      value: 'value',
      label: 'label',
      disabled: 'disabled',
    }),
  }) private fieldNames!: FieldNamesEntity;

  @Prop({
    type: Array,
    default: () => [],
  }) private options!: OptionsEntity[];

  @Prop({
    type: Function,
    default: () => {},
  }) private change?: Function;

  get checkValue(): string[] {
    return this.value;
  }

  @Emit('change')
  checkFn(ev: Event, item: OptionsEntity): ReturnParamsEntity {
    const reParams: ReturnParamsEntity = {
      ev,
    };
    const { disabled, value } = this.fieldNames;

    if (!this.disabled && !item[disabled]) {
      const checkValue: any = item[value];
      const valueIndex: number = (this.value as string[]).indexOf(checkValue);
      const checkStatus: boolean = valueIndex > -1;

      if (checkStatus) {
        (this.value as string[]).splice(valueIndex, 1);
      } else {
        (this.value as string[]).push(checkValue);
      }

      reParams.status = checkStatus;
      reParams.value = checkValue;
      reParams.item = item;
    }

    (this.change as Function)(reParams);

    return reParams;
  }
}
</script>

<style lang="scss">
  @import "checkboxgroup.scss";
</style>
