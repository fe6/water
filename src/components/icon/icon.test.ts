import { mount } from '@vue/test-utils';
import Icon from './Icon.vue';

describe('Icon.vue', () => {
  let wrapperRender:any = null;

  beforeEach(() => {
    wrapperRender = mount(Icon);
  });

  it('test render', (done) => {
    wrapperRender.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          expect(wrapperRender.vm.spin).toBeFalsy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
