import { shallow } from 'vue-test-utils';
import Link from './Link';

describe('Link.vue', () => {
  let wrapperUrl = null;
  let wrapperTo = null;

  beforeEach(() => {
    wrapperUrl = shallow(Link, {
      propsData: {
        url: 'https://baidu.com',
        target: '_blank',
      },
    });
    wrapperTo = shallow(Link, {
      propsData: {
        to: {
          path: '/',
        },
      },
    });
  });

  it('url and target', (done) => {
    wrapperUrl.vm.$nextTick(() => {
      try {
        expect(wrapperUrl.vm.urlValue).toBe('https://baidu.com');
        expect(wrapperUrl.vm.targetValue).toBe('_blank');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('to', (done) => {
    wrapperTo.vm.$nextTick(() => {
      try {
        expect(wrapperTo.vm.toValue).toEqual({ path: '/' });
        expect(wrapperTo.vm.targetValue).toBe('_self');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
