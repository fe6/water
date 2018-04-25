import { mount } from 'vue-test-utils';
import Button from './Button';

describe('Button.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Button, {
      slots: {
        default: 'default',
      },
    });
  });

  it('检测快照是否一样。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.vm.$el).toMatchSnapshot();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('click 事件是否触发', (done) => {
    try {
      wrapper.update();
      const button = wrapper.find('.w-button');
      button.trigger('click');
      expect(wrapper.vm.isClick).toBeTruthy();
      button.trigger('animationend');
      expect(wrapper.vm.isClick).toBeFalsy();
      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
