import { mount } from '@vue/test-utils';
import Timepicker from './Timepicker.vue';

const ev = { stopPropagation: () => {} };

describe('Timepicker.vue', () => {
  let wrapper: any = null;
  let wrapperBranch: any = null;

  beforeEach(() => {
    wrapper = mount(Timepicker, {});
    wrapperBranch = mount(Timepicker, {});
  });

  jest.useFakeTimers();

  it('test render', (done) => {
    const { vm } = wrapper;
    vm.$nextTick(() => {
      try {
        vm.inputChange({
          value: '10:10:10',
        });
        jest.runOnlyPendingTimers();
        vm.popoverClick(ev);
        vm.bodyClick();
        vm.inputValue = 'water';
        vm.bodyClick();
        vm.cancelFn({
          ev,
        });
        vm.openPicker();
        wrapper.setProps({
          open: true,
        });
        vm.setPickerStatus();
        vm.handleMouseOver();
        vm.handleMouseOut();
        vm.clearValue(ev);
        vm.$nextTick(() => {
          wrapper.destroy();
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test branch', (done) => {
    const { vm } = wrapperBranch;
    vm.$nextTick(() => {
      try {
        vm.inputChange({
          value: 'water',
        });
        jest.runOnlyPendingTimers();
        wrapperBranch.setProps({ disabled: true });
        vm.openPicker();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
