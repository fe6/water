import { upperFirst } from 'lodash/string';
import { ApiEntity } from '@/views/entity/demoentity';
import Button from '@/components/button/Button.vue';
import ButtonGroup from '@/components/button/ButtonGroup.vue';

const sizes = ['large', '', 'small'];

const types = ['', 'border', 'danger'];

const renderCode = (type: string): string => `<ButtonGroup>${sizes.reduce(
  (acc: string, size: string, index: number): string => `${acc}${index < 1 ? '\n' : ''} <Button :key="${index}" :type="${type}">${upperFirst(size)}</Button>${index < types.length - 1 ? '\n' : ''}`,
  '',
)}
</ButtonGroup>`;

const base: ApiEntity = {
  title: '按钮组合',
  desc: '通过按钮组的 <code>v-model</code> 和按钮的 <code>value</code> 进行配合。 <code>dashed</code> 不支持组合按钮。',
  code: types.reduce(
    (acc: string, type: string, index: number) => `${acc}${renderCode(type)}${index < types.length - 1 ? '\n' : ''}`,
    '',
  ),
  render: (createElement: Function) => createElement('div', {
    class: 'demo-demo',
  }, [
    // 主色 start
    createElement(
      ButtonGroup,
      [
        sizes.map((size: string, index: number) => createElement(
          Button,
          {
            key: index,
          },
          [(upperFirst(size) || 'Default')],
        )),
      ],
    ),
    // 主色 end
    createElement('br'),
    // border start
    createElement(
      ButtonGroup,
      [
        sizes.map((size: string, index: number) => createElement(
          Button,
          {
            props: {
              type: 'border',
            },
            key: index,
          },
          [(upperFirst(size) || 'Default')],
        )),
      ],
    ),
    // border end
    createElement('br'),
    // danger start
    createElement(
      ButtonGroup,
      [
        sizes.map((size: string, index: number) => createElement(
          Button,
          {
            props: {
              type: 'danger',
            },
            key: index,
          },
          [(upperFirst(size) || 'Default')],
        )),
      ],
    ),
    // danger end
  ]),
};

export default base;
