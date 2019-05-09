import { VNode } from 'vue';
import {
  Component, Vue,
} from 'vue-property-decorator';
import random from '../../helper/random';
import { isNumber } from '../../helper/type';

@Component
export default class Loadbar extends Vue {
  duration: number = 3000;

  percent: number = 0;

  show: boolean = false;

  status: string = 'success';

  timer: number | undefined = undefined;

  setStatus(status: string = 'success'): void {
    this.status = status;
  }

  reset(time?: number): void {
    this.clearTime();
    if (isNumber(time)) {
      setTimeout((): void => {
        this.percent = 0;
        this.show = false;
        this.setStatus();
      }, time);
    }
  }

  increase(num: number): void {
    this.percent += num;
  }

  clearTime(): void {
    if (isNumber(this.timer)) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  render(h: Function): VNode {
    return h('div', {
      class: ['w-loadbar', `w-loadbar-${this.status}`],
      style: {
        width: `${this.percent}%`,
        display: this.show ? 'block' : 'none',
      },
    });
  }

  start(): void {
    const step: number = (10000 / this.duration) * Math.random();
    this.show = true;
    const maxTime = random({ min: 80, max: 96, floor: true });
    this.clearTime();
    this.$nextTick(() => {
      this.timer = setInterval((): void => {
        this.increase(step);
        if (this.percent > maxTime || this.percent + step > 100) {
          this.clearTime();
        }
      }, 100);
    });
  }

  finish(): void {
    this.percent = 100;
    this.$nextTick((): void => {
      this.reset(300);
    });
  }

  fail(): void {
    this.setStatus('fail');
    this.finish();
  }
}
