/** @format */

import { mount } from '@vue/test-utils';
import Countdown from './Countdown.vue';

describe('Countdown.vue', () => {
  let wrapperRender: any = null;
  let wrapperTime: any = null;

  beforeEach(() => {
    wrapperRender = mount(Countdown, {
      propsData: {
        value: 1,
      },
    });
    wrapperTime = mount(Countdown, {
      propsData: {
        value: Date.now() + 1000 * 5,
      },
    });
  });

  jest.useFakeTimers();

  it('test render', (done) => {
    const { vm } = wrapperRender;
    vm.$nextTick(() => {
      try {
        vm.stopTimer();
        vm.countdownId = 1;
        vm.stopTimer();
        vm.startTimer();
        jest.runOnlyPendingTimers();
        vm.syncTimer();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test run time', (done) => {
    const { vm } = wrapperTime;
    vm.$nextTick(() => {
      try {
        vm.syncTimer();
        wrapperTime.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
