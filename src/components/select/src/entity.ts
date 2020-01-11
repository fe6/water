/** @format */

export interface ReturnParamsEntity {
  ev: MouseEvent;
  [propName: string]: any;
}

export interface OptionsEntity {
  [propName: string]: any;
}

export interface FieldNamesEntity {
  [propName: string]: any;
}

export const fieldNamesDefault: FieldNamesEntity = {
  value: 'value',
  label: 'label',
  key: 'key',
  loading: 'loading',
  disabled: 'disabled',
};
