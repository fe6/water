<template>
  <div class="w-cascader-wrap" :class="{
    ['w-cascader-active']: !!result.length || searchKeyWord,
    ['w-cascader-wrapdisabled']: disabledValue,
    }" @click="cascaderClick($event)" ref="cascader" v-doc-click="bodyClick">
    <slot v-if="$slots.default"></slot>
    <div
      class="w-cascader"
      :class="{
        ['w-cascader-disabled']: disabledValue,
      }"
      v-else
    >
      <div
        class="w-cascader-result"
        v-if="(
          !search && (changeOnSelect ? newData.length : (result.length || resultValue.length))
        )"
        :class="{
          [`w-cascader-result-${this.size}`]: this.size,
          ['w-cascader-result-disabled']: disabledValue,
        }"
      >
        <w-cascader-render
          :render="displayRender"
          :data="changeOnSelect ? newData : result"
          :result="result"
          :option="options"
          :currentOption="currentOption"
          v-if="displayRender"
        ></w-cascader-render>
        <template v-else>
          {{changeOnSelect ? newData.join(' / ') : resultValue.join(' / ')}}
        </template>
      </div>
      <input
        class="w-cascader-input"
        :class="{
          [`w-cascader-input-${this.size}`]: this.size,
          ['w-cascader-input-active']:
            (changeOnSelect ? newData.length : result.length)
            && !optStatus,
          ['w-cascader-input-disabled']: disabledValue,
        }"
        type="text"
        ref="input"
        :readonly="!search && !optStatus"
        v-else
        autocomplete="off"
        aria-label="input"
        :placeholder="
          (changeOnSelect ? newData.join(' / ') : resultValue.join(' / '))
          || placeholder
        "
        v-model="searchKeyWord"
        @keyup.enter="searchEnter($event)"
        @keyup.down="searchKeyDown"
        @keyup.up="searchKeyUp"
      >
      <i :class="{
        ['w-cascader-loading']: loading,
        ['w-cascader-arrow']: !loading,
        ['w-cascader-arrow-active']: !loading && optStatus,
      }"></i>
      <i class="w-cascader-remove" :class="{
        ['w-cascader-remove-active']: (!!result.length && !loading) || searchKeyWord,
      }" @click="clear($event)"></i>
    </div>
    <div
      class="w-cascader-option"
      v-transfer-dom="getContainer && getContainer()"
      :data-transfer="transfer"
      :class="optionClass"
      ref="popElem"
    >
      <w-cascader-search
        :search="searchData"
        :getSearchResult="getSearchResult"
        :emptyText="emptyText"
        :width="searchWidth"
        :searchKeyWord="searchKeyWord"
        :change="searchChange"
        :hoverIndex="searchHoverIndex"
        :searchRender="searchRender"
        v-if="searchKeyWord"
      ></w-cascader-search>
      <w-cascader-panel
        :option="options"
        @panelChange="panelChange"
        v-model="newData"
        :oldValue="oldData.slice()"
        :fieldNames="fieldNames"
        v-else
      ></w-cascader-panel>
    </div>
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
import { mixins } from 'vue-class-component';
import addDOMEventListener from 'add-dom-event-listener';
import TransferDom from '@/directives/transfer-dom';
import docClick from '@/directives/doclick';
import { objToPath, getValueUseLabel } from '@/helper/o';
import { findEnabled } from '@/helper/option';
import { noop } from '@/helper/noop';
import {
  OptionsEntity,
  FieldNamesEntity,
  ReturnParamsEntity,
  fieldNamesDefault,
} from './entity';
import {
  setPostion,
} from '@/helper/poper';
import poperMixin from '@/helper/popermixin';
import WCascaderPanel from './CascaderPanel.vue';
import WCascaderRender from './cascader-render';
import WCascaderSearch from './cascader-search';

Vue.directive('transfer-dom', (TransferDom as any));

Vue.directive('doc-click', (docClick as any));

@Component({
  components: {
    WCascaderPanel,
    WCascaderRender,
    WCascaderSearch,
  },
})
export default class Cascader extends mixins(poperMixin) {
  optStatus: boolean = false;

  searchKeyWord: string = '';

  searchHoverIndex: number = -1;

  searchResult: any[] = [];

  // 如果没指定 v-model ，就存到这里，以便使用数组引用进行更新
  // 解决不传 v-model ， 点击选中三级 ， 再显示，不选再关上，删除之后的问题
  defValue: string[] = [];

  result: any[] = [];

  currentOption: any = {};

  resizeEvent: any = null;

  @Model('model', { type: Array }) readonly value!: string[];

  @Prop({
    type: Array,
    default: noop,
  }) private options!: any[];

  @Prop({
    type: String,
    default: '未匹配到结果',
  }) private emptyText!: string;

  @Prop({
    type: String,
    default: '220px',
  }) private searchWidth!: string;

  @Prop({
    type: String,
    default: '220px',
  }) private placeholder!: string;

  @Prop({
    type: String,
    default: 'bottomLeft',
  }) private placement!: string;

  @Prop(String) private size!: string;

  @Prop(Boolean) private loading!: boolean;

  @Prop(Boolean) private disabled!: boolean;

  @Prop(Boolean) private search!: boolean;

