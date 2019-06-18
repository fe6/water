import { ApiEntity } from '@/views/entity/demoentity';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue';
import { IMAGE, ALT } from '@/views/common/constant';
import getTagName from '@/views/common/getTagName';

interface PropEntity {
  to?: object;
  open?: string;
  href?: string;
  separator?: string;
  routerType?: string;
}

interface RenderCommonParamsEntity {
  defaultText?: string;
  icon?: boolean;
  props?: PropEntity;
}

export interface CodeCommonParamsEntity {
  attr?: string;
  content?: string;
}
/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = ({ attr, content }: CodeCommonParamsEntity = {}): string => `<${getTagName(Breadcrumb.name)}>
  <${getTagName(BreadcrumbItem.name)}>首页</${getTagName(BreadcrumbItem.name)}>
  <${getTagName(BreadcrumbItem.name)}${attr ? ` ${attr}` : ''}>${content}</${getTagName(BreadcrumbItem.name)}>
  <${getTagName(BreadcrumbItem.name)}>面包屑</${getTagName(BreadcrumbItem.name)}>
</${getTagName(Breadcrumb.name)}>`;
/**
 * demo 的现场预览， WDemo 的上面部分
 * @param h {Function} vue 自带的 VNode 方法
 * @param params {RenderCommonParamsEntity} 自定义配置
 * @return any[]
 */
export const renderCommon = (h: Function, params: RenderCommonParamsEntity) => {
  const iconRender = params.icon ? h('img', {
    slot: 'icon',
    attrs: {
      src: IMAGE,
      alt: ALT,
    },
  }) : '';

  return h(
    'section',
    {
      class: 'demo-demo',
    },
    [
      h(Breadcrumb,
        [
          h(BreadcrumbItem, '首页'),
          h(BreadcrumbItem, {
            props: {
              ...params.props,
            },
          }, [iconRender, params.defaultText]),
          h(BreadcrumbItem, '面包屑'),
        ]),
    ],
  );
};

const base: ApiEntity = {
  title: '基本使用',
  desc: '最简单的用法。',
  code: codeCommon({ attr: ':to="{ name: \'Button\' }"', content: '按钮' }),
  render: (h: Function) => renderCommon(h, {
    defaultText: '按钮',
    props: {
      to: {
        name: 'Button',
      },
    },
  }),
};

export default base;
