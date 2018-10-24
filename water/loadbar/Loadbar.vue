<template>
  <div v-show="show" class="w-loadbar" :style="{
    'width': percent+'%',
    'height': notice.height,
    'background-color': canSuccess? notice.color : notice.failedColor
  }"></div>
</template>
<script>
export default {
  data() {
    return {
      notice: {},
      percent: 0,
      show: false,
      canSuccess: true,
    };
  },
  methods: {
    /*
     * 添加方法
     * @params Object params 进度条配置
    */
    add(params) {
      this.notice = Object.assign({
        height: '2px',
        color: '#1996f9',
        failedColor: '#ff0000',
        duration: 3000,
      }, params);
    },
    start(step = (10000 / Math.floor(this.notice.duration)) * Math.random()) {
      if (this.timer) {
        this.reset();
      }
      this.show = true;
      this.timer = setInterval(() => {
        this.increase(step);
        if (this.percent > 95) {
          this.reset();
        }
      }, 100);
    },
    /*
     * 重置方法
     * @params Number time 还原变量的时间，如果不传就不还原
    */
    reset(time) {
      clearInterval(this.timer);
      this.timer = null;
      if (time) {
        setTimeout(() => {
          this.percent = 0;
          this.show = false;
          this.canSuccess = true;
        }, time);
      }
    },
    /*
     * 累加方法
     * @params Number num 累加的值
    */
    increase(num) {
      this.percent += num;
    },
    /*
     * 更新方法
     * @params Number num 设置的值
    */
    update(num) {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.$nextTick(() => {
        this.show = true;
        this.percent = Math.floor(num);
      });
    },
    finish() {
      this.show = true;
      this.percent = 100;
      this.hide();
    },
    hide() {
      this.$nextTick(() => {
        this.reset(300);
      });
    },
    fail() {
      this.show = true;
      this.canSuccess = false;
      this.finish();
    },
  },
};
</script>
