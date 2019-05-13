import { mount } from '@vue/test-utils';
import Badge from './Badge.vue';

describe('Badge.vue', () => {
  let wrapperModel:any = null;
  let wrapperLimit:any = null;
  let wrapperZero:any = null;
  const createBadge = (value: any) => mount(Badge, {
    propsData: {
      value,
    },
  });

  beforeEach(() => {
    wrapperModel = createBadge(10);
    wrapperLimit = createBadge(100);
    wrapperZero = createBadge(0);
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        expect(wrapperModel.vm.titleValue).toBe(10);
        expect(wrapperModel.vm.slotCount).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test titleValue', (done) => {
    wrapperLimit.vm.$nextTick(() => {
      try {
        expect(wrapperLimit.vm.titleValue).toBe('99+');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test showCount', (done) => {
    wrapperZero.vm.$nextTick(() => {
      try {
        expect(wrapperZero.vm.showCount).toBeFalsy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
