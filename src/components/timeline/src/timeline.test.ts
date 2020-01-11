/** @format */

import { mount } from '@vue/test-utils';
import Timeline from './Timeline.vue';
import TimelineItem from './TimelineItem.vue';

describe('Timeline.vue', () => {
  let wrapper: any = null;
  let wrapperSlot: any = null;

  beforeEach(() => {
    wrapper = mount(Timeline, {
      slots: {
        default: {
          render(h: Function) {
            return h(
              TimelineItem,
              {
                props: {
                  timeline: { name: '2019-10-10' },
                },
              },
              '一个事儿',
            );
          },
        },
      },
    });
    wrapperSlot = mount(Timeline, {
      slots: {
        default: [TimelineItem],
      },
    });
  });

  it('test render', (done) => {
    const { vm } = wrapper;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test slot', (done) => {
    const { vm } = wrapperSlot;
    vm.$nextTick(() => {
      try {
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