  @Prop(Boolean) private changeOnSelect!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  }) private transfer!: boolean;

  @Prop({
    type: Number,
    default: 4,
  }) private interval!: number;

  @Prop({
    type: Object,
    default: (): FieldNamesEntity => fieldNamesDefault,
  }) private fieldNames!: FieldNamesEntity;

  @Prop({
    type: Function,
    default() {
      return new Promise((resolve) => {
        (this as any).$nextTick(() => {
          resolve();
        });
      });
    },
  }) private before!: Function;

  @Prop(Function) private getContainer!: Function;

  @Prop(Function) private searchRender!: Function;

  @Prop(Function) private displayRender!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private change!: Function;

  @Prop({
    type: Function,
    default: noop,
  }) private click!: Function;

  get optData() {
    return this.options.slice();
  }

  get searchData() {
    return objToPath(this.optData, this.fieldNames).slice();
  }

  get hasValue() {
    return !!this.value;
  }

  get resultValue() {
    return getValueUseLabel(this.newData, this.options, this.fieldNames).slice();
  }

  get newData() {
    const value = this.hasValue ? this.value : this.defValue;
    return value.slice();
  }

  // 用于value 为空，点击一级然后关上想下拉的回复
  get oldData() {
    return this.changeOnSelect ? this.newData.slice() : this.result.slice();
  }

  get disabledValue() {
    return this.disabled;
  }

  get optionClass() {
    return {
      'w-cascader-option-show': this.optStatus,
    };
  }

  mounted() {
    this.resizeEvent = addDOMEventListener(window, 'resize', this.resizeChange);
  }

  beforeDestroy() {
    this.resizeEvent.remove();
  }

  resizeChange() {
    setPostion(this, 'cascader');
  }

  updateValue(value: string[]) {
    if (this.hasValue) {
      this.$emit('model', value);
    } else {
      this.defValue = value;
    }
  }

  @Emit('change')
  panelChange({
    value, current, option, index, floor, nextPanel,
  }: ReturnParamsEntity, ev: MouseEvent) {
    this.currentOption = {
      value,
      current,
      index,
      floor,
      nextPanel,
      ev,
      item: option,
      options: this.options,
    };
    this.updateValue(value);
    this.change(this.currentOption, ev);
    // 如果到最后一个选项了就更新显示，在不及时显示选项的模式( changeOnSelect )下
    if (!nextPanel.length) {
      this.result = value.slice();
    }

    return this.currentOption;
  }

  cascaderClick(ev: MouseEvent) {
    if (!this.disabledValue) {
      this.before().then(() => {
        this.setStatus(true);
        this.$nextTick(() => {
          setPostion(this, 'cascader');
          if (this.search) {
            this.searchFocus();
          }
          this.$emit('click', ev);
          this.click(ev);
        });
      });
    }
  }

  bodyClick() {
    if (this.optStatus) {
      this.setStatus(false);
      this.reset();
      this.searchReset();
    }
  }

  // 清除当前选中的所有
  popValue() {
    const value = this.hasValue ? this.value : this.defValue;
    // 清除所有
    while (value.length) {
      value.pop();
    }
    return value;
  }

  reset() {
    const { nextPanel = [] } = this.currentOption;
    if (nextPanel.length && !this.changeOnSelect) {
      const value = this.popValue();
      // 恢复之前设置的
      this.result.forEach((res) => {
        value.push(res);
      });
      this.updateValue(value);
    }
  }

  clear(ev: MouseEvent) {
    this.result = [];
    // 清除所有
    this.updateValue(this.popValue());

    if (this.search && this.searchKeyWord) {
      this.searchReset();
      this.searchFocus();
    }

    ev.stopPropagation();
  }

  setStatus(val: boolean) {
    this.optStatus = val;
  }

  searchFocus() {
    const inputElement = this.$refs.input;
    if (inputElement) {
      (inputElement as any).focus();
    }
  }

  searchblur() {
    const inputElement = this.$refs.input;
    if (inputElement) {
      (inputElement as any).blur();
    }
  }

  searchChange(searchOption: ReturnParamsEntity, ev: MouseEvent) {
    this.panelChange(searchOption, ev);
    this.searchReset();
  }

  getSearchResult(result: string[]) {
    this.searchResult = result;
  }

  searchEnter(ev: MouseEvent) {
    if (this.searchResult.length) {
      const {
        value,
        option,
        index,
        floor,
        nextPanel,
      } = this.searchResult[Math.max(this.searchHoverIndex, 0)];
      const changeParams: ReturnParamsEntity = {
        value,
        current: value[value.length - 1],
        option,
        index,
        floor,
        nextPanel,
      };
      this.panelChange(changeParams, ev);
    }
    this.searchReset();
    this.setStatus(false);
    this.searchblur();
  }

  searchKeyDown() {
    // 递增索引
    this.searchHoverIndex = ++this.searchHoverIndex % this.searchResult.length;
    // 略过不可用
    this.searchHoverIndex = findEnabled(
      this.searchResult,
      this.searchHoverIndex,
      1,
      this.fieldNames,
    );
  }

  searchKeyUp() {
    // 递减索引
    this.searchHoverIndex = (
      this.searchResult.length + --this.searchHoverIndex
    ) % this.searchResult.length;
    // 略过不可用
    this.searchHoverIndex = findEnabled(
      this.searchResult,
      this.searchHoverIndex,
      -1,
      this.fieldNames,
    );
  }

  searchReset() {
    this.searchHoverIndex = -1;
    this.searchKeyWord = '';
  }
}
</script>

<style lang="scss">
  @import "cascader.scss";
</style>
