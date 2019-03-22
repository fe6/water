import { shallowMount } from '@vue/test-utils';
import Badge from './Badge';

describe('Badge.vue', () => {
  let wrapperModel = null;
  let wrapperLimit = null;
  let wrapperZero = null;
  const createBadge = value => shallowMount(Badge, {
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

  it('test limit', (done) => {
    wrapperLimit.vm.$nextTick(() => {
      try {
        expect(wrapperLimit.vm.titleValue).toBe('99+');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test limit', (done) => {
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
