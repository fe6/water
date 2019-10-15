import { ApiEntity } from '@/views/entity/demoentity';
import { slotCol, slotOptions } from '@/views/code/table/options/slot';

/**
 * demo 的代码部分， WDemo 的下面部分
 * @param attr {String} 额外添加的属性，适用于 loading ， ghost ， disabled 等类型为 boolean 的属性。
 * @return {string}
 */
export const codeCommon = (): string => `<w-table :col="slotCol" :options="slotOptions">
  <template #name="{optItem}">
    <w-link>{{optItem.name}}</w-link>
  </template>
  <template #action="{optIndex}">
    <strong>{{optIndex + 1}}</strong>
  </template>
</w-table>`;

const slot: ApiEntity = {
  title: '插槽',
  desc: '可结合作用域插槽进行自定义，更灵活。',
  code: codeCommon(),
  js: `{
  data() {
    return {
      slotCol: ${slotCol},
      slotOptions: ${slotOptions},
    };
  },
}`,
};

export default slot;
