<template>
  <transition-group class="w-notification" :style="notificationStyle" tag="div"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave">
    <div class="w-notification-notice" :key="notice.name" v-for="notice in notices" @mouseover="preventAutoClose ? noticeOver : noop" @mouseout="restoreAutoClose ? noticeOut : noop" @click="noticeClick($event)">
      <div class="w-notification-title" v-html="notice.title"></div>
      <div class="w-notification-content" v-if="notice.content" v-html="notice.content"></div>
      <div class="w-notification-content" v-if="notice.render">
        <render-custom :render="notice.render"></render-custom>
      </div>
      <i class="w-notification-close" @click.stop="removeNotice(notice.name)"></i>
    </div>
  </transition-group>
</template>

<script>
import RenderCustom from '../utils/render';

let seed = 0;

export default {
  data() {
    return {
      notices: [],
      moving: false, // 动画的时候不允许添加，解决动画时添加不显示问题
      timer: null,
      closed: true, // 解决自动关闭并且移入不关闭都开启之后，点击关闭移出再出发定时器的问题
      cssMoveTime: 300,
      nameQueue: [], // 自动关闭的名字
      noop: () => {}, // 为了单元测试， 减少 if
    };
  },
  props: {
    placement: {
      type: String,
      default: 'topRight',
    },
    space: {
      type: Number,
      default: 24,
    },
    duration: {
      type: Number,
      default: 600,
    },
    hoverStopClose: { // 移入区域延迟关闭取消，移出之后重新延迟关闭 的 开关
      type: Boolean,
      default: true,
    },
    close: {
      type: Function,
      default: () => {},
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    notificationStyle() {
      return {
        ...this.matchDirection('Left|Right'),
        ...this.matchDirection('top|bottom'),
      };
    },
    hasTop() {
      return /top/g.test(this.placement);
    },
    hasBottom() {
      return /bottom/g.test(this.placement);
    },
    placementValue() {
      return this.placement;
    },
    leftSign() {
      return /Left/.test(this.placement) ? '-' : '';
    },
    restoreAutoClose() {
      return this.hoverStopClose && !this.closed;
    },
    preventAutoClose() {
      return this.duration && this.hoverStopClose;
    },
  },
  methods: {
    matchDirection(reg) {
      const vertical = this.placementValue.match(new RegExp(reg));
      const direction = {};
      if (vertical && vertical.length) {
        direction[vertical[0].toLocaleLowerCase()] = `${this.space}px`;
      }
      return direction;
    },
    add(notice) {
      const name = `w-notification-${Date.now()}-${seed++}`;
      // 继承一下参数
      const newNotice = Object.assign({
        ...notice,
        name,
      }, notice);
      // 添加到队列中
      if (!this.moving) {
        this.notices.push(newNotice);
        this.nameQueue.push(name);
        this.moving = true;
      }
    },
    bindAutoClose() {
      if (this.duration) {
        this.timer = setTimeout(
          this.removeNotice.bind(this, this.nameQueue.shift()),
          this.cssMoveTime + this.duration,
        );
        this.closed = false;
      }
    },
    removeNotice(name) {
      const noticeIndex = this.notices.findIndex(notice => notice.name === name);
      const removeItem = this.notices.splice(noticeIndex, 1)[0];
      this.closed = true;
      this.close(removeItem);
    },
    noticeClick(event) {
      this.click(event);
    },
    noticeOver() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    noticeOut() {
      this.bindAutoClose();
    },
  },
  components: {
    RenderCustom,
  },
};
</script>
