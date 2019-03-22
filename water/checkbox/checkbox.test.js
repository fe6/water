import { shallowMount } from '@vue/test-utils';
import Checkbox from './Checkbox';

describe('Checkbox.vue', () => {
  let wrapperModel = null;
  let wrapperDisabled = null;
  let wrapperOn = null;
  let wrapperNoClick = null;
  let wrapperValueEqual = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Checkbox);
    wrapperOn = shallowMount(Checkbox);
    wrapperValueEqual = shallowMount(Checkbox);
    wrapperDisabled = shallowMount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });
    wrapperNoClick = shallowMount(Checkbox, {
      propsData: {
        disabled: true,
      },
    });
  });

  it('test status', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        const checkboxElem = wrapperModel.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(wrapperModel.vm.checkStatus).toBe(true);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test watch disabled', (done) => {
    wrapperDisabled.vm.$nextTick(() => {
      try {
        expect(wrapperDisabled.vm.disabledStatus).toBe(true);
        wrapperDisabled.setProps({ disabled: false });
        setTimeout(() => {
          expect(wrapperDisabled.vm.disabledStatus).toBe(false);
          done();
        }, 10);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test watch on', (done) => {
    wrapperOn.vm.$nextTick(() => {
      try {
        expect(wrapperOn.vm.on).toBe(false);
        wrapperOn.setProps({ on: true });
        setTimeout(() => {
          expect(wrapperOn.vm.checkStatus).toBe(true);
          done();
        }, 10);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test can not click', (done) => {
    wrapperNoClick.vm.$nextTick(() => {
      try {
        const checkboxElem = wrapperNoClick.find('.w-checkbox');
        checkboxElem.trigger('click');
        expect(wrapperNoClick.vm.checkStatus).toBe(false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test equal', (done) => {
    wrapperValueEqual.vm.$nextTick(() => {
      try {
        wrapperValueEqual.vm.checkStatus = true;
        wrapperValueEqual.vm.setValue(true);
        expect(wrapperValueEqual.vm.checkStatus).toBe(true);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
