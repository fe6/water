import { shallow } from 'vue-test-utils';
import Rate from './Rate';

describe('Rate.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(Rate, {
      propsData: {
        value: 1,
      },
    });
  });

  it('change 事件是否 emit', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const changeFn = jest.fn();
        wrapper.vm.$on('change', changeFn);
        const rateElem = wrapper.find('.w-rate-elem');
        rateElem.trigger('click');
        expect(changeFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('mouseover 事件是否 emit', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const hoverFn = jest.fn();
        wrapper.vm.$on('hover', hoverFn);
        const rateElem = wrapper.find('.w-rate-elem');
        rateElem.trigger('mouseover');
        expect(hoverFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('移出一个评分元素，检测事件是否触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const leftOutFn = jest.fn();
        wrapper.vm.leftOut = leftOutFn;
        const rateElem = wrapper.find('.w-rate-elem');
        rateElem.trigger('mouseleave');
        expect(leftOutFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('移出整个评分事件是否触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const setIndexFn = jest.fn();
        wrapper.vm.setIndex = setIndexFn;
        const updateIndexListFn = jest.fn();
        wrapper.vm.updateIndexList = updateIndexListFn;
        const rate = wrapper.find('.w-rate');
        rate.trigger('mouseleave');
        expect(setIndexFn).toBeCalled();
        expect(updateIndexListFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('移出整个评分事件是否触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const mockData = [];
        wrapper.vm.getIndex = jest.fn(() => mockData);
        wrapper.vm.value = 2;
        wrapper.update();
        expect(wrapper.vm.getIndex().length).toBe(0);
        expect(wrapper.vm.index).toBe(-1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('检索 v-model 是否有变化', (done) => {
    const initFn = jest.fn();
    wrapper.vm.init = initFn;
    expect(wrapper.vm.value).toBe(1);
    wrapper.vm.value = 2;
    wrapper.update();
    expect(wrapper.vm.init).toBeCalled();
    done();
  });
});

describe('half Rate.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(Rate, {
      propsData: {
        value: 1,
        half: true,
      },
    });
  });

  it('移入右边看函数是否正常触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const setIndex = jest.fn();
        wrapper.vm.setIndex = setIndex;
        const updateIndexList = jest.fn();
        wrapper.vm.updateIndexList = updateIndexList;
        const emitHover = jest.fn();
        wrapper.vm.emitHover = emitHover;
        const rateRight = wrapper.find('.w-rate-elem-right');
        rateRight.trigger('mouseover');
        expect(setIndex).toBeCalled();
        expect(updateIndexList).toBeCalled();
        expect(emitHover).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('点击左边，检测函数是否正常触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const setClickedIndex = jest.fn();
        wrapper.vm.setClickedIndex = setClickedIndex;
        const emitClick = jest.fn();
        wrapper.vm.emitClick = emitClick;
        const rateLeft = wrapper.find('.w-rate-elem-left');
        rateLeft.trigger('click');
        expect(setClickedIndex).toBeCalled();
        expect(emitClick).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('移出左边，检测函数是否正常触发', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        const setIndex = jest.fn();
        wrapper.vm.setIndex = setIndex;
        const updateIndexList = jest.fn();
        wrapper.vm.updateIndexList = updateIndexList;
        const rateLeft = wrapper.find('.w-rate-elem-left');
        rateLeft.trigger('mouseleave');
        expect(setIndex).toBeCalled();
        expect(updateIndexList).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
