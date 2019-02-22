<template>
  <div class="w-page" v-if="isNormalMode">
    <span class="w-page-text" v-if="totalText">{{totalText}}</span>
    <w-button :class="['w-page-button w-page-prev', {
      ['w-page-prev-sm']: isSmallSize,
      }]" :size="size" :disabled="prevDisable" @click="prevPage">{{prevText}}</w-button>
    <!-- 第一页 start -->
    <w-button :class="['w-page-button', {
      ['w-page-button-sm']: isSmallSize,
      }, 'w-page-first']" :size="size" v-if="midleNumber[0] > 1 && current > midleSizeValue - (midleSizeValue - 1) / 2" @click.native="setNow(1)">1</w-button>
    <!-- 第一页 end -->
    <!-- 左 ••• start -->
    <div class="w-page-over" :class="[{
      ['w-page-over-sm']: isSmallSize,
    }, 'w-page-over-prev', {
      ['w-page-over-prev-sm']: isSmallSize,
    }]" v-if="midleNumber[0] > 2" @click="setNow(current - 5)"></div>
    <!-- 左 ••• end -->

    <w-button-group :class="['w-page-button-group']" :on="current">
      <w-button :class="['w-page-button', {
        ['w-page-button-sm']: isSmallSize,
        }]" :size="size" :key="midle" v-for="midle in midleNumber" @click.native="setNow(midle)">{{midle}}</w-button>
    </w-button-group>

    <!-- 右 ••• start  v-if="current < 7" -->
    <div class="w-page-over" :class="[{
      ['w-page-over-sm']: isSmallSize,
    }, 'w-page-over-next', {
      ['w-page-over-next-sm']: isSmallSize,
    }]" v-if="midleNumber[midleNumber.length - 1] < pageNumber && current < (pageNumber - (midleSizeValue - 1) / 2 - 1)" @click="setNow(current + 5)"></div>
    <!-- 右 ••• end -->
    <!-- 最后一页 start  v-if="current < 8" -->
    <w-button :class="['w-page-button', {
       ['w-page-button-sm']: isSmallSize,
      }, 'w-page-last']" :size="size" v-if="midleNumber[midleNumber.length - 1] < pageNumber && current < (pageNumber - (midleSizeValue - 1) / 2)" @click.native="setNow(pageNumber)">{{pageNumber}}</w-button>
      <!-- 最后一页 end -->
    <w-button :class="['w-page-button w-page-next', {
      ['w-page-next-sm']: isSmallSize,
      }]" :size="size" :disabled="nextDisable" @click="nextPage">{{nextText}}</w-button>
  </div>
  <!-- simple start -->
  <div class="w-page" v-else>
    <a class="w-page-simple-button w-page-simple-prev" :class="{
       ['w-page-simple-button-disabled']: prevDisable,
      }" href="javascript:;" @click="setNow(current - 1)">
      <i class="w-page-simple-arrow w-page-simple-arrow-prev"></i>
    </a>
    <w-input class="w-page-now" size="small" :value="String(current)" @keyup.enter.native="simpleChange($event)" />
    <i class="w-page-italic">/</i>
    <span class="w-page-total">5</span>
    <a class="w-page-simple-button w-page-simple-next" :class="{
       ['w-page-simple-button-disabled']: nextDisable,
      }" href="javascript:;" @click="setNow(current + 1)">
      <i class="w-page-simple-arrow w-page-simple-arrow-next"></i>
    </a>
  </div>
  <!-- simple end -->
</template>
<script>
import WButton from '../button/Button';
import WButtonGroup from '../button/ButtonGroup';
import WInput from '../form/input/Input';
import props from './props/page';

export default {
  name: 'WPage',
  data() {
    return {
      current: 1,
    };
  },
  model: {
    prop: 'value',
    event: 'model',
  },
  props,
  computed: {
    isNormalMode() {
      return !this.simple;
    },
    isSmallSize() {
      return this.isNormalMode && this.size === 'small';
    },
    totalNumber() {
      return this.total;
    },
    pageNumber() {
      return Math.ceil(this.total / this.pageSize);
    },
    nextDisable() {
      return this.current >= this.pageNumber;
    },
    prevDisable() {
      return this.current < 2;
    },
    midleSizeValue() {
      let length = this.midleSize % 2 === 0 ? this.midleSize + 1 : this.midleSize;
      // 最大 7
      length = Math.min(length, 7);
      // 最大 3
      length = Math.max(length, 3);
      // 并且不能大于总页数
      length = Math.min(length, this.pageNumber);
      return length;
    },
    midleNumber() {
      const midle = [];
      // 四舍五入，当 100 条，每页 20 条
      const step = Math.ceil((this.midleSizeValue - 1) / 2);
      let first = Math.min(
        this.current > step ? this.current - step : 1,
        this.pageNumber - this.midleSizeValue + 1,
      );
      while (midle.length < this.midleSizeValue) {
        midle.push(first++);
      }
      return midle;
    },
    itemEnd() {
      return this.pageSize * (this.current - 1)
            + (Math.ceil(this.total / this.pageSize) === this.current
              ? this.total % this.pageSize : this.pageSize);
    },
    totalText() {
      return this.showTotal(this.total, [1 + this.pageSize * (this.current - 1), this.itemEnd]);
    },
  },
  mounted() {
    this.setNow(this.value);
  },
  methods: {
    setNow(value) {
      this.current = Math.min(value || 1, this.pageNumber);
      this.current = Math.max(this.current, 1);
      this.$emit('model', this.current, this.midleSize);
      this.$emit('change', this.current, this.midleSize);
      this.change(this.current, this.midleSize);
    },
    nextPage() {
      this.setNow(++this.current);
    },
    prevPage() {
      this.setNow(--this.current);
    },
    simpleChange(ev) {
      this.setNow(ev.target.value);
    },
  },
  components: {
    WButton,
    WButtonGroup,
    WInput,
  },
  watch: {
    value(newValue) {
      this.setNow(newValue);
    },
  },
};
</script>
