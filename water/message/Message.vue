<template>
  <transition-group tag="div" class="w-message-box" name="fade">
    <div class="w-message-main" :class="[`w-message-${notice.type}`]" v-for="notice in notices" :key="notice.name" :style="notice.style">
      <div class="w-message-text" v-html="notice.content"></div>
    </div>
  </transition-group>
</template>
<script>
let seed = 0;

export default {
  name: 'WMessage',
  data() {
    return {
      notices: [],
    };
  },
  methods: {
    add(notice) {
      const name = `w-message-${Date.now()}-${seed++}`;
      // 继承一下参数
      const newNotice = Object.assign({
        content: '',
        name,
        type: 'info',
        style: {},
        close() {},
      }, notice);
      // 添加到队列中
      this.notices.push(newNotice);
      // 自动关闭
      setTimeout(this.close.bind(this, name), notice.delayTime);
    },
    close(name) {
      this.notices.every((notice, noticeIndex) => {
        this.notices.splice(noticeIndex, 1);
        notice.close();
        return notice.name !== name;
      });
    },
  },
};
</script>
