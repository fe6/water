import { shallow } from 'vue-test-utils';
import Number from './Number';


describe('Number.vue', () => {
  let wrapperNumber = null;
  let wrapperMore = null;
  let wrapperInput = null;
  let wrapperClickDisabled = null;
  let wrapperAnimate = null;
  let wrapperReadValue = null;

  beforeEach(() => {
    wrapperNumber = shallow(Number, {
      propsData: {
        value: 1,
      },
    });
    wrapperClickDisabled = shallow(Number, {
      propsData: {
        value: 10,
        max: 10,
        min: 10,
      },
    });
    wrapperMore = shallow(Number, {
      propsData: {
        value: 1,
        max: 10,
        min: -2,
      },
    });
    wrapperInput = shallow(Number);
    wrapperAnimate = shallow(Number, {
      propsData: {
        animate: true,
      },
    });
    wrapperReadValue = shallow(Number, {
      propsData: {
        animate: true,
      },
    });
  });

  it('test change number', (done) => {
    wrapperNumber.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapperNumber.vm.setValue = stub;
        wrapperNumber.vm.upNumber();
        expect(wrapperNumber.vm.downDisabled).toBeFalsy();
        expect(stub).toBeCalled();
        wrapperNumber.vm.downNumber();
        expect(stub).toBeCalled();
        wrapperNumber.vm.blurFn({ target: { value: '22' } });
        expect(wrapperNumber.vm.write).toBeFalsy();
        wrapperNumber.vm.focusFn();
        expect(wrapperNumber.vm.write).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test limit value', (done) => {
    wrapperMore.vm.$nextTick(() => {
      try {
        wrapperMore.vm.blurFn({ target: { value: '22' } });
        setTimeout(() => {
          expect(wrapperMore.vm.number).toBe(10);
          wrapperMore.vm.blurFn({ target: { value: '-100' } });
          setTimeout(() => {
            expect(wrapperMore.vm.number).toBe(-2);
            done();
          }, 100);
        }, 100);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test input', (done) => {
    wrapperInput.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapperInput.vm.setValue = stub;
        const input = wrapperInput.find('.w-number-input');
        input.trigger('input');
        expect(stub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test upDisabled', (done) => {
    wrapperClickDisabled.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapperClickDisabled.vm.setValue = stub;
        wrapperClickDisabled.vm.upNumber();
        expect(stub).not.toBeCalled();
        wrapperClickDisabled.vm.downNumber();
        expect(stub).not.toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test animate', (done) => {
    wrapperAnimate.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapperAnimate.vm.write = false;
        wrapperAnimate.vm.setValue = stub;
        wrapperAnimate.vm.upNumber();
        setTimeout(() => {
          expect(wrapperAnimate.vm.animatedNumber).toBe('0');
          expect(wrapperAnimate.vm.count).toBe('0');
          done();
        }, 600);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test readValue', (done) => {
    wrapperReadValue.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapperReadValue.vm.write = true;
        wrapperReadValue.vm.setValue = stub;
        wrapperReadValue.vm.upNumber();
        expect(wrapperReadValue.vm.count).toBe('0');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
