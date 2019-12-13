<template>
  <div ref="picker" v-doc-click="bodyClick" class="w-timepicker">
    <div
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      @click="openPicker"
    >
      <slot v-if="$slots.default"></slot>
      <WInput
        v-else
        v-model="inputValue"
        :readonly="editable"
        :disabled="disabled"
        :placeholder="placeholder"
        :size="size"
        @change="inputChange"
      >
        <WIcon v-if="inputValue" slot="suffix" aria-label="关闭">
          <span
            v-if="!disabled && clearable"
            class="w-picker-clear"
            :class="{
              'w-picker-clear-show': clearDisplayStatus,
            }"
            @click="clearValue($event)"
          >
            <slot name="clear">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                width="1em"
                fill="#B4BAC3"
                height="1em"
                aria-hidden="true"
              >
                <path :d="pickerSvg.closePath"></path>
              </svg>
            </slot>
          </span>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            v-else
            :fill="
              clearable && !disabled && clearDisplayStatus ? '#fff' : '#B4BAC3'
            "
            height="1em"
            aria-hidden="true"
          >
            <path :d="pickerSvg.timeCirclePath"></path>
            <path :d="pickerSvg.timePath"></path>
          </svg>
        </WIcon>
        <WIcon v-else slot="suffix" aria-label="关闭">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            width="1em"
            fill="#B4BAC3"
            height="1em"
            aria-hidden="true"
          >
            <path :d="pickerSvg.timeCirclePath"></path>
            <path :d="pickerSvg.timePath"></path>
          </svg>
        </WIcon>
      </WInput>
    </div>
    <div
      v-show="pickerStatus"
      ref="popElem"
      v-transfer-dom="getContainer && getContainer()"
      class="w-picker"
      :class="pickerClass"
      :data-transfer="transfer"
      :style="pickerStyle"
      @click="popoverClick($event)"
    >
      <i class="w-picker-arrow" :class="arrowClass"></i>
      <TimePanel
        :valueFormat="valueFormat"
        :format="format"
        v-model="times"
        :disabledHourRender="disabledHourRender"
        :disabledMinuteRender="disabledMinuteRender"
        :disabledSecondRender="disabledSecondRender"
        @change="panelChange"
      />
      <div class="w-timepicker-footer">
        <WButton
          class="w-timepicker-btn"
          type="border"
          size="small"
          @click="cancelFn"
          >取消</WButton
        >
        <WButton class="w-timepicker-btn" size="small" @click="bodyClick"
          >确定</WButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import moment, { Moment } from 'moment';
  import addDOMEventListener from 'add-dom-event-listener';
  import {
    Component,
    Model,
    Prop,
    Emit,
    Watch,
    Vue,
  } from 'vue-property-decorator';
  import { mixins } from 'vue-class-component';
  import docClick from '@/directives/doclick';
  import TransferDom from '@/directives/transfer-dom';
  import TimePanel, {
    PanelChangeEntity,
  } from '@/components/timepicker/src/TimePanel.vue';
  import WButton from '@/components/button/src/Button.vue';
  import WIcon from '@/components/icon/src/Icon.vue';
  import WInput from '@/components/input/src/Input.vue';
  import poperMixin from '@/helper/popermixin';
  import { setPostion } from '@/helper/poper';
  import { isString } from '@/helper/type';
  import { noop } from '@/helper/noop';
  import {
    TIME_VALUE_FORMAT_DEFAULT,
    TIME_FORMAT_DEFAULT,
  } from '@/helper/time';
  import { pickerSvg, PickerSvgEntity } from '@/helper/pickersvg';

  Vue.directive('transfer-dom', TransferDom as any);

  Vue.directive('doc-click', docClick as any);

  @Component({
    components: {
      TimePanel,
      WInput,
      WIcon,
      WButton,
    },
  })
  export default class Timepicker extends mixins(poperMixin) {
    pickerSvg: PickerSvgEntity = pickerSvg;

    times: string = '';

    inputValue: string = '';

    validValue: string = ''; // 点击空白处，日期校验失败恢复之前的value

    prevValue: string = '';

    inputChangeTimer = -1;

    clearDisplayStatus = false;

    pickerStatus = false;

    resizeEvent: any = null;

    @Model('model', {
      type: String,
      default: moment().format(TIME_VALUE_FORMAT_DEFAULT),
    })
    readonly value!: string;

    @Prop(String) private placeholder!: string;

    @Prop(String) private size!: string;

    @Prop({
      type: String,
      default: TIME_FORMAT_DEFAULT,
    })
    private format!: string;

    @Prop({
      type: String,
      default: TIME_VALUE_FORMAT_DEFAULT,
    })
    private valueFormat!: string;

    @Prop({
      type: String,
      default: 'bottom', // 不支持左右
    })
    private placement!: string;

    @Prop({
      type: Number,
      default: 8,
    })
    private interval!: number;

    @Prop(Boolean) private editable!: boolean;

    @Prop(Boolean) private disabled!: boolean;

    @Prop(Boolean) private open!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private transfer!: boolean;

    @Prop({
      type: Boolean,
      default: true,
    })
    private clearable!: boolean;

    @Prop({
      type: [String, Object],
      default: '',
    })
    private pickerStyle!: string | object;

    @Prop(Function) private disabledHourRender!: Function;

    @Prop(Function) private disabledMinuteRender!: Function;

    @Prop(Function) private disabledSecondRender!: Function;

    @Prop(Function) private getContainer!: Function;

    @Prop({
      type: Function,
      default: noop,
    })
    private change!: Function;

    get pickerClass(): any[] {
      return [
        {
          'w-picker-horbottom': this.isHorBottom,
          'w-picker-hortop': this.isHorTop,
          'w-picker-horleft': this.isVerLeft,
          'w-picker-horright': this.isVerRight,
        },
      ];
    }

    get arrowClass(): any[] {
      return [
        {
          'w-picker-arrow-hortop': this.isHorTop,
          'w-picker-arrow-horbottom': this.isHorBottom,
          'w-picker-arrow-verendright': this.isVerEndRight,
          'w-picker-arrow-verendleft': this.isVerEndLeft,
          'w-picker-arrow-vercenter': this.isVerCenter,
        },
      ];
    }

    mounted() {
      this.resizeEvent = addDOMEventListener(
        window,
        'resize',
        this.resizeChange
      );
      this.resizeChange();
    }

    beforeDestroy() {
      this.resizeEvent.remove();
    }

    initInput(value: string) {
      this.$nextTick(() => {
        if (value && isString(value)) {
          this.inputValue = moment(value, this.format).format(this.format);
        } else {
          this.inputValue = '';
        }
      });
    }

    @Watch('value', {
      immediate: true,
    })
    getValue() {
      this.setTimes(this.value);
      this.initInput(this.value);
      this.getValidValue();
    }

    setTimes(value: string) {
      this.times = value;
    }

    panelChange(params: PanelChangeEntity) {
      this.change(params);
      this.$emit('change', params);
      this.$emit('model', params.value);
    }

    @Emit('model')
    clearValue(ev: Event): string {
      const emptyValue = '';

      this.initInput(emptyValue);
      this.setTimes(emptyValue);
      this.closePicker();
      this.panelChange({
        value: emptyValue,
        text: emptyValue,
      });

      ev.stopPropagation();

      return emptyValue;
    }

    handleMouseOver() {
      this.clearDisplayStatus = true;
    }

    handleMouseOut() {
      this.clearDisplayStatus = false;
    }

    getValidValue() {
      this.validValue = this.value;
    }

    getPrevValue() {
      this.prevValue = this.value;
    }

    resizeChange() {
      setPostion(this, 'picker');
    }

    @Watch('open', {
      immediate: true,
    })
    setPickerStatus() {
      this.pickerStatus = this.open;
      this.getPrevValue();

      if (this.pickerStatus) {
        // 当一开始的时候有可能位置跑偏，所以 nextTick 一下
        this.$nextTick(() => {
          this.resizeChange();
        });
      }
    }

    openPicker() {
      if (!this.disabled) {
        this.pickerStatus = true;
        this.getPrevValue();
        this.resizeChange();
      }
    }

    closePicker() {
      this.pickerStatus = false;
    }

    @Emit('model')
    cancelFn({ ev }: any) {
      this.initInput(this.prevValue);
      this.setTimes(this.prevValue);
      this.closePicker();
      ev.stopPropagation();

      return this.prevValue;
    }

    @Emit('model')
    bodyClick() {
      let newValue = this.value;
      const tableMoment = moment(this.inputValue, this.valueFormat);

      if (tableMoment.isValid()) {
        newValue = tableMoment.format(this.valueFormat);
      } else {
        newValue = this.validValue;
        this.initInput(this.validValue);
      }

      this.closePicker();

      return newValue;
    }

    popoverClick(ev: Event) {
      ev.stopPropagation();
    }

    inputChange({ value }: any) {
      clearTimeout(this.inputChangeTimer);
      this.inputChangeTimer = setTimeout(() => {
        const momentValue = value;
        const tableMoment = moment(momentValue, this.format);
        if (tableMoment.isValid()) {
          this.initInput(value);
          this.setTimes(value);
          this.panelChange({
            value,
            text: moment(value, this.format).format(this.format),
          });
        }
      }, 500);
    }
  }
</script>

<style lang="scss">
  @import 'timepicker.scss';
</style>
