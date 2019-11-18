import { mount } from '@vue/test-utils';
import DatePickerTable from './DatePickerTable.vue';

const ev = { stopPropagation: () => {} };

describe('DatePickerTable.vue', () => {
  let pickerTable: any = null;

  beforeEach(() => {
    pickerTable = mount(DatePickerTable, {
      propsData: {
        type: 'test',
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
});
