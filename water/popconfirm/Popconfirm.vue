<template>
  <transition name="fade">
    <div class="w-popconfirm" :class="popconfirmClass" :style=" { left: `${left}px`, top: `${top}px` }" ref="popElem" v-show="status" @click.stop="boxClick($event)">
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
import {
  setLeftFn,
  setTopFn,
  regDirection,
} from '../utils/poper';

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
    getLayout: Function,
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
    ...regDirection,
  },
  mounted() {
    this.handleSlot();
  },
  methods: {
    setPosition() {
      const layout = this.getLayout();
      this.$nextTick(() => {
        setLeftFn(this, layout, () => {
        }, () => {
        }).then((left) => {
          this.left = left;
        });
        setTopFn(this, layout, () => {
        }, () => {
        }).then((top) => {
          this.top = top;
        });
      });
    },
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
      this.setPosition();
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
