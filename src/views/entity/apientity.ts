export interface PropsEntity {
  param: string;
  desc: string;
  type: string;
  require: string;
  default: string;
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
