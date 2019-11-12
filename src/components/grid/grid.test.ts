import { mount } from '@vue/test-utils';
import Row from './Row.vue';
import Col from './Col.vue';

describe('Col.vue', () => {
  let wrapperRender: any = null;
  let wrapperProps: any = null;

  beforeEach(() => {
    wrapperRender = mount(Row, {
      slots: {
        default: [Col],
      },
    });
    wrapperProps = mount(Row, {
      propsData: {
        gutter: 12,
        basin: 2,
        type: 'float',
      },
      slots: {
        default: [Col],
      },
    });
  });

  it('test render', (done) => {
    wrapperRender.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          expect(wrapperRender.vm.$children[0].gutter).toBe(undefined);
          expect(wrapperRender.vm.$children[0].basin).toBe(undefined);
          expect(wrapperRender.vm.$children[0].type).toBe(undefined);
          expect(wrapperProps.vm.$children[0].customize).toEqual([]);
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test props', (done) => {
    wrapperProps.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          const colArray = wrapperProps.findAll(Col);
          colArray.at(0).setProps({ xl: 3 });
          expect(wrapperProps.vm.$children[0].gutter).toBe(12);
          expect(wrapperProps.vm.$children[0].basin).toBe(2);
          expect(wrapperProps.vm.$children[0].type).toBe('float');
          expect(wrapperProps.vm.$children[0].customize).toEqual([
            'w-col-3-xl',
          ]);
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
