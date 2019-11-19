import WEmpty from '@/components/empty/src/Empty.vue';
import { FieldNamesEntity, fieldNamesDefault } from './entity';

export default {
  name: 'WCascaderSearch',
  functional: true,
  props: {
    search: Array,
    emptyText: String,
    width: String,
    searchKeyWord: String,
    hoverIndex: Number,
    getSearchResult: Function,
    sreachChange: Function,
    fieldNames: {
      type: Object,
      default: (): FieldNamesEntity => fieldNamesDefault,
    },
    searchRender: {
      type: Function,
      default: ({ createElement, searchKeyWord, item }: any) => {
        const valueRes = item.path.split(searchKeyWord);
        let valueResLen = valueRes.length - 1;
        if (valueRes.length > 1) {
          while (valueResLen) {
            valueRes.splice(
              valueResLen,
              0,
              createElement(
                'span',
                {
                  class: 'w-cascader-search-keyword',
                },
                searchKeyWord
              )
            );
            valueResLen--;
          }
        }
        return valueRes;
      },
    },
  },
  render: (createElement: Function, { props }: any) => {
    const {
      emptyText,
      search,
      width,
      searchKeyWord,
      hoverIndex,
      getSearchResult,
      sreachChange,
      fieldNames,
      searchRender,
    } = props;
    const searchResult = search.filter(
      (searchItem: any) => searchItem.path.indexOf(searchKeyWord) > -1
    );

    getSearchResult(searchResult);

    let liElem = [
      createElement(
        'li',
        {
          class: ['w-cascader-search-empty'],
          on: {
            click: (ev: MouseEvent) => {
              ev.stopPropagation();
            },
          },
        },
        [
          createElement(
            WEmpty,
            {
              props: {
                imageStyle: {
                  height: '72px',
                },
              },
            },
            emptyText
          ),
        ]
      ),
    ];

    if (searchResult.length) {
      liElem = searchResult.map((sResult: any, sResultIndex: number) => {
        const { option, index, floor } = sResult;

        const disabled = sResult[fieldNames.disabled];
        const children = sResult[fieldNames.children];
        const value = sResult[fieldNames.value];
        const label = sResult[fieldNames.label];

        return createElement(
          'li',
          {
            class: [
              'w-cascader-search-item',
              {
                'w-cascader-search-disabled': disabled,
                'w-cascader-search-hover': hoverIndex === sResultIndex,
              },
            ],
            on: {
              click: (ev: MouseEvent) => {
                if (!disabled) {
                  sreachChange(
                    {
                      [fieldNames.value]: label.slice(),
                      [fieldNames.label]: label,
                      current: value[value.length - 1],
                      option,
                      index,
                      floor,
                      [fieldNames.children]: children,
                    },
                    ev
                  );
                } else {
                  ev.stopPropagation();
                }
              },
            },
          },
          searchRender({
            createElement,
            searchKeyWord,
            item: sResult,
            searchResult,
          })
        );
      });
    }

    return createElement(
      'ul',
      {
        class: 'w-cascader-search',
        style: {
          width,
        },
      },
      liElem
    );
  },
};
