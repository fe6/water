import Loadbar from './Loadbar.vue';

describe('Loadbar.vue', () => {
  const wrapper: any = Loadbar;

  beforeEach(() => {
    wrapper.start();
  });

  it('检测 失败之后是否重置。', (done) => {
    try {
      wrapper.fail();
      wrapper.start();
      wrapper.finish();
      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
