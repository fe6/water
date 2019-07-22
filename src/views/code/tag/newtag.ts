import Tag from '@/components/tag/Tag.vue';
import NewTag from '@/components/tag/NewTag.vue';
import { ApiEntity } from '@/views/entity/demoentity';

const sizes = ['small', '', 'large'];

const base: ApiEntity = {
  title: '动态添加和删除',
  desc: '用数组生成一组标签，可以动态添加和删除。',
  code: `<w-tag color="#1996f9">标签</w-tag>
<w-tag color="#1996f9" colorType="section">标签</w-tag>`,
  render: (h: Function, context: any) => {
    const { newTags, newtagLoading, beforeHandle } = context.props.data;
    return h(
      'section',
      {
        class: 'demo-demo',
      },
      [
        sizes.map((sItem: any, sIndex: number) => {
          const sizeNodes = [
            newTags.map((nTagItem: any, aIndex: number) => h(Tag, {
              props: {
                closable: nTagItem.closable,
                loading: nTagItem.loading,
                size: sItem,
                close: () => {
                  newTags.splice(aIndex, 1, {
                    value: nTagItem.value,
                    loading: true,
                    closable: true,
                  });
                  setTimeout(() => {
                    newTags.splice(aIndex, 1);
                  }, 2000);
                },
              },
            }, nTagItem.value)),
            h(NewTag, {
              props: {
                loading: newtagLoading,
                before: beforeHandle,
                size: sItem,
                placeholder: '数字标签',
                error(errParams: any) {
                  return !/^[0-9]+$/.test(errParams.value);
                },
                change(params: any) {
                  newTags.push({
                    value: params.value,
                    loading: false,
                    closable: true,
                  });
                },
              },
            }, '创建标签'),
          ];

          if (sIndex < sizes.length - 1) {
            sizeNodes.push(h('br'));
            sizeNodes.push(h('br'));
          }
          return sizeNodes;
        }),
      ],
    );
  },
};

export default base;
