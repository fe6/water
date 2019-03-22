import { shallowMount } from '@vue/test-utils';
import { baseData, baseColumns } from '../../site/table/base';
import { fixData, fixColumns } from '../../site/table/fix';
import Table from './Table';

describe('Table.vue', () => {
  let wrapperModel = null;
  let wrapperFix = null;
  let wrapperFix2 = null;
  let wrapperChange = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Table, {
      propsData: {
        data: baseData,
        columns: baseColumns,
        loading: true,
      },
    });
    wrapperFix2 = shallowMount(Table, {
      propsData: {
        data: fixData,
        columns: fixColumns,
        fixed: true,
        scroll: {
          y: 100,
          x: 100,
        },
      },
    });
    wrapperFix = shallowMount(Table, {
      propsData: {
        data: baseData,
        columns: baseColumns,
        fixed: true,
        scroll: {
          y: 100,
          x: 100,
        },
      },
    });
    wrapperChange = shallowMount(Table, {
      propsData: {
        data: baseData,
        columns: baseColumns,
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.getSrollTop(1);
        expect(wrapperModel.vm.scrollTop).toBe(1);
        wrapperModel.vm.getHoverIndex(2);
        expect(wrapperModel.vm.hoverIndex).toBe(2);
        wrapperModel.vm.scrollingFn({
          target: {
            scrollLeft: 0,
            offsetLeft: 0,
            offsetWidth: 1300,
          },
        });
        expect(wrapperModel.vm.scrollLeft).toBeTruthy();
        expect(wrapperModel.vm.scrollLeft).toBeTruthy();
        const changeFn = jest.fn();
        wrapperModel.setProps({
          rowSelection: {
            change: changeFn,
          },
        });
        wrapperModel.vm.checkboxTBodyChange({}, 1, {}, true);
        const changeFn2 = jest.fn();
        wrapperModel.vm.$on('change', changeFn2);
        wrapperModel.vm.headerChange(1, 2, 3);
        expect(changeFn2).toBeCalled();
        wrapperModel.vm.checkboxTBodyChange({ a: 12 }, 0, {}, false);
        expect(wrapperModel.vm.bodyChecked).toEqual([]);
        wrapperModel.vm.checkboxTHeadChange({}, true);
        expect(wrapperModel.vm.bodyChecked).toEqual(baseData);
        expect(wrapperModel.vm.scrollWidth).toEqual({});
        expect(wrapperModel.vm.scrollHeight).toEqual({});
        wrapperModel.vm.checkboxTHeadChange({}, false);
        expect(wrapperModel.vm.bodyChecked).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('fix', (done) => {
    wrapperFix.vm.$nextTick(() => {
      try {
        expect(wrapperFix.vm.scrollHeight).toEqual({ maxHeight: '100px', overflowY: 'scroll' });
        expect(wrapperFix.vm.scrollWidth).toEqual({ width: '100px', overflowX: 'scroll' });
        wrapperModel.vm.scrollingFn({});
        expect(wrapperFix.vm.scrollLeft).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('fix', (done) => {
    wrapperFix2.vm.$nextTick(() => {
      try {
        expect(wrapperFix2.vm.hasFixedLeft).toBeTruthy();
        expect(wrapperFix2.vm.hasFixedRight).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('change', (done) => {
    wrapperChange.vm.$nextTick(() => {
      try {
        wrapperChange.vm.checkboxTBodyChange({ a: 12 }, 0, {}, false);
        expect(wrapperChange.vm.bodyChecked).toEqual([]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
