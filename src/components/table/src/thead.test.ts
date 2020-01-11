/** @format */

import { shallowMount } from '@vue/test-utils';
import { sortCol, sortOptions } from '@/views/code/table/options/sort';
import {
  slotColArray,
  slotOptionsArray,
} from '@/views/code/table/options/slot';
import Thead from './Thead.vue';

describe('Thead.vue', () => {
  let wrapperModel: any = null;
  let wrapperSlot: any = null;
  let wrapperNoColIndex: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Thead, {
      propsData: {
        options: sortOptions,
        col: sortCol,
        colIndex: sortCol,
      },
    });
    wrapperSlot = shallowMount(Thead, {
      propsData: {
        options: slotOptionsArray,
        col: slotColArray,
        colIndex: slotColArray,
      },
    });
    wrapperNoColIndex = shallowMount(Thead, {
      propsData: {
        options: slotOptionsArray,
        col: slotColArray,
        border: true,
      },
    });
  });

  it('sort', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.sortCol(sortCol[0], 0, {});
        wrapperModel.vm.sortCol(sortCol[0], 0, {});
        wrapperModel.vm.sortCol(sortCol[0], 0, {});
        wrapperModel.vm.sortCol(sortCol[1], 1, {});
        wrapperModel.vm.sortCol(sortCol[1], 1, {});
        wrapperModel.vm.sortCol(sortCol[1], 1, {});
        wrapperModel.vm.clearAllSort();
        expect(wrapperModel.vm.lineHeight).toBe(0);
        wrapperModel.vm.$emit('clearAllSort');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('no sort', (done) => {
    wrapperSlot.vm.$nextTick(() => {
      try {
        wrapperSlot.vm.sortCol(slotColArray[1], 1, {});
        wrapperSlot.vm.sortCol(slotColArray[1], 1, {});
        wrapperSlot.vm.sortCol(slotColArray[1], 1, {});
        expect(wrapperNoColIndex.vm.lineHeight).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('no colIndex', (done) => {
    wrapperNoColIndex.vm.$nextTick(() => {
      try {
        expect(wrapperNoColIndex.vm.colGroup).toBe(slotColArray);
        expect(wrapperNoColIndex.vm.lineHeight).toBe(1);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
