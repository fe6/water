/** @format */

import { mount } from '@vue/test-utils';
import DatePickerTable from './DatePickerTable.vue';

const ev = { stopPropagation: () => {} };

describe('DatePickerTable.vue', () => {
  let pickerTable: any = null;
  let pickerTableWeekActive: any = null;

  beforeEach(() => {
    pickerTable = mount(DatePickerTable, {
      propsData: {
        type: 'test',
      },
    });
    pickerTableWeekActive = mount(DatePickerTable, {
      propsData: {
        type: 'week',
        value: 1,
      },
    });
  });

  it('test click', (done) => {
    const { vm } = pickerTable;
    vm.$nextTick(() => {
      try {
        vm.itemClick({
          item: {
            value: '',
            trueValue: '',
            item: {},
            type: 'year',
            dateweek: [],
            ev,
          },
        });
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test click', (done) => {
    const { vm } = pickerTableWeekActive;
    vm.$nextTick(() => {
      try {
        vm.isWeekActive([
          {
            value: '',
            trueValue: '',
            item: {},
            type: 'year',
            dateweek: [],
            ev,
          },
        ]);
        vm.isWeekActive([
          {
            value: 1,
            day: 2,
            trueValue: '',
            item: {},
            type: 'year',
            dateweek: [],
            ev,
          },
        ]);
        vm.isWeekActive([
          {
            day: 0,
            value: 1,
            trueValue: '',
            item: {},
            type: 'year',
            dateweek: [],
            ev,
          },
        ]);
        vm.isWeekActive([
          {
            value: 1,
            trueValue: '',
            item: {},
            type: 'year',
            dateweek: [],
            ev,
          },
        ]);
        vm.isWeekActive([
          {
            value: 12,
            trueValue: '',
            item: {},
            type: 'year',
            dateweek: [],
            ev,
          },
        ]);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
