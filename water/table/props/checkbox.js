import { noop } from '../../utils/noop';
import { hasOwn } from '../../utils/o';

export default (rowSelection, dataItem, type) => {
  const def = {
    disabled: false,
    indeterminate: false,
    change: noop,
  };
  const { getCheckboxProps } = rowSelection;
  const hasCheckboxProps = hasOwn(rowSelection, 'getCheckboxProps')
                && typeof getCheckboxProps === 'function';

  return (hasCheckboxProps && getCheckboxProps(dataItem, type)) || def;
};
