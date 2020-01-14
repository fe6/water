/** @format */

import { mount } from '@vue/test-utils';
import Text from '../../src/Text.vue';

describe('Text.vue', () => {
  let wrapperModel: any = null;

  beforeEach(() => {
    wrapperModel = mount(Text, {});
  });

  it('render', (done) => {
    const { vm } = wrapperModel;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
