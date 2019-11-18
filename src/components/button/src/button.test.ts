import { mount } from '@vue/test-utils';
import Button from './Button.vue';
import ButtonGroup from './ButtonGroup.vue';

describe('Button.vue', () => {
  let btn: any = null;
  let wrapper: any = null;

  beforeEach(() => {
    btn = mount(Button);
    wrapper = mount(ButtonGroup, {
      slots: {
        default: [Button],
      },
    });
  });

  it('test Button', (done) => {
    btn.vm.$nextTick(() => {
      try {
        expect(btn.vm.groupClass).toBe('');
        btn.setProps({ stop: true });
        btn.vm.clickFn({ stopPropagation: () => {} });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test ButtonGroup', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const button = wrapper.find('.w-btn');
        button.trigger('click');
        button.trigger('animationend');
        expect(wrapper.vm.$children[0].clicked).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
