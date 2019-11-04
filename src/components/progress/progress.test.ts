import { shallowMount } from '@vue/test-utils';
import Progress from './Progress.vue';

describe('Progress.vue', () => {
  let progress: any = null;
  let progressStatus: any = null;

  beforeEach(() => {
    progress = shallowMount(Progress, {
      propsData: {
        value: 10,
      },
    });
    progressStatus = shallowMount(Progress, {
      propsData: {
        value: 10,
        status: 'success',
      },
    });
  });

  it('test value is 111', (done) => {
    const { vm } = progress;
    vm.$nextTick(() => {
      try {
        progress.setProps({ value: 111 });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test status is success', (done) => {
    const { vm } = progressStatus;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
