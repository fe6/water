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
        testFn.vm.bodyClick({ ev: { type: 'click' } });
        jest.runOnlyPendingTimers();
        testFn.setProps({ value: true });
        testFn.vm.bodyClick({ ev: { type: 'click' } });
        jest.runOnlyPendingTimers();
        testFn.vm.changeStatus({ ev: { type: 'click' } }, 'ok');
        testFn.vm.okFn({ ev: { type: 'click' } });
        testFn.vm.cancelFn({ ev: { type: 'click' } }, 'cancel');
        testFn.setProps({ loading: true });
        testFn.vm.cancelFn({ ev: { type: 'click' } }, 'cancel');
        testFn.destroy();
        testFn.vm.setStatus(false, false);
        testFn.vm.popoverClick({ stopPropagation: () => {} });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
