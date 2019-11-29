import { mount } from '@vue/test-utils';
import TimePanel from './TimePanel.vue';

describe('TimePanel.vue', () => {
  let wrapper: any = null;
  let wrapperHH: any = null;
  let wrapperMM: any = null;
  let wrapperSS: any = null;

  beforeEach(() => {
    wrapper = mount(TimePanel, {
      propsData: {},
    });
    wrapperHH = mount(TimePanel, {
      propsData: {
        valueFormat: 'HH',
        format: 'HH',
      },
    });
    wrapperMM = mount(TimePanel, {
      propsData: {
        valueFormat: 'mm',
        format: 'mm',
      },
    });
    wrapperSS = mount(TimePanel, {
      propsData: {
        valueFormat: 'ss',
        format: 'ss',
      },
    });
  });

  it('test render', (done) => {
    const { vm } = wrapper;
    vm.$nextTick(() => {
      try {
        vm.initHours();
        vm.initMinutes();
        vm.initSeconds();
        vm.returnModel();
        vm.hourChange('01');
        vm.minuteChange('01');
        vm.secondChange('01');
        vm.hour = '';
        vm.minute = '';
        vm.second = '';
        vm.formatNewValue();
        expect(vm.hasHour).toBeTruthy();
        expect(vm.hasMinute).toBeTruthy();
        expect(vm.listLength).toBe(3);
        expect(vm.hasSecond).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test only hour', (done) => {
    const { vm } = wrapperHH;
    vm.$nextTick(() => {
      try {
        expect(vm.hasHour).toBeTruthy();
        expect(vm.hasMinute).toBeFalsy();
        expect(vm.listLength).toBe(1);
        expect(vm.hasSecond).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test only minute', (done) => {
    const { vm } = wrapperMM;
    vm.$nextTick(() => {
      try {
        expect(vm.hasHour).toBeFalsy();
        expect(vm.hasMinute).toBeTruthy();
        expect(vm.hasSecond).toBeFalsy();
        expect(vm.listLength).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test only second', (done) => {
    const { vm } = wrapperSS;
    vm.$nextTick(() => {
      try {
        expect(vm.hasHour).toBeFalsy();
        expect(vm.hasMinute).toBeFalsy();
        expect(vm.hasSecond).toBeTruthy();
        expect(vm.listLength).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
