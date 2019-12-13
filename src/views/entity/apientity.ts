export interface PropsEntity {
  param: string;
  description: string;
  optionType: string;
  require: string;
  defaultValue: string;
}

export interface ChangePropsEntity {
  type: string;
  desc: string;
  key: string;
}

export interface SlotMethodsEntity {
  name: string;
  desc: string;
}

export interface MethodsEntity extends SlotMethodsEntity {
  return: string;
}
