import { shallowMount } from '@vue/test-utils';
import { sortData, sortColumns } from '../../site/table/sort';
import { fixData, fixColumns } from '../../site/table/fix';
import THead from './THead';

describe('THead.vue', () => {
  let wrapperModel = null;
  let wrapperFix = null;
  let wrapperFix2 = null;

  beforeEach(() => {
    wrapperModel = shallowMount(THead, {
      propsData: {
        data: sortData,
        columns: sortColumns,
      },
    });
    wrapperFix = shallowMount(THead, {
      propsData: {
        data: sortData,
        columns: sortColumns,
        scroll: {
          x: 100,
        },
      },
    });
    wrapperFix2 = shallowMount(THead, {
      propsData: {
        data: fixData,
        columns: fixColumns,
        scroll: {
          x: 100,
        },
      },
    });
  });

  it('render', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.resetData();
        expect(wrapperModel.vm.data).toEqual(sortData);
        const changeFn = jest.fn();
        wrapperModel.vm.$on('change', changeFn);
        wrapperModel.vm.sortCol(sortColumns[1], 1);
        expect(wrapperModel.vm.data).toEqual(sortData);
        expect(wrapperModel.vm.colSort).toEqual(['all', 'descend', 'all']);
        wrapperModel.vm.sortCol(sortColumns[1], 1);
        expect(wrapperModel.vm.data).toEqual(sortData);
        expect(wrapperModel.vm.colSort).toEqual(['all', 'all', 'all']);
        wrapperModel.vm.sortCol(sortColumns[1], 1);
        expect(wrapperModel.vm.data).toEqual(sortData);
        expect(wrapperModel.vm.colSort).toEqual(['all', 'ascend', 'all']);
        expect(changeFn).toBeCalled();
        const checkboxChangeFn = jest.fn();
        wrapperModel.vm.$on('checkboxChange', checkboxChangeFn);
        wrapperModel.vm.checkboxChange();
        expect(checkboxChangeFn).toBeCalled();
        const sortColumnsNew = sortColumns.slice();
        sortColumnsNew[1].sorter = false;
        wrapperModel.vm.sortCol(sortColumnsNew[1], 1);
        expect(checkboxChangeFn).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('fix', (done) => {
    wrapperFix.vm.$nextTick(() => {
      try {
        expect(wrapperFix.vm.scrollStyle).toEqual({ width: '100px', overflowX: 'scroll' });
        const resetDataFn = jest.fn();
        wrapperFix.vm.resetData = resetDataFn;
        wrapperFix.vm.sortCol(sortColumns[0], 0);
        wrapperFix.vm.sortCol(sortColumns[0], 0);
        wrapperFix.vm.sortCol(sortColumns[0], 0);
        expect(resetDataFn).toBeCalled();
        const sortColumnsNew = sortColumns.slice();
        sortColumnsNew[2].sorter = false;
        wrapperFix.vm.sortCol(sortColumns[2], 2);
        wrapperFix.vm.sortCol(sortColumns[2], 2);
        wrapperFix.vm.sortCol(sortColumns[2], 2);
        expect(resetDataFn).toBeCalled();
        expect(wrapperFix.vm.colSort).toEqual(['all', 'all', 'all']);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('fix2', (done) => {
    wrapperFix2.vm.$nextTick(() => {
      try {
        expect(wrapperFix2.vm.fixColumns).toEqual(fixColumns);
        wrapperFix2.setProps({ fixed: 'left' });
        expect(wrapperFix2.vm.fixColumns).toEqual(fixColumns.filter(colItem => colItem.fixed === 'left'));
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });


  it('sortDirections ascend', (done) => {
    wrapperFix.vm.$nextTick(() => {
      try {
        const sortColumnsNew = sortColumns.slice();
        sortColumnsNew[2].sortDirections = ['ascend'];
        wrapperFix.vm.sortCol(sortColumnsNew[2], 2);
        expect(wrapperFix.vm.colSort).toEqual(['all', 'all', 'ascend']);
        wrapperFix.vm.sortCol(sortColumnsNew[2], 2);
        expect(wrapperFix.vm.colSort).toEqual(['all', 'all', 'ascend']);
        wrapperFix.vm.sortCol(sortColumnsNew[2], 2);
        expect(wrapperFix.vm.colSort).toEqual(['all', 'all', 'ascend']);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
