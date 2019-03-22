import { shallowMount } from '@vue/test-utils';
import { baseData, baseColumns } from '../../site/table/base';
import TBody from './TBody';
import { noop } from '../utils/noop';

describe('TBody.vue', () => {
  let wrapperModel = null;
  let wrapperExpand = null;

  beforeEach(() => {
    wrapperModel = shallowMount(TBody, {
      propsData: {
        data: baseData,
        columns: baseColumns,
      },
    });
    wrapperExpand = shallowMount(TBody, {
      propsData: {
        data: baseData,
        columns: baseColumns,
        expandedRowRender: () => {},
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.setProps({ scrollTop: 1 });
        expect(wrapperModel.vm.$refs.scroll.scrollTop).toBe(1);
        const changeScrollFn = jest.fn();
        wrapperModel.vm.$on('changeScroll', changeScrollFn);
        wrapperModel.vm.scrollingFn({
          currentTarget: 1,
          target: 1,
        });
        expect(changeScrollFn).toBeCalled();
        wrapperModel.vm.scrollingFn({
          currentTarget: 1,
          target: 2,
        });
        expect(changeScrollFn).toBeCalled();
        const changeHoverFn = jest.fn();
        wrapperModel.vm.$on('changeHover', changeHoverFn);
        wrapperModel.vm.trOut();
        expect(changeHoverFn).toBeCalled();
        wrapperModel.vm.trOver();
        expect(changeHoverFn).toBeCalled();
        wrapperModel.vm.expandClick(1);
        expect(wrapperModel.vm.expandStatus).toEqual([true]);
        expect(wrapperModel.vm.checkbox).toEqual([
          { change: noop, disabled: false, indeterminate: false },
          { change: noop, disabled: false, indeterminate: false },
          { change: noop, disabled: false, indeterminate: false },
        ]);
        const checkboxChangeFn = jest.fn();
        wrapperModel.vm.$on('checkboxChange', checkboxChangeFn);
        wrapperModel.vm.checkboxChange();
        expect(checkboxChangeFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('expand', (done) => {
    wrapperExpand.vm.$nextTick(() => {
      try {
        expect(wrapperExpand.vm.expandStatus).toEqual([false, false, false]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
