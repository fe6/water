<template>
  <div class="w-checkbox-group" :class="className">
    <Checkbox
      v-for="(item, itemIndex) in options"
      :key="item[fieldNames.key] || itemIndex"
      :disabled="disabled || item[fieldNames.disabled]"
      :hover-color="hoverColor"
      :check-color="checkColor"
      :value="
        checkValue.find(
          (cItem) =>
            cItem === item[fieldNames.label] || cItem === item[fieldNames.value]
        )
      "
      :label="item[fieldNames.label] || item[fieldNames.value]"
      :class="checkboxClassName"
      @change="checkFn($event, item)"
      >{{ item[fieldNames.value] }}</Checkbox
    >
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import Checkbox from './Checkbox.vue';
  import { hasOwn } from '../../helper/o';

  interface OptionsEntity {
    [propName: string]: any;
  }

  interface FieldNamesEntity {
    value: string;
    label: string;
    key: string;
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
    name = 'CheckboxGroup';

    @Model('model', { type: Array, default: () => [] }) readonly value!: [];

    @Prop(Boolean) private disabled!: boolean;

    @Prop(String) private hoverColor!: string;

    @Prop(String) private checkColor!: string;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    @Prop([String, Object, Array]) private checkboxClassName!:
      | string
      | object
      | any[];

    @Prop({
      type: Object,
      default: (): FieldNamesEntity => ({
        value: 'value',
        label: 'label',
        key: 'key',
        disabled: 'disabled',
      }),
    })
    private fieldNames!: FieldNamesEntity;

    @Prop({
      type: Array,
      default: () => [],
    })
    private options!: OptionsEntity[];

    @Prop({
      type: Function,
      default: () => {},
    })
    private change?: Function;

    get checkValue(): string[] {
      return this.value;
    }

    @Emit('change')
    checkFn(ev: Event, item: OptionsEntity): ReturnParamsEntity {
      const reParams: ReturnParamsEntity = {
        ev,
      };
      const { disabled, value, label } = this.fieldNames;

      if (!this.disabled && !item[disabled]) {
        const checkValue: any = hasOwn(item, label) ? item[label] : item[value];
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
  @import 'checkboxgroup.scss';
</style>
