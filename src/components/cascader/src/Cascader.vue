<template>
  <div
    ref="cascader"
    v-doc-click="bodyClick"
    class="w-cascader-wrap"
    :class="{
      ['w-cascader-active']: !!realValue.length || searchKeyWord,
      ['w-cascader-wrapdisabled']: disabledValue,
    }"
    @click="cascaderClick($event)"
  >
    <slot v-if="$slots.default"></slot>
    <div
      v-else
      class="w-cascader"
      :class="{
        ['w-cascader-disabled']: disabledValue,
      }"
    >
      <div
        v-if="!search && realValue.length"
        class="w-cascader-result"
        :class="{
          [`w-cascader-result-${this.size}`]: this.size,
          ['w-cascader-result-disabled']: disabledValue,
        }"
      >
        <w-cascader-render
          v-if="displayRender"
          :render="displayRender"
          :real-value="realValue"
          :choose-all-item="chooseAllItem"
          :choose-value="chooseValue"
          :choose-result="chooseResult.slice()"
          :options="options"
          :current-option="currentOption"
        ></w-cascader-render>
        <template v-else>
          {{ chooseValue.join(' / ') }}
        </template>
      </div>
      <input
        v-else
        ref="input"
        v-model="searchKeyWord"
        class="w-cascader-input"
        :class="{
          [`w-cascader-input-${this.size}`]: this.size,
          ['w-cascader-input-active']: realValue.length && !optStatus,
          ['w-cascader-input-disabled']: disabledValue,
        }"
        type="text"
        :readonly="!search"
        autocomplete="off"
        aria-label="input"
        :placeholder="chooseValue.join(' / ') || placeholder"
        @keyup.enter="searchEnter($event)"
        @keyup.down="searchKeyDown"
        @keyup.up="searchKeyUp"
      />
      <i
        :class="{
          ['w-cascader-loading']: loading,
          ['w-cascader-arrow']: !loading,
          ['w-cascader-arrow-active']: !loading && optStatus,
        }"
      ></i>
      <i
        class="w-cascader-remove"
        :class="{
          ['w-cascader-remove-active']:
            (!!realValue.length && !loading) || searchKeyWord,
        }"
        @click="clear($event)"
      ></i>
    </div>
    <div
      ref="popElem"
      v-transfer-dom="getContainer && getContainer()"
      class="w-cascader-option"
      :data-transfer="transfer"
      :class="optionClass"
    >
      <w-cascader-search
        v-if="searchKeyWord"
        :search="searchData"
        :get-search-result="getSearchResult"
        :empty-text="emptyText"
        :width="searchWidth"
        :search-key-word="searchKeyWord"
        :sreach-change="searchChange"
        :hover-index="searchHoverIndex"
        :search-render="searchRender"
      ></w-cascader-search>
      <w-cascader-panel
        v-else
        v-model="realValue"
        :option="options"
        :old-value="defValue.slice()"
        :field-names="fieldNames"
        @panelChange="panelChange"
      ></w-cascader-panel>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Model, Prop, Emit, Vue } from 'vue-property-decorator';
  import { mixins } from 'vue-class-component';
  import addDOMEventListener from 'add-dom-event-listener';
  import TransferDom from '@/directives/transfer-dom';
  import docClick from '@/directives/doclick';
  import { hasOwn } from '@/helper/o';
  import { findEnabled } from '@/helper/option';
  import { noop } from '@/helper/noop';
  import {
    OptionsEntity,
    FieldNamesEntity,
    ReturnParamsEntity,
    fieldNamesDefault,
  } from './entity';
  import { setPostion } from '@/helper/poper';
  import poperMixin from '@/helper/popermixin';
  import WCascaderPanel from '@/components/cascader/src/CascaderPanel.vue';
  import WCascaderRender from '@/components/cascader/src/cascader-render';
  import WCascaderSearch from '@/components/cascader/src/cascader-search';
  import { objToPath, getValueByLabel } from '@/components/cascader/src/helper';

  Vue.directive('transfer-dom', TransferDom as any);

  Vue.directive('doc-click', docClick as any);

  @Component({
    components: {
      WCascaderPanel,
      WCascaderRender,
      WCascaderSearch,
    },
  })
  export default class Cascader extends mixins(poperMixin) {
    name: string = 'WCascader';

    optStatus = false;

    searchKeyWord = '';

    searchHoverIndex = -1;

    searchResult: any[] = [];

    // 如果没指定 v-model ，就存到这里，以便使用数组引用进行更新
    // 解决不传 v-model ， 点击选中三级 ， 再显示，不选再关上，删除之后的问题
    defValue: string[] = [];

    chooseResult: any[] = []; // 点击下拉选项，最后一级之后所得到的值

    chooseAllItem: any[] = []; // 点击下拉选项每一级选择的数据

    chooseItemResult: any[] = []; // 点击下拉选项每一级选择的数据

    currentOption: any = {};

    resizeEvent: any = null;

    @Model('model', { type: Array }) readonly value!: string[];

    @Prop({
      type: Array,
      default: noop,
    })
    private options!: any[];

    @Prop({
      type: String,
      default: '未匹配到结果',
    })
    private emptyText!: string;

    @Prop({
      type: String,
      default: '',
    })
    private searchWidth!: string;

    @Prop({
      type: String,
      default: '请选择',
    })
    private placeholder!: string;

    @Prop({
      type: String,
      default: 'bottomLeft',
    })
    private placement!: string;

    @Prop(String) private size!: string;

    @Prop(Boolean) private loading!: boolean;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private search!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private transfer!: boolean;

    @Prop({
      type: Number,
      default: 4,
    })
    private interval!: number;

    @Prop({
      type: Object,
      default: (): FieldNamesEntity => fieldNamesDefault,
    })
    private fieldNames!: FieldNamesEntity;

    @Prop({
      type: Function,
      default() {
        return new Promise((resolve) => {
          (this as any).$nextTick(() => {
            resolve();
          });
        });
      },
    })
    private before!: Function;

    @Prop(Function) private getContainer!: Function;

    @Prop(Function) private searchRender!: Function;

    @Prop(Function) private displayRender!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private click!: Function;

    get searchData() {
      return objToPath(this.options.slice(), this.fieldNames).slice();
    }

    get hasValue() {
      return !!this.value;
    }

    get chooseValue() {
      return getValueByLabel(
        this.realValue,
        this.options,
        this.fieldNames
      ).slice();
    }

    get realValue() {
      const value = this.hasValue ? this.value : this.defValue;
      return value.slice();
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
      this.defValue = this.realValue.slice();
      this.resizeEvent = addDOMEventListener(
        window,
        'resize',
        this.resizeChange
      );
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
    panelChange(params: ReturnParamsEntity, ev: MouseEvent) {
      const { current, item, index, floor } = params;
      const value = params[this.fieldNames.value];
      const children = params[this.fieldNames.children];
      this.currentOption = {
        [this.fieldNames.value]: value,
        current,
        index,
        floor,
        [this.fieldNames.children]: children,
        ev,
        item,
        options: this.options,
      };

      this.chooseAllItem.push(item);

      this.updateValue(value);
      this.change(this.currentOption, ev);
      // 如果到最后一个选项了就更新显示，在不及时显示选项的模式( changeOnSelect )下
      if (!children.length) {
        this.chooseItemResult = this.chooseAllItem.slice();
        this.chooseResult = value.slice();
      }

      return this.currentOption;
    }

    cascaderClick(ev: MouseEvent) {
      if (!this.disabledValue && !this.loading) {
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
      if (
        hasOwn(this.currentOption, this.fieldNames.children) &&
        this.currentOption[this.fieldNames.children].length
      ) {
        const value = this.popValue();
        const oldValue =
          this.chooseResult.length > 0 ? this.chooseResult : this.defValue;
        // // 恢复之前设置的
        oldValue.forEach((res) => {
          value.push(res);
        });
        this.updateValue(value);
        this.chooseAllItem = this.chooseItemResult.slice();
        this.chooseItemResult = [];
      }
    }

    clear(ev: MouseEvent) {
      this.chooseResult = [];
      // 删除了就连原始已经有的默认值也删除
      this.defValue = [];
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
        const { item, index, floor } = this.searchResult[
          Math.max(this.searchHoverIndex, 0)
        ];
        const searchResult = this.searchResult[
          Math.max(this.searchHoverIndex, 0)
        ];
        const value = searchResult[this.fieldNames.value];
        const label = searchResult[this.fieldNames.label] || [];
        const children = searchResult[this.fieldNames.children];
        const changeParams: ReturnParamsEntity = {
          value: label.slice(),
          label,
          current: value[value.length - 1],
          item,
          index,
          floor,
          children,
        };
        this.panelChange(changeParams, ev);
      }
      this.searchReset();
      this.setStatus(false);
      this.searchblur();
    }

    searchKeyDown() {
      // 递增索引
      this.searchHoverIndex =
        ++this.searchHoverIndex % this.searchResult.length;
      // 略过不可用
      this.searchHoverIndex = findEnabled(
        this.searchResult,
        this.searchHoverIndex,
        1,
        this.fieldNames
      );
    }

    searchKeyUp() {
      // 递减索引
      this.searchHoverIndex =
        (this.searchResult.length + --this.searchHoverIndex) %
        this.searchResult.length;
      // 略过不可用
      this.searchHoverIndex = findEnabled(
        this.searchResult,
        this.searchHoverIndex,
        -1,
        this.fieldNames
      );
    }

    searchReset() {
      this.searchHoverIndex = -1;
      this.searchKeyWord = '';
    }
  }
</script>

<style lang="scss">
  @import 'cascader.scss';
</style>
