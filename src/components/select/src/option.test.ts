/** @format */

import { shallowMount } from '@vue/test-utils';
import Option from './Option.vue';

describe('Option.vue', () => {
  let wrapperModel: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Option, {
      propsData: {
        value: 'true',
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        const switchElem = wrapperModel.find('.w-option-single');
        switchElem.trigger('click');
        expect(wrapperModel.vm.mode).toBe('single');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
