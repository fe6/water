import { shallowMount } from '@vue/test-utils';
import Popconfirm from './Popconfirm.vue';

describe('Popconfirm.vue', () => {
  let testFn: any = null;

  beforeEach(() => {
    testFn = shallowMount(Popconfirm, {
      propsData: {
        title: 'test',
        value: false,
      },
    });
  });

  jest.useFakeTimers();

  it('test function', (done) => {
    testFn.vm.$nextTick(() => {
      try {
        testFn.vm.bodyClick({ type: 'click' });
        jest.runOnlyPendingTimers();
        testFn.setProps({ value: true });
        testFn.vm.bodyClick({ type: 'click' });
        jest.runOnlyPendingTimers();
        testFn.vm.changeStatus({ type: 'click' }, 'ok');
        testFn.vm.okFn({ type: 'click' });
        testFn.vm.cancelFn({ type: 'click' }, 'cancel');
        testFn.setProps({ loading: true });
        testFn.vm.cancelFn({ type: 'click' }, 'cancel');
        testFn.destroy();
        testFn.vm.setStatus(false, false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
