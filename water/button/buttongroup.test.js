import { shallowMount } from '@vue/test-utils';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup.vue', () => {
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
        expect(wrapper.vm.$el).toMatchSnapshot();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('默认第一个选中', (done) => {
    expect(wrapper.vm.$children[0].status).toBeTruthy();
    done();
  });

  it('索引变化是否有样式更新', (done) => {
    const updateChildFn = jest.fn();
    wrapper.vm.updateChild = updateChildFn;
    expect(wrapper.vm.$children[0].status).toBeTruthy();
    wrapper.setProps({ on: 2 });
    expect(wrapper.vm.index).toBe(2);
    expect(wrapper.vm.updateChild).toBeCalled();
    done();
  });
});
