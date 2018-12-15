import { mount } from 'vue-test-utils';
import Message from './Message';

describe('Message.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Message);
  });

  it('关闭方法', (done) => {
    wrapper.vm.$nextTick(() => {
      try {
        wrapper.vm.add({
          type: 'info',
          title: 'title',
          content: 'content',
        });
        wrapper.vm.close(wrapper.vm.notices[0].name);
        expect(wrapper.vm.notices.length).toBe(0);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
