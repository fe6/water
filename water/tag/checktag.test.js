import { shallowMount } from '@vue/test-utils';
import Checktag from './CheckTag';

describe('Checktag.vue', () => {
  let wrapperModel = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Checktag, {
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
