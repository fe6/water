import { shallowMount } from '@vue/test-utils';
import CheckTag from './CheckTag.vue';

describe('CheckTag.vue', () => {
  let wrapperModel: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(CheckTag, {
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
