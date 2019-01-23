<template>
  <div class="w-select" :class="selectClass" @click="selectClick($event)" ref="select" v-doc-click="bodyClick">
    <input
      class="w-select-single-search"
      type="text"
      ref="single"
      :placeholder="name"
      aria-label="search"
      v-if="isSingleMode && search && optStatus"
      @input="searchInput($event)"
      @keyup.enter="searchEnter($event)"
      @keyup.down="keyDown"
      @keyup.up="keyUp"
      @blur="inputBlur($event)"
    >
    <!-- 多选 和 标签 模式 -->
    <ul class="w-select-more" :class="moreClass" v-else-if="!isSingleMode">
      <li class="w-select-more-item" :class="{
        ['w-select-more-item-disabled']: !disabledValue && nameItem.disabled,
        ['w-select-more-item-not']: disabledValue,
        [`w-select-more-item-lg`]: size === 'large',
        [`w-select-more-item-sm`]: size === 'small',
        }" v-for="(nameItem, nameIndex) in nameTags">
        <span class="w-select-more-text">{{nameItem.value}}</span>
        <i class="w-select-more-remove" :class="{
          [`w-select-more-remove-lg`]: size === 'large',
          [`w-select-more-remove-sm`]: size === 'small',
        }" @click.stop="removeName($event, nameItem.value)" v-if="!disabledValue && !nameItem.disabled"></i>
      </li>
      <li class="w-select-more-inline" :style="{ width: fieldWidth, }" v-if="search">
        <input
          class="w-select-more-inline-field"
          type="text"
          :ref="mode"
          aria-label="search"
          v-model="fieldValue"
          @input="fieldInput($event)"
          @keyup.enter="fieldEnter($event)"
          @keyup.down="keyDown"
          @keyup.up="keyUp"
          @keyup.delete="fieldDelete($event)"
          @blur="inputBlur($event)"
          @focus="inputFocus($event)"
        >
        <pre class="w-select-more-pre" ref="pre">{{fieldValue}}</pre>
      </li>
    </ul>
    <div class="w-select-result" v-else>{{name}}</div>
    <i :class="{
      ['w-select-loading']: loading,
      ['w-select-arrow']: !loading,
      ['w-select-arrow-active']: !loading && optStatus,
      ['w-select-arrow-disabled']: disabledValue,
    }" v-if="isSingleMode"></i>
    <div class="w-option" v-transfer-dom="getContainer()" :data-transfer="transfer" :class="optionClass" ref="popElem">
      <render-option
        v-if="$slots.default"
        :slots="$slots.default"
        :change="optionChange"
        :beforeChange="optionBeforeChange"
        :newTags="newTags"
        :hoverIndex="optHoverIndex"
        :fieldValue="fieldValue"
        :emptyText="emptyText"
        :mode="mode"
        :name="name"
        :updateHock="updateHock"
      ></render-option>
      <slot name="diy" v-if="$slots.diy"></slot>
    </div>
  </div>
</template>
<script>
import TransferDom from '../directives/transfer-dom';
import docClick from '../directives/doclick';
import { hasOwn, isArray } from '../utils/o';
import RenderOption from './renderoption';
import props from './props/select';
import {
  setLeftFn,
  setTopFn,
  regDirection,
} from '../utils/poper';
import { handleName, findEnabled, toggleItem } from '../utils/option';

