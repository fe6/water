import { shallowMount } from '@vue/test-utils';
import Page from './Page.vue';

describe('Page.vue', () => {
  let wrapperModel: any = null;
  let wrapperSimple: any = null;
  let wrapperTotal: any = null;
  let wrapperSetNow: any = null;
  let wrapperItemEnd: any = null;
  let wrapperMidleSize: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Page, {
      propsData: {
        value: 1,
      },
    });
    wrapperSimple = shallowMount(Page, {
      propsData: {
        value: 1,
        simple: true,
      },
    });
    wrapperTotal = shallowMount(Page, {
      propsData: {
        value: 1,
      },
    });
    wrapperSetNow = shallowMount(Page);
    wrapperItemEnd = shallowMount(Page, {
      propsData: {
        value: 1,
        total: 125,
      },
    });
    wrapperMidleSize = shallowMount(Page, {
      propsData: {
        value: 1,
        midleSize: 20,
        total: 100,
      },
    });
  });

  it('watch', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.current).toBe(1);
        wrapperModel.setProps({ value: 2 });
        wrapperModel.vm.$nextTick(() => {
          expect(wrapperModel.vm.current).toBe(2);
          done();
        });
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('simple', (done) => {
    wrapperSimple.vm.$nextTick(() => {
      try {
        wrapperSimple.vm.simpleChange({ target: { value: 3 } });
        expect(wrapperSimple.vm.current).toBe(3);
        wrapperSimple.vm.nextPage();
        expect(wrapperSimple.vm.current).toBe(4);
        wrapperSimple.vm.prevPage();
        expect(wrapperSimple.vm.current).toBe(3);
        wrapperSimple.vm.resetCurrent();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('total', (done) => {
    wrapperTotal.vm.$nextTick(() => {
      try {
        wrapperTotal.setProps({ total: 100 });
        expect(wrapperTotal.vm.totalNumber).toBe(100);
        wrapperTotal.setProps({ showTotal: () => 1 });
        expect(wrapperTotal.vm.$options.props.showTotal.validator('showTotal')).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('setNow', (done) => {
    wrapperSetNow.vm.$nextTick(() => {
      try {
        expect(wrapperSetNow.vm.current).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('itemEnd', (done) => {
    wrapperItemEnd.vm.$nextTick(() => {
      try {
        expect(wrapperItemEnd.vm.itemEnd).toBe(10);
        wrapperSetNow.setProps({ value: 6 });
        expect(wrapperItemEnd.vm.itemEnd).toBe(10);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('midleSizeValue', (done) => {
    wrapperMidleSize.vm.$nextTick(() => {
      try {
        expect(wrapperSetNow.vm.midleSizeValue).toBe(5);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
