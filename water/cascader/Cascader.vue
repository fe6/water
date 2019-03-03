<template>
  <div class="w-cascader-wrap" :class="{
    ['w-cascader-active']: !!result.length,
    }" @click="cascaderClick($event)" ref="cascader" v-doc-click="bodyClick">
    <slot v-if="$slots.default"></slot>
    <div class="w-cascader" v-else>
      <div class="w-cascader-result" v-if="(!search && (changeOnSelect ? newData.length : result.length))" :class="{
        [`w-cascader-result-lg`]: this.size === 'large',
        [`w-cascader-result-sm`]: this.size === 'small',
        }">
        <w-cascader-render :render="displayRender" :data="changeOnSelect ? newData : result" :result="result" :option="option" :currentOption="currentOption" v-if="displayRender"></w-cascader-render>
        <template v-else>{{changeOnSelect ? newData.join(' / ') : result.join(' / ')}}</template>
      </div>
      <input
        class="w-cascader-input"
        :class="{
          ['w-cascader-input-lg']: this.size === 'large',
          ['w-cascader-input-sm']: this.size === 'small',
          ['w-cascader-input-active']: (changeOnSelect ? newData.length : result.length) && !optStatus,
          }"
        type="text"
        ref="input"
        :readonly="!search && !optStatus"
        v-else
        autocomplete="off"
        aria-label="input"
        :placeholder="(changeOnSelect ? newData.join(' / ') : result.join(' / ')) || placeholder"
        v-model="searchKeyWord"
        @keyup.enter="searchEnter($event)"
        @keyup.down="searchKeyDown"
        @keyup.up="searchKeyUp"
      >
      <i :class="{
        ['w-cascader-loading']: loading,
        ['w-cascader-arrow']: !loading,
        ['w-cascader-arrow-active']: !loading && optStatus,
        ['w-cascader-arrow-disabled']: disabledValue,
      }"></i>
      <i class="w-cascader-remove" :class="{
        ['w-cascader-remove-active']: !!result.length && !loading,
        }" @click="clear($event)"></i>
    </div>
    <div class="w-cascader-option" v-transfer-dom="getContainer && getContainer()" :data-transfer="transfer" :class="optionClass" ref="popElem">
      <w-cascader-search :search="searchData" :getSearchResult="getSearchResult" :emptyText="emptyText" :width="searchWidth" :searchKeyWord="searchKeyWord" :change="searchChange" :hoverIndex="searchHoverIndex" :searchRender="searchRender" v-if="searchKeyWord"></w-cascader-search>
      <w-cascader-panel :option="option" @panelChange="panelChange" v-model="newData" :oldValue="oldData.slice()" :fieldNames="fieldNames" v-else></w-cascader-panel>
    </div>
  </div>
</template>
<script>
import TransferDom from '../directives/transfer-dom';
import docClick from '../directives/doclick';
import {
  objToPath,
} from '../utils/o';
import { findEnabled } from '../utils/option';
import {
  regDirection,
  setPostion,
} from '../utils/poper';
import props from './props/cascader';
import WCascaderPanel from './CascaderPanel';
import WCascaderRender from './cascader-render';
import WCascaderSearch from './cascader-search';

export default {
  name: 'WCascader',
  data() {
    return {
      status: 'true',
      optStatus: false,
      searchKeyWord: '',
      searchHoverIndex: -1,
      searchResult: [],
      // 如果没指定 v-model ，就存到这里，以便使用数组引用进行更新
      // 解决不传 v-model ， 点击选中三级 ， 再显示，不选再关上，删除之后的问题
      defValue: [],
      result: [],
      currentOption: {},
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  computed: {
    optData() {
      return this.option.slice();
    },
    searchData() {
      return objToPath(this.optData).slice();
    },
    hasValue() {
      return !!this.value;
    },
    newData() {
      const value = this.hasValue ? this.value : this.defValue;
      return value.slice();
    },
    // 用于value 为空，点击一级然后关上想下拉的回复
    oldData() {
      return this.changeOnSelect ? this.newData.slice() : this.result.slice();
    },
    disabledValue() {
      return this.disabled;
    },
    optionClass() {
      return {
        'w-cascader-option-show': this.optStatus,
      };
    },
    ...regDirection,
  },
  methods: {
    updateValue(value) {
      if (this.hasValue) {
        this.$emit('model', value);
      } else {
        this.defValue = value;
      }
    },
    panelChange({
      value, current, option, index, floor, nextPanel,
    }, ev) {
      this.currentOption = {
        value, current, option, index, floor, nextPanel,
      };
      this.updateValue(value);
      this.$emit('change', this.currentOption, ev);
      this.change(this.currentOption, ev);
      // 如果到最后一个选项了就更新显示，在不及时显示选项的模式( changeOnSelect )下
      if (!nextPanel.length) {
        this.result = value.slice();
      }
    },
    cascaderClick(ev) {
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
    },
    bodyClick() {
      if (this.optStatus) {
        this.setStatus(false);
        this.reset();
      }
    },
    // 清除当前选中的所有
    popValue() {
      const value = this.hasValue ? this.value : this.defValue;
      // 清除所有
      while (value.length) {
        value.pop();
      }
      return value;
    },
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
    },
    clear(ev) {
      this.result = [];
      // 清除所有
      this.updateValue(this.popValue());
      ev.stopPropagation();
    },
    setStatus(val = !this.optStatus) {
      this.optStatus = val;
    },
    searchFocus() {
      this.$refs.input.focus();
    },
    searchblur() {
      this.$refs.input.blur();
    },
    searchChange(searchOption, ev) {
      this.panelChange(searchOption, ev);
      this.searchReset();
    },
    getSearchResult(result) {
      this.searchResult = result;
    },
    searchEnter(ev) {
      if (this.searchResult.length) {
        const {
          value,
          option,
          index,
          floor,
          nextPanel,
        } = this.searchResult[Math.max(this.searchHoverIndex, 0)];
        this.panelChange({
          value,
          current: value[value.length - 1],
          option,
          index,
          floor,
          nextPanel,
        }, ev);
      }
      this.searchReset();
      this.setStatus(false);
      this.searchblur();
    },
    searchKeyDown() {
      // 递增索引
      this.searchHoverIndex = ++this.searchHoverIndex % this.searchResult.length;
      // 略过不可用
      this.searchHoverIndex = findEnabled(this.searchResult, this.searchHoverIndex);
    },
    searchKeyUp() {
      // 递减索引
      this.searchHoverIndex = (
        this.searchResult.length + --this.searchHoverIndex
      ) % this.searchResult.length;
      // 略过不可用
      this.searchHoverIndex = findEnabled(this.searchResult, this.searchHoverIndex, -1);
    },
    searchReset() {
      this.searchHoverIndex = -1;
      this.searchKeyWord = '';
    },
  },
  directives: { TransferDom, docClick },
  components: {
    WCascaderPanel,
    WCascaderRender,
    WCascaderSearch,
  },
};
</script>
