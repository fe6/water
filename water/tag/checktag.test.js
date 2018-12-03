import { shallow } from 'vue-test-utils';
import Checktag from './Checktag';

describe('Checktag.vue', () => {
  let wrapperModel = null;

  beforeEach(() => {
    wrapperModel  = shallow(Checktag, {
      propsData: {
        size: 'small',
        disabled: false,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.value).toBeFalsy();
        expect(wrapperModel.vm.sizeValue).toBe('small');
        expect(wrapperModel.vm.disabledValue).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
