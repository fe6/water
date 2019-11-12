import { mount } from '@vue/test-utils';
import Empty from './Empty.vue';

describe('Empty.vue', () => {
  let wrapperRender: any = null;

  beforeEach(() => {
    wrapperRender = mount(Empty);
  });

  it('test render', (done) => {
    wrapperRender.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
