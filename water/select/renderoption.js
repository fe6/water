import WOption from './Option';
import {
  handleName,
  // findEnabled,
  addUsedStatus,
} from '../utils/option';
import renderProps from './props/renderoption';

export default {
  props: renderProps,
  functional: true,
  render(createElement, { props }) {
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
    } = props;
    let slotsDefault = [];
    let nameTags = [];
    const optionHoverIndex = hoverIndex;
    // 向下获取可用索引
    // const modifyIndex = () => {
    //   optionHoverIndex = findEnabled(slotsDefault);
    // };

    const isSingleMode = mode === 'single';
    const isTagMode = mode === 'tag';

    let liElem = [createElement('li', {
      class: ['w-option-empty'],
      on: {
        click: (event) => {
          event.stopPropagation();
        },
      },
    }, emptyText)];
    // 初始化下来选项
    slots.forEach((slot) => {
      if (slot.tag) {
        slotsDefault.push({
          key: slot.key,
          attrs: slot.data.attrs,
          ...slot.componentOptions.propsData,
        });
      }
    });
    // 挂载到slotsDefault上
    if (newTags.length && isTagMode) {
      slotsDefault = slotsDefault.concat(newTags);
    }
    // 获取选中标签中的禁用状态
    if (!isSingleMode) {
      nameTags = addUsedStatus(slotsDefault, name);
    }
    // 筛选搜索
    if (fieldValue) {
      slotsDefault = slotsDefault.filter(slot => (
        fieldValue.indexOf(slot.value) > -1
        || slot.value.indexOf(fieldValue) > -1
      ));
      // modifyIndex();
      // 如果tag模式
      // 输入中添加下拉内容的地方
      if (isTagMode && !name.find(nameValue => fieldValue === nameValue)) {
        // 创建搜索未结果
        slotsDefault.unshift({
          value: fieldValue,
          new: true,
          disabled: false,
        });
        // modifyIndex();
      }
    }

    if (slotsDefault.length) {
      liElem = slotsDefault.map((slot, slotIndex) => {
        const {
          value,
          disabled,
        } = slot;
        return createElement(WOption, {
          props: {
            key: slotIndex,
            value,
            active: isSingleMode ? value.indexOf(name) > -1 : name.indexOf(value) > -1,
            hover: slotIndex === optionHoverIndex,
            disabled,
            mode,
          },
          on: {
            optionChange: (changeValue, ev) => {
              if (!disabled) {
                if (isSingleMode) {
                  change(changeValue, ev, slotsDefault);
                } else {
                  beforeChange();
                  change(handleName(changeValue, name, slotsDefault), ev, slotsDefault);
                  ev.stopPropagation();
                }
              } else {
                beforeChange();
                ev.stopPropagation();
              }
            },
          },
        }, value);
      });
    }

    // 渲染前的通知
    updateHock(slotsDefault, nameTags);

    return createElement('ul', {
      class: ['w-option-list'],
    }, liElem);
  },
  components: {
    WOption,
  },
};
