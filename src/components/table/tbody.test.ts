import { shallowMount } from '@vue/test-utils';
import { sortCol, sortOptions } from '@/views/code/table/options/sort';
import Tbody from './Tbody.vue';

describe('Tbody.vue', () => {
  let wrapperModel: any = null;

  beforeEach(() => {
    wrapperModel = shallowMount(Tbody, {
      propsData: {
        options: sortOptions,
        col: sortCol,
        colIndex: sortCol,
      },
    });
  });

  it('sort', (done) => {
    wrapperModel.vm.$nextTick(() => {
      try {
        wrapperModel.vm.trOver();
        wrapperModel.vm.trOut();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
