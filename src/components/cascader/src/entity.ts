export interface ReturnParamsEntity {
  ev?: MouseEvent;
  [propName: string]: any;
}

export interface OptionsEntity {
  [propName: string]: any;
}

export interface FieldNamesEntity {
  [propName: string]: any;
}

export const fieldNamesDefault: FieldNamesEntity = {
  label: 'label',
  value: 'value',
  children: 'children',
  loading: 'loading',
  disabled: 'disabled',
};
