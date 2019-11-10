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

export interface MethodsEntity {
  name: string;
  desc: string;
  return: string;
}
