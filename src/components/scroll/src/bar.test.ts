/** @format */

import { mount } from '@vue/test-utils';
import Bar from './Bar.vue';

describe('Bar.vue', () => {
  let wrapper: any = null;
  let wrapper2: any = null;

  beforeEach(() => {
    wrapper = mount(Bar, {
      propsData: {},
    });
    wrapper2 = mount(Bar, {
      propsData: {
        isVertical: true,
      },
    });
  });

  it('test render and function', (done) => {
    const { vm } = wrapper;
    vm.$nextTick(() => {
      try {
        vm.clickThumbHandler({
          ctrlKey: false,
          button: 1,
          clientX: 10,
          currentTarget: {
            offsetHeight: 100,
            offsetWidth: 100,
            getBoundingClientRect() {
              return {
                left: 10,
              };
            },
          },
          stopImmediatePropagation() {},
        });
        vm.startDrag({
          stopImmediatePropagation() {},
        });
        vm.mouseMoveDocumentHandler({
          clientX: 12,
        });
        vm.mouseUpDocumentHandler();
        vm.clickTrackHandler({
          ctrlKey: false,
          button: 1,
          clientX: 10,
          target: {
            offsetHeight: 100,
            offsetWidth: 100,
            getBoundingClientRect() {
              return {
                left: 10,
              };
            },
          },
        });
        vm.clickThumbHandler({
          ctrlKey: false,
          button: 1,
          currentTarget: {
            offsetHeight: 100,
            offsetWidth: 100,
            getBoundingClientRect() {
              return {
                left: 10,
              };
            },
          },
          stopImmediatePropagation() {},
        });
        vm.clickThumbHandler({
          ctrlKey: true,
          button: 2,
          target: {
            offsetHeight: 100,
            offsetWidth: 100,
            getBoundingClientRect() {
              return {
                left: 10,
              };
            },
          },
          stopImmediatePropagation() {},
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test branch', (done) => {
    const { vm } = wrapper2;
    vm.$nextTick(() => {
      try {
        vm.mouseMoveDocumentHandler({
          clientX: 12,
        });
        vm.isCursorDown = true;
        vm.mouseMoveDocumentHandler({
          clientX: 12,
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
