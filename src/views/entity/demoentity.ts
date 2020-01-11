/** @format */

export interface ApiEntity {
  title: string;
  desc: string;
  code: string;
  render?: Function;
  js?: string;
}

export interface CodeCommonParamsEntity {
  attr?: string;
  content?: string;
}
