import { shallowMount } from '@vue/test-utils';
import Tooltip from './Tooltip.vue';

describe('Tooltip.vue', () => {
  let testFn: any = null;

  beforeEach(() => {
    testFn = shallowMount(Tooltip, {
      propsData: {
        content: 'test',
        value: false,
      },
    });
  });

  jest.useFakeTimers();

  it('test function', (done) => {
    testFn.vm.$nextTick(() => {
      try {
        testFn.setProps({ value: true });
        testFn.vm.bodyClick({ type: 'mouseleave' });
        jest.runOnlyPendingTimers();
        testFn.vm.triggerHandle({ type: 'mouseenter' });
        jest.runOnlyPendingTimers();
        testFn.vm.mouseleave({ type: 'mouseleave' });
        jest.runOnlyPendingTimers();

        testFn.setProps({ arrowColor: '#ff0', placement: 'top' });
        expect(testFn.vm.arrowStyle).toEqual({ 'border-top-color': '#ff0' });
        testFn.setProps({ arrowColor: '#ff0', placement: 'bottom' });
        expect(testFn.vm.arrowStyle).toEqual({ 'border-bottom-color': '#ff0' });
        testFn.setProps({ arrowColor: '#ff0', placement: 'left' });
        expect(testFn.vm.arrowStyle).toEqual({ 'border-left-color': '#ff0' });
        testFn.setProps({ arrowColor: '#ff0', placement: 'right' });
        expect(testFn.vm.arrowStyle).toEqual({ 'border-right-color': '#ff0' });

        testFn.setProps({ trigger: 'click' });
        testFn.vm.bodyClick({ type: 'click' });

        testFn.setProps({ trigger: 'mouseenter' });
        testFn.vm.mouseleave({ type: 'click' });
        jest.runOnlyPendingTimers();

        testFn.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
