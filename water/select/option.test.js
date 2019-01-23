import { shallow } from 'vue-test-utils';
import Option from './Option';

describe('Option.vue', () => {
  let wrapperModel = null;

  beforeEach(() => {
    wrapperModel = shallow(Option, {
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
