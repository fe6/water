import { mount } from '@vue/test-utils';
import Input from './Input.vue';
import Icon from '../icon/Icon.vue';

describe('Input.vue', () => {
  let cb: any = null;
  let slot: any = null;

  beforeEach(() => {
    cb = mount(Input, {
      propsData: {
        value: 'true',
      },
    });
    slot = mount(Input, {
      propsData: {
        value: 'true',
        size: 'small',
      },
      slots: {
        prefix: [Icon],
        suffix: [Icon],
      },
    });
  });

  it('test Input', (done) => {
    cb.vm.$nextTick(() => {
      try {
        cb.vm.changeValue({}, 'sss');
        expect(cb.vm.prefixClass).toEqual([{ 'w-input-wraper-prefix-undefined': undefined }]);
        expect(cb.vm.suffixClass).toEqual([{ 'w-input-wraper-suffix-limit': false, 'w-input-wraper-suffix-limit-undefined': undefined, 'w-input-wraper-suffix-undefined': undefined }]);
        expect(cb.vm.inputClass).toEqual([{
          'w-input-slot-prefix': false,
          'w-input-slot-prefix-undefined': false,
          'w-input-slot-suffix': false,
          'w-input-slot-suffix-undefined': false,
        }]);
        expect(cb.vm.wraperClass).toEqual([{ 'w-input-wraper-slot': false }]);
        expect(cb.vm.error()).toBe(false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test Input slot', (done) => {
    slot.vm.$nextTick(() => {
      try {
        expect(slot.vm.inputClass).toEqual([{
          'w-input-slot-prefix': true,
          'w-input-slot-prefix-small': 'small',
          'w-input-slot-suffix': true,
          'w-input-slot-suffix-small': 'small',
        }]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
