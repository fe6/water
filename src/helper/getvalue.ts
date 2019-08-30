import { isNumber } from './type';

export default (val: number | string) => (isNumber(val) ? `${val}px` : val);