export default {
  data() {
    return {
      optStatus: false,
      loadingValue: false,
      slotsData: [],
      nameTags: [],
      newTags: [],
      fieldValue: '',
      fieldWidth: 0,
      fieldCanDelate: false,
      optHoverIndex: -1,
      hideTimer: null,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  computed: {
    isSingleMode() {
      return this.mode === 'single';
    },
    isTagMode() {
      return this.mode === 'tag';
    },
    disabledValue() {
      return this.disabled;
    },
    selectClass() {
      return [`w-select-${this.mode}`, {
        'w-select-search': !this.isSingleMode && this.search,
        'w-select-disabled': this.disabledValue,
        'w-select-lg': this.size === 'large',
        'w-select-sm': this.size === 'small',
        [`w-select-${this.mode}-lg`]: this.size === 'large',
        [`w-select-${this.mode}-sm`]: this.size === 'small',
      }];
    },
    optionClass() {
      return {
        'w-option-show': this.optStatus,
      };
    },
    moreClass() {
      return {
        'w-select-more-lg': this.size === 'large',
        'w-select-more-sm': this.size === 'small',
      };
    },
    name() {
      let newValue = this.value;
      if (!this.isSingleMode) {
        newValue = isArray(newValue) ? newValue : [];
      }
      return newValue;
    },
    ...regDirection,
  },
  methods: {
    updateHock(slotsData, nameTags) {
      this.slotsData = slotsData;
      if (JSON.stringify(this.nameTags) !== JSON.stringify(nameTags)) {
        this.nameTags = nameTags;
        // 初始化向下递归查找可用索引
        this.resetHoverIndex();
      }
    },
    setFieldValue(val = '') {
      this.fieldValue = val;
    },
    resetHoverIndex() {
      // 初始化向下递归查找可用索引
      this.optHoverIndex = findEnabled(this.slotsData);
    },
    bodyClick() {
      this.setStatus(false);
    },
    getFocus() {
      this.$nextTick(() => {
        // 解决多选模式点击光标定位问题
        if (!this.fieldValue) {
          this.fieldWidth = '0.75em';
        }
        const { focus = () => {} } = this.$refs[this.mode];
        focus();
      });
    },
    setStatus(val = !this.optStatus) {
      this.optStatus = val;
    },
    setPostion() {
      const { select, popElem } = this.$refs;
      if (hasOwn(this.$refs, 'select') && hasOwn(this.$refs, 'popElem')) {
        setLeftFn(this, select).then((left) => {
          popElem.style.left = `${left}px`;
        });
        setTopFn(this, select).then((top) => {
          popElem.style.top = `${top}px`;
        });
      }
    },
    setWidth() {
      const { select, popElem } = this.$refs;
      popElem.style.width = `${select.offsetWidth}px`;
    },
    setInputWidth() {
      this.$nextTick(() => {
        const { pre } = this.$refs;
        this.fieldWidth = `${pre.offsetWidth}px`;
        this.setPostion();
        this.resetHoverIndex();
      });
    },
    selectClick(event = window.event) {
      if (!this.disabledValue) {
        this.before().then(() => {
          this.setStatus(true);
          this.$nextTick(() => {
            this.setPostion();
            this.setWidth();
            this.getFocus();
            this.$emit('click', event);
            this.click(event);
          });
        });
      }
    },
    optionBeforeChange() {
      this.getFocus();
    },
    optionChange(value, ev, options) {
      // 获取当前
      const optItem = options.find(opt => value.indexOf(opt.value) > -1);
      this.$emit('model', value);
      this.$emit('change', value, optItem, ev, options);
      this.change(value, optItem, ev, options);
      this.toggleNewTag(this.fieldValue);
      this.setFieldValue();
      this.$nextTick(() => {
        this.setPostion();
      });
    },
    keyDown() {
      // 递增索引
      this.optHoverIndex = ++this.optHoverIndex % this.slotsData.length;
      // 略过不可用
      this.optHoverIndex = findEnabled(this.slotsData, this.optHoverIndex);
    },
    keyUp() {
      // 递减索引
      this.optHoverIndex = (this.slotsData.length + --this.optHoverIndex) % this.slotsData.length;
      // 略过不可用
      this.optHoverIndex = findEnabled(this.slotsData, this.optHoverIndex, -1);
    },
    searchInput(event = window.event) {
      this.setFieldValue(event.target.value);
    },
    searchEnter(event = window.event) {
      const { value } = event.target;
      let newValue = '';
      const searchItem = this.slotsData.find(nameItem => nameItem.value.indexOf(value) > -1);
      if (searchItem) {
        newValue = searchItem.value;
      }
      if (this.optHoverIndex > -1) {
        newValue = this.slotsData[this.optHoverIndex].value;
      }
      if (newValue) {
        this.optionChange(newValue, event, this.slotsData);
      }
      this.setFieldValue();
      this.setStatus(false);
      this.resetHoverIndex();
    },
    inputBlur(event = window.event) {
      this.hideTimer = setTimeout(() => {
        this.setStatus(false);
        this.setFieldValue();
      }, 200);
      this.$emit('blur', event);
      this.blur(event);
      // 如果输入创建的点击创建清空输入框
    },
    inputFocus(event = window.event) {
      clearTimeout(this.hideTimer);
      this.$emit('focus', event);
      this.focus(event);
    },
    fieldInput() { // event = window.event
      // 删掉并没有影响因为 v-model 了
      // const { value } = event.target;
      // this.setFieldValue(value);
      this.setInputWidth();
    },
    fieldEnter(event = window.event) {
      let newValue = event.target.value;
      // 当第一个禁用，输入第二个一部分的时候回车
      // this.optHoverIndex = findEnabled(this.slotsData);
      // 去掉 && ！newValue 是因为输入一般上下选择的时候选中使用
      // if (this.optHoverIndex > -1 && !newValue) {
      if (this.optHoverIndex > -1) {
        newValue = this.slotsData[this.optHoverIndex].value;
      }
      // 有值的时候才会有效
      if (newValue) {
        this.optionChange(
          handleName(
            newValue,
            this.name,
            this.slotsData,
            this.isTagMode,
          ),
          event,
          this.slotsData,
        );
        this.setFieldValue();
        // 回车之后重复调用导致下拉添加失败
        // this.toggleNewTag(newValue);
      }
      this.$nextTick(() => {
        this.resetHoverIndex();
      });
    },
    toggleNewTag(value) {
      // tag 模式并且不再默认选项中
      // 如果有 new 关键标识并且值是输入的那个
      if (
        this.isTagMode
        && this.slotsData.find(
          slotItem => slotItem.new
          && slotItem.value === value,
        )
      ) {
        toggleItem(this.newTags, value);
      }
    },
    // 输入框为空的时候删除最后一个已选
    fieldDelete(event = window.event) {
      const { value } = event.target;
      if (this.fieldCanDelate && this.name.length && !this.fieldValue) {
        const delTag = this.nameTags[this.name.length - 1];
        if (
          !hasOwn(delTag, 'disabled')
          || (hasOwn(delTag, 'disabled') && !delTag.disabled)
        ) {
          this.optionChange(
            handleName(
              this.name[this.name.length - 1],
              this.name,
              this.slotsData,
              this.isTagMode,
            ),
            event,
            this.slotsData,
          );
        }
      }
      // 清空第二次删除的时候才会删除上一个选中
      this.fieldCanDelate = !value && this.name.length;
    },
    removeName(event = window.event, value) {
      this.optionChange(handleName(value, this.name, this.slotsData), event, this.slotsData);
      this.resetHoverIndex();
      this.getFocus();
      this.toggleNewTag(value);
    },
  },
  directives: { TransferDom, docClick },
  components: {
    RenderOption,
  },
};
</script>
