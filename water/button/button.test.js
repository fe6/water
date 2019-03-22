import { shallowMount } from '@vue/test-utils';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('Button.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: [Button],
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
        expect(wrapper.vm.$children[0].clicked).toBeTruthy();
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
});
