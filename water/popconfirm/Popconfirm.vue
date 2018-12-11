<template>
  <transition name="fade">
    <div class="w-popconfirm" :class="popconfirmClass" :style=" { left: `${left}px`, top: `${top}px` }" ref="tooltipElem" v-show="status" @click.stop="boxClick($event)">
      <i class="w-popconfirm-arrow" :class="arrowClass"></i>
      <div class="w-popconfirm-main">
        <div class="w-popconfirm-content" ref="content" v-if="content"></div>
        <div class="w-popconfirm-buttons">
          <w-button class="w-popconfirm-button" size="small" @click="cancelFn">{{cancelText}}</w-button>
          <w-button class="w-popconfirm-button" size="small" :loading="loadingValue" type="primary" @click="okFn">{{okText}}</w-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue';
import WIcon from '../icon/Icon';
import WButton from '../button/Button';
import { setLeftFn, setTopFn } from '../utils/poper';

export default {
  name: 'WPopconfirmWarp',
  data() {
    return {
      left: 0,
      top: 0,
      status: false,
      content: true,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props: {
    render: HTMLDivElement,
    value: Boolean,
    loading: Boolean,
    placement: {
      type: String,
      default: 'top',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    interval: {
      type: Number,
      default: 8,
    },
    before: {
      type: Function,
      default() {
        return new Promise((resolve) => {
          this.$nextTick(() => {
            resolve();
          });
        });
      },
    },
    ok: {
      type: Function,
      default: () => {},
    },
    cancel: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    loadingValue() {
      return this.loading;
    },
    popconfirmClass() {
      return [
        {
          'w-popconfirm-horbottom': this.isHorBottom,
          'w-popconfirm-hortop': this.isHorTop,
          'w-popconfirm-horleft': this.isVerLeft,
          'w-popconfirm-horright': this.isVerRight,
        },
      ];
    },
    arrowClass() {
      return [
        {
          'w-popconfirm-arrow-hortop': this.isHorTop,
          'w-popconfirm-arrow-horbottom': this.isHorBottom,
          'w-popconfirm-arrow-verendright': this.isVerEndRight,
          'w-popconfirm-arrow-verendleft': this.isVerEndLeft,
          'w-popconfirm-arrow-vercenter': this.isVerCenter,

          'w-popconfirm-arrow-horleft': this.isVerLeft,
          'w-popconfirm-arrow-horright': this.isVerRight,
          'w-popconfirm-arrow-horendbottom': this.isHorEndBottom,
          'w-popconfirm-arrow-horendtop': this.isVerEndTop,
          'w-popconfirm-arrow-horcenter': this.isHorCenter,
        },
      ];
    },
    // 纵向( Ver )，设置左边的判断 start
    isVerCenter() {
      // top bottom
      return /\b(top|bottom)\b/g.test(this.placement);
    },
    isVerEndRight() {
      // topRight bottomRight
      return /Right/g.test(this.placement);
    },
    isVerEndLeft() {
      // topLeft bottomLeft
      return /Left/g.test(this.placement);
    },
    isVerLeft() {
      // leftTop left leftBottom
      return /left/g.test(this.placement);
    },
    isVerRight() {
      // rightTop right rightBottom
      return /right/g.test(this.placement);
    },
    // 纵向( Ver )，设置左边的判断 end

    // 横向( Hor )，设置左边的判断 end
    isHorCenter() {
      // left right
      return /\b(left|right)\b/g.test(this.placement);
    },
    isHorEndBottom() {
      // leftBottom rightBottom
      return /Bottom/g.test(this.placement);
    },
    isVerEndTop() {
      // topTop bottomTop
      return /Top/g.test(this.placement);
    },
    isHorTop() {
      // top topLeft topRight
      return /top/g.test(this.placement);
    },
    isHorBottom() {
      // bottom bottomLeft bottomRight
      return /bottom/g.test(this.placement);
    },
  },
  mounted() {
    this.handleSlot();
    this.$nextTick(() => {
      setLeftFn(this, this.render, () => {
        this.setStatus(true);
      }, () => {
        this.setStatus(this.value);
      }).then((left) => {
        this.left = left;
      });
      setTopFn(this, this.render, () => {
        this.setStatus(true);
      }, () => {
        this.setStatus(this.value);
      }).then((top) => {
        this.top = top;
      });
    });
  },
  methods: {
    handleSlot() {
      this.filterSlot('content');
    },
    filterSlot(attr) {
      const results = this.$slots.default.filter(slot => slot.tag === attr);
      if (results.length) {
        const { children } = (new Vue({
          render: h => h(attr, {}, [results[0].children]),
        })).$mount().$el;
        if (children.length) {
          this.$refs[attr].appendChild(children[0]);
        } else {
          this[attr] = false;
        }
      } else {
        this[attr] = false;
      }
    },
    boxClick(event) {
      event.stopPropagation();
    },
    setStatus(val) {
      this.status = val;
    },
    cancelFn() {
      if (!this.loadingValue) {
        this.changeStatus('cancel');
      }
    },
    okFn() {
      this.before().then(() => {
        this.$nextTick(() => {
          this.changeStatus('ok');
        });
      });
    },
    changeStatus(type) {
      this.setStatus(false);
      this[type](this.status);
      this.$emit(type, this.status);
    },
  },
  components: {
    WIcon,
    WButton,
  },
  watch: {
    value(val) {
      this.setStatus(val);
    },
  },
};
</script>
