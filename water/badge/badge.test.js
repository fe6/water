import { shallow } from 'vue-test-utils';
import Badge from './Badge';

describe('Badge.vue', () => {
  let wrapperModel = null;

  beforeEach(() => {
    wrapperModel = shallow(Badge, {
      propsData: {
        value: 10,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.titleValue).toBe(10);
        expect(wrapperModel.vm.slotCount).toBeFalsy();
        wrapperModel.vm.value = 100;
        expect(wrapperModel.vm.titleValue).toBe('99+');
        wrapperModel.vm.value = 0;
        expect(wrapperModel.vm.showCount).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
