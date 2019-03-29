import { mount } from '@vue/test-utils';
import Icon from './Icon';

describe('Icon.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Icon, {
      propsData: {
        spin: true,
      },
    });
  });

  it('test prop', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.props().spin).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
