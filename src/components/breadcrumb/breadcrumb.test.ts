import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

// 各种跳转的测试
describe('BreadcrumbItem.vue', () => {
  let wrapperHref: any = null;
  let wrapperOpen: any = null;
  let wrapperRouter: any = null;
  const href = 'https://baidu.com/';
  const open = 'https://baidu.com/';

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({
      routes: [
        {
          path: 'Breadcrumb',
          name: 'Breadcrumb',
        },
      ],
    });

    wrapperRouter = mount(Breadcrumb, {
      slots: {
        default: {
          render(h: Function) {
            return h(
              BreadcrumbItem,
              {
                props: {
                  to: { name: 'Breadcrumb' },
                },
              },
              'vue 路由跳转'
            );
          },
        },
      },
      localVue,
      router,
      attachToDocument: true,
    });

    wrapperHref = mount(Breadcrumb, {
      slots: {
        default: {
          render(h: Function) {
            return h(
              BreadcrumbItem,
              {
                props: {
                  href,
                },
              },
              '本标签页面跳转'
            );
          },
        },
      },
      attachToDocument: true,
    });

    wrapperOpen = mount(Breadcrumb, {
      slots: {
        default: {
          render(h: Function) {
            return h(
              BreadcrumbItem,
              {
                props: {
                  open,
                },
              },
              '新标签页面跳转'
            );
          },
        },
      },
      attachToDocument: true,
    });
  });

  it('vue 路由跳转', (done) => {
    wrapperRouter.vm.$nextTick(() => {
      try {
        const breadcrumbBtn = wrapperRouter.find('.w-breadcrumb-item-link');
        breadcrumbBtn.trigger('click');
        expect(wrapperRouter.vm.$route.fullPath).toBe('Breadcrumb');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('新页面是否跳转', (done) => {
    wrapperOpen.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        window.open = stub;
        const breadcrumbBtn = wrapperOpen.find('.w-breadcrumb-item-link');
        breadcrumbBtn.trigger('click');
        expect(stub).toBeCalled();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('本页面是否跳转', (done) => {
    wrapperHref.vm.$nextTick(() => {
      try {
        const stub = jest.fn();
        const assignStub = jest.fn();
        window.location.assign = assignStub;
        wrapperHref.vm.$children[0].$on('click', stub);
        const breadcrumbBtn = wrapperHref.find('.w-breadcrumb-item-link');
        breadcrumbBtn.trigger('click');
        expect(window.location.assign).toBeCalledWith(href);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
