<template>
  <div class="w-radio-group" :class="className">
    <Radio
      v-for="(item, itemIndex) in options"
      :key="item[fieldNames.key] || itemIndex"
      :disabled="disabled || item[fieldNames.disabled]"
      :value="checkValue"
      :class="radioClassName"
      :label="item[fieldNames.label]"
      :before="before.bind(this, item)"
      :loading="item[fieldNames.loading]"
      :hover-color="hoverColor"
      :check-color="checkColor"
      @change="radioChange"
      >{{ item[fieldNames.value] }}</Radio
    >
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import Radio, { ReturnParamsEntity } from './Radio.vue';

  interface OptionsEntity {
    [propName: string]: any;
  }

  interface FieldNamesEntity {
    value: string;
    label: string;
    disabled: string;
    loading: string;
    key?: number | string;
  }

  @Component({
    components: {
      Radio,
    },
  })
  export default class RadioGroup extends Vue {
    name = 'RadioGroup';

    @Model('model', { type: [String, Number, Boolean], default: '' })
    readonly value!: string | number | boolean;

    @Prop({
      type: Array,
      default: () => [],
    })
    private options!: OptionsEntity[];

    @Prop({
      type: Object,
      default: (): FieldNamesEntity => ({
        value: 'value',
        label: 'label',
        key: 'key',
        loading: 'loading',
        disabled: 'disabled',
      }),
    })
    private fieldNames!: FieldNamesEntity;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(String) private hoverColor!: string;

    @Prop(String) private checkColor!: string;

    @Prop([String, Object, Array]) private className!: string | object | any[];

    @Prop([String, Object, Array]) private radioClassName!:
      | string
      | object
      | any[];

    @Prop({
      type: Function,
      default() {
        return new Promise((resolve) => {
          resolve();
        });
      },
    })
    private before!: Function;

    @Prop({
      type: Function,
      default: () => {},
    })
    private change?: Function;

    get checkValue(): string | number | boolean {
      return this.value;
    }

    @Emit('change')
    radioChange(params: ReturnParamsEntity) {
      this.radioModel(params);
    }

    @Emit('model')
    radioModel(params: ReturnParamsEntity): string | number | boolean {
      (this.change as Function)(params);
      return params.value;
    }
  }
</script>

<style lang="scss">
  @import 'radiogroup.scss';
</style>
