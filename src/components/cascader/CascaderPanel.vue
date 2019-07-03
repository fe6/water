<template>
  <div style="display: inline-block" v-doc-click="bodyClick">
    <ul class="w-cascader-list">
      <w-option
        mode="cascader"
        :active="panelIndex === optOneIndex"
        :class="{
          ['w-cascader-last']:
            !optOne[fieldNames.children]
            || optOne[fieldNames.children].length < 1,
          ['w-cascader-loading']: optOne[fieldNames.loading],
        }"
        :key="`${optOne[fieldNames.value]}_${floor}_${optOneIndex}`"
        v-for="(optOne, optOneIndex) in option"
        @optionChange="handleOptionChange"
        :disabled="optOne.disabled || false"
        :value="optOne.value"
        :label="optOne.label"
        :loading="optOne[fieldNames.loading]"
        :fieldNames="fieldNames"
      >{{optOne[fieldNames.value]}}</w-option>
    </ul>
    <cascader-panel
      :option="panelData"
      v-if="panelData.length > 0"
      :floor="floor + 1"
      @panelChange="panelChange"
      v-model="value"
      :oldValue="value.slice()"
      :fieldNames="fieldNames"
    ></cascader-panel>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Model,
  Prop,
  Watch,
  Vue,
} from 'vue-property-decorator';
import docClick from '@/directives/doclick';
import { noop, noopArray } from '@/helper/noop';
import { hasOwn } from '@/helper/o';
import WOption from '../select/Option.vue';
import {
  OptionsEntity,
  FieldNamesEntity,
  ReturnParamsEntity,
  fieldNamesDefault,
} from './entity';

Vue.directive('doc-click', (docClick as any));

@Component({
  components: {
    WOption,
  },
})
export default class CascaderPanel extends Vue {
  panelData: any[] = [];

  currentOption: any = {};

  panelIndex: number = -1;

  @Model('model', { type: Array }) readonly value!: string[];

  @Prop({
    type: Array,
    default: noopArray,
  }) private oldValue!: string[];

  @Prop({
    type: Array,
    default: noop,
  }) private option!: any[];

  @Prop({
    type: Object,
    default: (): FieldNamesEntity => fieldNamesDefault,
  }) private fieldNames!: FieldNamesEntity;

  @Prop({
    type: Number,
    default: 0,
  }) private floor!: number;

  mounted() {
    this.optChange(this.value[this.floor], undefined, false);
  }

  handleOptionChange(current: ReturnParamsEntity, ev: MouseEvent | undefined) {
    this.optChange(current[this.fieldNames.label], ev, false);
  }

  optChange(current: string, ev: MouseEvent | undefined, emit: boolean) {
    if (current) {
      const { children, label } = this.fieldNames;
      const newOption = this.option.find(optItem => optItem[label] === current);

      // 如果当前禁用
      if (newOption
        && hasOwn(newOption, 'disabled')
        && newOption.disabled
        && ev) {
        ev.stopPropagation();
        return;
      }

      const hasChild = newOption && hasOwn(newOption, children) && newOption[children].length > 0;

      this.setValue(current, !!ev);

      if (!emit) {
        this.panelData = hasChild ? newOption[children].slice() : [];
        this.panelIndex = this.option.findIndex(optItem => optItem[label] === current);
        this.currentOption = {
          value: this.value,
          current,
          option: newOption,
          index: this.panelIndex,
          floor: this.floor,
          nextPanel: this.panelData,
        };
        this.$emit('panelChange', this.currentOption, ev);
      }
      // 如果是最后一个就关上下拉 or 当前不可选
      if (hasChild && ev) {
        ev.stopPropagation();
      }
    }
  }

  // 运用数组的引用来做
  // resetValue {Boolean} true 是否当前索引( this.floor )之后的数据
  setValue(current: string, resetValue: boolean) {
    this.value.splice(this.floor, 1, current);
    // 如果重选了，就清除之后的
    while (this.value.length - 1 > this.floor && resetValue) {
      this.value.pop();
    }
  }

  reset() {
    this.panelData = [];
    this.panelIndex = -1;
  }

  panelChange(currentOption: ReturnParamsEntity, ev: MouseEvent) {
    this.$emit('panelChange', currentOption, ev);
  }

  bodyClick() {
    const { nextPanel = [] } = this.currentOption;
    if (nextPanel.length) {
      this.reset();
      this.optChange(this.oldValue[this.floor], undefined, true);
      this.currentOption = {};
    }
  }

  @Watch('option')
  watchOption() {
    this.reset();
    this.optChange(this.value[this.floor], undefined, true);
  }

  @Watch('value')
  watchValue(newValue: string[], oldValue: string[]) {
    // 如果有三条数据，选一个就关上，就恢复下拉
    if (newValue.toString() !== oldValue.toString()) {
      this.optChange(this.value[this.floor], undefined, true);
    }
    // 如果点击删除
    if (!newValue.length) {
      this.reset();
    }
  }
}
</script>
