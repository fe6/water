import { mount } from 'vue-test-utils';
import InputWraper from './InputWraper';
import Icon from '../../icon/Icon';

describe('InputWraper.vue', () => {
  let wrapperModel = null;
  let wrapperWatch = null;
  let wrapperSlotValue = null;

  beforeEach(() => {
    wrapperModel  = mount(InputWraper, {
      slots: {
        prefix: Icon,
        suffix: Icon
      }
    });
    wrapperWatch  = mount(InputWraper, {
      slots: {
        prefix: Icon,
        suffix: Icon
      },
      propsData: {
        value: 'input',
      },
    });
    wrapperSlotValue  = mount(InputWraper, {
      propsData: {
        value: 'input',
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.changeValue('lee', {});
        expect(wrapperModel.vm.inputValue).toEqual('lee');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test watch', (done) => {
    wrapperWatch.vm.$nextTick(() => {
      try {
        const inp = wrapperWatch.find('input');
        const changeFn = jest.fn();
        wrapperWatch.setMethods({
          'setValue': changeFn,
        });
        wrapperWatch.vm.value = '100';
        wrapperWatch.vm.$nextTick(() => {
          expect(changeFn).toBeCalled();
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test wrapperSlotValue', (done) => {
    wrapperSlotValue.vm.$nextTick(() => {
      try {
        expect(wrapperSlotValue.vm.slotValue).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
