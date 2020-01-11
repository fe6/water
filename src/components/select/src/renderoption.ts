/** @format */

import WOption from './Option.vue';
import WEmpty from '@/components/empty/src/Empty.vue';
import WScroll from '@/components/scroll/src/Scroll.vue';
import {
  ReturnParamsEntity,
  FieldNamesEntity,
  fieldNamesDefault,
} from './entity';
import { handleName, addUsedStatus } from '@/helper/option';
import { noopArray, noop } from '@/helper/noop';

const optionHeight = 28;
const optionMaxHeight = 180;

const renderOption = {
  functional: true,
  props: {
    name: [String, Number, Array],
    slots: {
      type: Array,
      default: noopArray,
    },
    newTags: {
      type: Array,
      default: noopArray,
    },
    hoverIndex: Number,
    emptyText: String,
    fieldValue: String,
    mode: String,
    beforeChange: {
      type: Function,
      default: noop,
    },
    change: {
      type: Function,
      default: noop,
    },
    updateHock: {
      type: Function,
      default: noop,
    },
    options: {
      type: Array,
      default: () => [],
    },
    fieldNames: {
      type: Object,
      default: (): FieldNamesEntity => fieldNamesDefault,
    },
  },
  render(createElement: Function, { props }: any) {
    // slots 只能这样检测变化
    const {
      name,
      slots,
      fieldValue,
      newTags,
      hoverIndex,
      beforeChange,
      change,
      emptyText,
      updateHock,
      mode,
      options,
      fieldNames,
    } = props;
    let slotsDefault: any = [];
    let nameTags = [];
    const optionHoverIndex = hoverIndex;

    const isSingleMode = mode === 'single';
    const isTagMode = mode === 'tag';

    let liElem = [
      createElement(
        'li',
        {
          class: ['w-option-empty'],
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
            emptyText,
          ),
        ],
      ),
    ];
    // 初始化下来选项
    if (options.length > 0) {
      options.forEach((opt: FieldNamesEntity, optIndex: number) => {
        slotsDefault.push({
          [fieldNames.key]: opt[fieldNames.label] || optIndex,
          [fieldNames.label]: opt[fieldNames.label] || '',
          [fieldNames.value]: opt[fieldNames.value] || '',
          [fieldNames.loading]: opt[fieldNames.loading] || false,
          [fieldNames.disabled]: opt[fieldNames.disabled] || false,
        });
      });
    } else {
      slots.forEach((slot: any) => {
        if (slot.tag) {
          const { propsData } = slot.componentOptions;
          slotsDefault.push({
            key: slot.key,
            attrs: slot.data.attrs,
            ...propsData,
          });
        }
      });
    }
    // 挂载到slotsDefault上
    if (newTags.length && isTagMode) {
      slotsDefault = slotsDefault.concat(newTags);
    }
    // 获取选中标签中的禁用状态
    if (!isSingleMode) {
      nameTags = addUsedStatus(slotsDefault, name, fieldNames);
    }
    // 筛选搜索
    if (fieldValue) {
      slotsDefault = slotsDefault.filter(
        (slot: any) =>
          fieldValue.indexOf(slot.value) > -1 ||
          slot.value.indexOf(fieldValue) > -1,
      );
      // 如果tag模式
      // 输入中添加下拉内容的地方
      if (
        isTagMode &&
        !name.find((nameValue: string) => fieldValue === nameValue)
      ) {
        // 创建搜索未结果
        slotsDefault.unshift({
          [fieldNames.value]: fieldValue,
          [fieldNames.label]: fieldValue,
          new: true,
          [fieldNames.disabled]: false,
        });
      }
    }

    if (slotsDefault.length) {
      liElem = slotsDefault.map((slot: any, slotIndex: number) => {
        const label = slot[fieldNames.label] || slot.label || '';
        const value = slot[fieldNames.value] || slot.value || '';
        const disabled = slot[fieldNames.disabled] || slot.disabled || false;
        const singleActive: boolean = name ? label === name : false;

        return createElement(
          WOption,
          {
            props: {
              key: slotIndex,
              value,
              label,
              active: isSingleMode ? singleActive : name.indexOf(label) > -1,
              hover: slotIndex === optionHoverIndex,
              disabled,
              mode,
              fieldNames,
            },
            on: {
              optionChange: (params: ReturnParamsEntity) => {
                if (!disabled) {
                  if (isSingleMode) {
                    change(params[fieldNames.label], params.ev, slotsDefault);
                  } else {
                    beforeChange();
                    change(
                      handleName(
                        params[fieldNames.label],
                        name,
                        slotsDefault,
                        isSingleMode,
                        fieldNames,
                      ),
                      params.ev,
                      slotsDefault,
                    );
                    params.ev.stopPropagation();
                  }
                } else {
                  beforeChange();
                  params.ev.stopPropagation();
                }
              },
            },
          },
          value,
        );
      });
    }

    // 渲染前的通知
    updateHock(slotsDefault, nameTags);

    return createElement(
      WScroll,
      {
        props: {
          disabled: liElem.length * optionHeight < optionMaxHeight,
        },
        class: ['w-option-scroll'],
      },
      [
        createElement(
          'ul',
          {
            class: ['w-option-list'],
          },
          liElem,
        ),
      ],
    );
  },
};

export default renderOption;
