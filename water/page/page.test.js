import { shallow } from 'vue-test-utils';
import Page from './Page';

describe('Page.vue', () => {
  let wrapperModel = null;
  let wrapperSimple = null;
  let wrapperTotal = null;
  let wrapperSetNow = null;
  let wrapperItemEnd = null;
  let wrapperMidleSize = null;

  beforeEach(() => {
    wrapperModel = shallow(Page, {
      propsData: {
        value: 1,
      },
    });
    wrapperSimple = shallow(Page, {
      propsData: {
        value: 1,
        simple: true,
      },
    });
    wrapperTotal = shallow(Page, {
      propsData: {
        value: 1,
      },
    });
    wrapperSetNow = shallow(Page);
    wrapperItemEnd = shallow(Page, {
      propsData: {
        value: 1,
        total: 125,
      },
    });
    wrapperMidleSize = shallow(Page, {
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
        wrapperModel.vm.value = 2;
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
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('total', (done) => {
    wrapperTotal.vm.$nextTick(() => {
      try {
        wrapperTotal.vm.total = 100;
        expect(wrapperTotal.vm.totalNumber).toBe(100);
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
        wrapperSetNow.vm.value = 6;
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
