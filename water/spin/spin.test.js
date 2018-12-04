import { shallow } from 'vue-test-utils';
import Spin from './Spin';

describe('Spin.vue', () => {
  let wrapperModel = null;

  beforeEach(() => {
    wrapperModel = shallow(Spin, {
      propsData: {
        value: true,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.spinValue).toBeTruthy();
        expect(wrapperModel.vm.boxClasses).toBeTruthy();
        expect(wrapperModel.vm.tipValue).toBeFalsy();
        expect(wrapperModel.vm.tipClasses).toEqual([{"w-spin-tip-lg": false, "w-spin-tip-sm": false}]);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
