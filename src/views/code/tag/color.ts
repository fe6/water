import { ApiEntity } from '@/views/entity/demoentity';


const sectionColors = [{
  color: '#eb2f96',
  loading: false,
},
{
  color: '#f5222d',
  loading: false,
},
{
  color: '#fa541c',
  loading: false,
},
{
  color: '#fa8c16',
  loading: false,
}];

const allColors = [{
  color: '#eb2f96',
  loading: false,
}, {
  color: '#f5222d',
  loading: false,
}, {
  color: '#fa8c16',
  loading: false,
}, {
  color: '#faad14',
  loading: false,
}];

const base: ApiEntity = {
  title: '多彩标签',
  desc: '添加 <code>color</code> 即可设置颜色，添加 <code>colorType</code> 即可设置渲染类型。',
  code: `<h4>All:</h4>
<w-tag v-for="(sColor, sColorIndex) in sectionColors">标签</w-tag>
<h4>Section:</h4>
<w-tag v-for="(sColor, aColorIndex) in allColors" colorType="section">标签</w-tag>`,
  js: `{
    data() {
      return {
        sectionColors: ${JSON.stringify(sectionColors)},
        allColors: ${JSON.stringify(allColors)},
      };
    },
  }`,
  // render: (h: Function, context: any) => {
  //   const { allColors, sectionColors } = context.props.data;
  //   return h(
  //     'section',
  //     {
  //       class: 'demo-demo',
  //     },
  //     [
  //       h('h4', 'All:'),
  //       h('div', allColors.map((aColor: any, aIndex: number) => h(Tag, {
  //         props: {
  //           closable: true,
  //           color: aColor.color,
  //           loading: aColor.loading,
  //           close: () => {
  //             const { color } = allColors[aIndex];
  //             allColors.splice(aIndex, 1, {
  //               color,
  //               loading: true,
  //             });
  //             setTimeout(() => {
  //               allColors.splice(aIndex, 1);
  //             }, 1000);
  //           },
  //         },
  //       }, '标签'))),
  //       h('h4', 'Section:'),
  //       h('div', sectionColors.map((sColor: any, sIndex: number) => h(Tag, {
  //         props: {
  //           colorType: 'section',
  //           closable: true,
  //           color: sColor.color,
  //           loading: sColor.loading,
  //           close: () => {
  //             const { color } = sectionColors[sIndex];
  //             sectionColors.splice(sIndex, 1, {
  //               color,
  //               loading: true,
  //             });
  //             setTimeout(() => {
  //               sectionColors.splice(sIndex, 1);
  //             }, 1000);
  //           },
  //         },
  //       }, '标签'))),
  //     ],
  //   );
  // },
};

export default base;
