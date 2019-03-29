import { shallowMount } from '@vue/test-utils';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('Button.vue', () => {
  let wrapper = null;
  let wrapperColor = null;

  beforeEach(() => {
    wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: [Button],
      },
    });
    wrapperColor = shallowMount(Button, {
      propsData: {
        type: 'danger',
      },
      slots: {
        default: 'sss',
      },
    });
  });

  it('检测快照是否一样。', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.vm.$children[0].$el).toMatchSnapshot();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('点击事件是否触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const button = wrapper.find('.w-button');
        button.trigger('click');
        button.trigger('animationend');
        expect(wrapper.vm.$children[0].clicked).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('移出事件是否 emit', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapper.vm.$children[0].$on('mouseout', stub);
        const button = wrapper.find('.w-button');
        button.trigger('mouseout');
        expect(stub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('移入事件是否 emit', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        wrapper.vm.$children[0].$on('mouseover', stub);
        const button = wrapper.find('.w-button');
        button.trigger('mouseover');
        expect(stub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test iconColor', (done) => {
    wrapperColor.vm.$nextTick(() => {
      try {
        expect(wrapperColor.vm.iconColor).toBe('#f5222d');
        wrapperColor.setProps({ type: 'ghost' });
        expect(wrapperColor.vm.iconColor).toBe('#fff');
        wrapperColor.setProps({ type: 'primary' });
        expect(wrapperColor.vm.iconColor).toBe('#fff');
        wrapperColor.setProps({ type: '' });
        expect(wrapperColor.vm.iconColor).toBe('rgba(0, 0, 0, 0.65)');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
