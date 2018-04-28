import { mount } from 'vue-test-utils';
import Loadbar from './Loadbar';

describe('Loadbar.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Loadbar);
    wrapper.vm.add();
  });

  it('检测 失败之后是否重置。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        wrapper.vm.fail();
        expect(wrapper.vm.canSuccess).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测 是否叠加。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        wrapper.vm.increase(1);
        expect(wrapper.vm.percent).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测 重置是否起效。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        wrapper.vm.reset();
        setTimeout(() => {
          expect(wrapper.vm.canSuccess).toBeTruthy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测 start 的方法到 95% 是否停止运行 reset。', (done) => {
    let tim = null;
    wrapper.vm.$nextTick(() => {
      try {
        const timerTrue = jest.fn();
        wrapper.vm.reset = timerTrue;
        wrapper.update();
        wrapper.vm.start(20);
        tim = setInterval(() => {
          jest.useFakeTimers();
          jest.advanceTimersByTime(100);
          if (wrapper.vm.percent > 95) {
            clearInterval(tim);
            expect(timerTrue).toBeCalled();
            done();
          }
        }, 100);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测 start 的方法，如果 timer 存在执行 reset 方法。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const timerTrue = jest.fn();
        wrapper.vm.reset = timerTrue;
        wrapper.update();
        wrapper.vm.timer = 1;
        wrapper.vm.start();
        expect(timerTrue).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测 reset 的方法，time 存在的时候。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        wrapper.vm.reset(1000);
        setTimeout(() => {
          expect(wrapper.vm.percent).toBe(0);
          expect(wrapper.vm.show).toBeFalsy();
          expect(wrapper.vm.canSuccess).toBeTruthy();
          done();
        }, 1000);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检测 update 的方法。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        wrapper.vm.update(10);
        expect(wrapper.vm.percent).toBe(10);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
