import { shallowMount } from '@vue/test-utils';
import ProgressText from './ProgressText.vue';

describe('ProgressText.vue', () => {
  let progress: any = null;
  let progressStatus: any = null;

  beforeEach(() => {
    progress = shallowMount(ProgressText, {
      propsData: {
        value: 10,
      },
    });
    progressStatus = shallowMount(ProgressText, {
      propsData: {
        value: 10,
        status: 'success',
      },
    });
  });

  it('test render', (done) => {
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
