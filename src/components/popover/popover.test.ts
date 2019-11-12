import { shallowMount } from '@vue/test-utils';
import Popover from './Popover.vue';
import Icon from '../icon/Icon.vue';

describe('Popover.vue', () => {
  let testFn: any = null;
  let testNoSlot: any = null;

  beforeEach(() => {
    testFn = shallowMount(Popover, {
      propsData: {
        value: false,
      },
      slots: {
        title: [Icon],
        content: [Icon],
      },
    });
    testNoSlot = shallowMount(Popover, {
      propsData: {
        value: false,
      },
    });
  });

  jest.useFakeTimers();

  it('test function', (done) => {
    testFn.vm.$nextTick(() => {
      try {
        // testFn.setProps({ value: true });
        // testFn.vm.bodyClick({ type: 'mouseleave' });
        // testFn.vm.popoverClick({ stopPropagation: () => {} });
        // testFn.vm.popoverLeave({ type: 'mouseleave', stopPropagation: () => {} });
        // testFn.vm.popoverEnter();
        // testFn.vm.setStatus(false, false);
        testFn.setProps({ value: true });
        testFn.vm.bodyClick({ type: 'mouseleave' });
        jest.runOnlyPendingTimers();
        testFn.vm.triggerHandle({ type: 'mouseenter' });
        jest.runOnlyPendingTimers();
        testFn.vm.coreLeave({ type: 'mouseleave' });
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
        testFn.vm.coreLeave({ type: 'click' });
        jest.runOnlyPendingTimers();
        testFn.vm.popoverClick({ stopPropagation: () => {} });
        testFn.vm.popoverLeave({
          type: 'mouseleave',
          stopPropagation: () => {},
        });
        testFn.vm.popoverEnter();

        testFn.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test no slot', (done) => {
    testNoSlot.vm.$nextTick(() => {
      try {
        expect(testFn.vm.arhasSlotsrowStyle).toBeFalsy();
        testNoSlot.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
