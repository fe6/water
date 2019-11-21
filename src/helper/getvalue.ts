import { isNumber } from './type';

export default (val: number | string) =>
  isNumber(parseInt(val as string, 10)) ? `${val}px` : val;
