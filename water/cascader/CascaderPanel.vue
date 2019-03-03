<template>
  <div style="display: inline-block" v-doc-click="bodyClick">
    <ul class="w-cascader-list">
      <w-option mode="cascader" :active="panelIndex === optOneIndex" :class="{
        ['w-cascader-last']: !optOne[fieldNames.children] || optOne[fieldNames.children].length < 1,
        ['w-cascader-loading']: optOne[fieldNames.loading],
      }" :key="`${optOne[fieldNames.value]}_${floor}_${optOneIndex}`" v-for="(optOne, optOneIndex) in option" @optionChange="optChange" :disabled="optOne.disabled" :loading="optOne[fieldNames.loading]">{{optOne[fieldNames.value]}}</w-option>
    </ul>
    <w-cascader-panel :option="panelData" v-if="panelData.length > 0" :floor="floor + 1" @panelChange="panelChange" v-model="value" :oldValue="value.slice()" :fieldNames="fieldNames"></w-cascader-panel>
  </div>
</template>
<script>
import { hasOwn } from '../utils/o';
import docClick from '../directives/doclick';
import props from './props/cascader-panel';
import WOption from '../select/Option';

export default {
  name: 'WCascaderPanel',
  data() {
    return {
      panelData: [],
      currentOption: {},
      panelIndex: -1,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  mounted() {
    this.optChange(this.value[this.floor], false, false);
  },
  methods: {
    optChange(current, ev, emit) {
      if (current) {
        const { children, value } = this.fieldNames;
        const newOption = this.option.find(optItem => optItem[value] === current);
        // 如果当前禁用
        if (newOption
          && hasOwn(newOption, 'disabled')
          && newOption.disabled
          && ev) {
          ev.stopPropagation();
          return;
        }
        const hasChild = newOption && hasOwn(newOption, children) && newOption[children].length > 0;
        this.panelData = hasChild ? newOption[children].slice() : [];
        this.panelIndex = this.option.findIndex(optItem => optItem[value] === current);
        this.setValue(current, !!ev);
        if (!emit) {
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
    },
    // 运用数组的引用来做
    // resetValue {Boolean} true 是否当前索引( this.floor )之后的数据
    setValue(current, resetValue = true) {
      this.value.splice(this.floor, 1, current);
      // 如果重选了，就清除之后的
      while (this.value.length - 1 > this.floor && resetValue) {
        this.value.pop();
      }
    },
    reset() {
      this.panelData = [];
      this.panelIndex = -1;
    },
    panelChange(currentOption, ev) {
      this.$emit('panelChange', currentOption, ev);
    },
    bodyClick() {
      const { nextPanel = [] } = this.currentOption;
      if (nextPanel.length) {
        this.reset();
        this.optChange(this.oldValue[this.floor], false, true);
        this.currentOption = {};
      }
    },
  },
  directives: { docClick },
  components: {
    WOption,
  },
  watch: {
    option() {
      this.reset();
      this.optChange(this.value[this.floor], false, true);
    },
    value(newValue, oldValue) {
      // 如果有三条数据，选一个就关上，就恢复下拉
      if (newValue.toString() !== oldValue.toString()) {
        this.optChange(this.value[this.floor], false, true);
      }
      // 如果点击删除
      if (!newValue.length) {
        this.reset();
      }
    },
  },
};
</script>
