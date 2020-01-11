/** @format */

import { mount, shallowMount } from '@vue/test-utils';
import Scroll from './Scroll.vue';

const slots = {
  default: '<p>这是一段文字++2</p>',
};

const ev = {
  target: {
    tagName: 'DIV',
  },
  preventDefault() {},
  stopPropagation() {},
};

describe('Scroll.vue', () => {
  let wrapper: any = null;
  let wrapperScrollMove: any = null;
  let wrapperScrollMovePrev: any = null;
  let wrapperScrolFn: any = null;
  let wrapperResize: any = null;
  let disEmpty: any = null;
  let wrapUpdate: any = null;

  beforeEach(() => {
    wrapper = mount(Scroll, {
      propsData: {},
      slots,
    });
    wrapperScrollMove = mount(Scroll, {
      slots,
    });
    wrapperScrollMovePrev = mount(Scroll, {
      propsData: {
        openPull: true,
      },
      slots,
    });
    wrapperScrolFn = shallowMount(Scroll, {
      slots,
    });
    wrapperResize = mount(Scroll, {
      propsData: {
        noResize: false,
      },
      slots,
    });
    disEmpty = shallowMount(Scroll, {
      slots,
    });
    wrapUpdate = shallowMount(Scroll, {
      slots,
    });
  });

  it('test render', (done) => {
    const { vm } = wrapper;
    vm.$nextTick(() => {
      try {
        vm.finishPull();
        vm.refresh();
        vm.dragChange(false);
        vm.scrollDir = 'down';
        vm.scrollMove({
          ev,
          scrollChange: 1,
          scrollScale: 0.1,
          eventType: 'scroll',
        });
        vm.scrollTo(10);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test scrollMove', (done) => {
    const { vm } = wrapperScrollMove;
    vm.$nextTick(() => {
      try {
        vm.scrollDir = '';
        vm.scrollMove({
          ev,
          scrollChange: 100,
        });
        wrapperScrollMove.setProps({
          openPull: true,
        });
        vm.scrollMove({
          ev: {
            target: {
              tagName: 'DIV',
            },
            preventDefault() {},
          },
          scrollChange: 1000,
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test scrollMove to prev', (done) => {
    const { vm } = wrapperScrollMovePrev;
    vm.$nextTick(() => {
      try {
        vm.scrollMove({
          ev,
          scrollChange: -1000,
        });
        vm.scrollMove({
          ev,
          scrollChange: 2000,
        });
        vm.scrollMove({
          ev,
          scrollChange: 2000,
        });
        vm.barMove({
          ev,
          scrollChange: 2000,
          thumbPositionPercentage: 10,
        });
        vm.barClickTrack({
          ev,
          scrollChange: 2000,
          thumbPositionPercentage: 10,
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test scroll function', (done) => {
    const { vm } = wrapperScrolFn;
    vm.$nextTick(() => {
      try {
        vm.wrap.scrollTop = 10;
        vm.handleScroll({
          ev: {
            target: {
              tagName: 'DIV',
            },
            wheelDelta: 10,
            preventDefault() {},
          },
          scrollChange: 2000,
        });
        vm.wrap.scrollTop = 0;
        vm.handleScroll({
          ev: {
            target: {
              tagName: 'DIV',
            },
            wheelDelta: 10,
            preventDefault() {},
          },
          scrollChange: 0,
        });
        wrapperScrolFn.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test resize', (done) => {
    const { vm } = wrapperResize;
    vm.$nextTick(() => {
      try {
        vm.updateResize();
        wrapperResize.destroy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test scrollDir when scroll end', (done) => {
    const { vm } = disEmpty;
    vm.$nextTick(() => {
      try {
        vm.lastScroll = 10;
        vm.scrollMove({
          ev,
          scrollChange: 10,
        });
        disEmpty.setProps({
          openPull: true,
        });
        disEmpty.setProps({
          edgeIsPreventDefault: false,
        });
        vm.scrollMove({
          ev,
          scrollChange: 10,
        });
        disEmpty.setProps({
          disabled: true,
        });
        vm.scrollMove({
          ev,
          scrollChange: 10,
        });
        disEmpty.setProps({
          stopPropagation: false,
        });
        vm.scrollMove({
          ev,
          scrollChange: 10,
        });

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test update', (done) => {
    const { vm } = wrapUpdate;
    vm.$nextTick(() => {
      try {
        vm.getSize(11);
        vm.getSize(100);
        wrapUpdate.setProps({ type: 'horizontal' });
        expect(vm.bar).toEqual({
          axis: 'X',
          client: 'clientX',
          clientSize: 'clientWidth',
          direction: 'left',
          key: 'horizontal',
          offset: 'offsetWidth',
          scroll: 'scrollLeft',
          scrollSize: 'scrollWidth',
          size: 'width',
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
