// import * as gsap from 'gsap';
import { noop } from '@/helper/noop';
// 参照 https://github.com/react-component/input-number/blob/master/src/index.js
// '1.' '1x' 'xx' '' => are not complete numbers
export const isNotCompleteNumber = (num: any) =>
  Number.isNaN(num) ||
  num === '' ||
  num === null ||
  (num && num.toString().indexOf('.') === num.toString().length - 1);

export const isNegativeZero = (number: number | string) =>
  Number(number) === 0 && 1 / Number(number) === -Infinity;

export const getValueFromEvent = (
  ev: MouseEvent,
  decimalSeparator = '.'
): string => {
  // optimize for chinese input expierence
  // https://github.com/ant-design/ant-design/issues/8196
  let value = (ev.target as any).value.trim().replace(/。/g, '.');

  value = value.replace(decimalSeparator, '.');

  return value;
};

export const formatWrapper = (
  num: number | string,
  formatter: Function = noop,
  parase: Function = noop
): number | string => {
  if (isNegativeZero(num)) {
    return '-0';
  }
  return formatter(parase(num));
};

export const getPrecision = (
  value: number | string,
  precision: number
): number => {
  const valueString = value.toString();
  if (valueString.indexOf('e-') >= 0) {
    return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
  }
  let newPrecision = precision || 0;
  if (valueString.indexOf('.') >= 0) {
    newPrecision = valueString.length - valueString.indexOf('.') - 1;
  }
  return newPrecision;
};

export const toNumber = (num: any, precision: number): number => {
  if (isNotCompleteNumber(num)) {
    return num;
  }
  return Number(Number(num).toFixed(getPrecision(num, precision)));
};

export const getMaxPrecision = (
  currentValue: number | string,
  stepValue: number,
  precision: number,
  rat = 1
) => {
  const ratioPrecision = getPrecision(rat, precision);
  const stepPrecision = getPrecision(stepValue, precision);
  const currentValuePrecision = getPrecision(currentValue, precision);
  if (!currentValue) {
    return ratioPrecision + stepPrecision;
  }
  return (
    precision || Math.max(currentValuePrecision, ratioPrecision + stepPrecision)
  );
};

// 10 ** 2 就是 Math.pow(10, 2)
export const getPrecisionFactor = (
  currentValue: number | string,
  stepValue: number,
  precision: number,
  rat = 1
) => 10 ** getMaxPrecision(currentValue, stepValue, precision, rat);

export const changeStep = (
  val: number | string,
  minValue: number,
  maxValue: number,
  stepValue: number,
  precision: number,
  rat = 1,
  direction: number
): number => {
  let newValue: string | number = val;
  // 如果输入的数字超过边界
  if (Number(newValue) >= maxValue) {
    newValue = maxValue;
  } else if (Number(newValue) <= minValue) {
    newValue = minValue;
  } else {
    newValue = val;
  }

  const precisionFactor = getPrecisionFactor(
    newValue,
    stepValue,
    precision,
    rat
  );
  const newPrecision = Math.abs(
    getMaxPrecision(newValue, stepValue, precision, rat)
  );
  let result;

  if (!Number.isNaN(Number(newValue))) {
    result = (
      (precisionFactor * Number(newValue) +
        precisionFactor * stepValue * rat * direction) /
      precisionFactor
    ).toFixed(newPrecision);
  } else {
    result = minValue === -Infinity ? stepValue : minValue;
  }

  if (Number(newValue) + stepValue >= maxValue && direction === 1) {
    result = maxValue;
  } else if (Number(newValue) - stepValue <= minValue && direction === -1) {
    result = minValue;
  }

  return toNumber(result, precision);
};

export const watchNumber = (self: any) => {
  // 因为打包太大，所以取消动画
  // if (self.write) {
  //   self.tweenedNumber = self.originalNumber - 0;
  // } else {
  //   gsap.TweenLite.to(self.$data, self.animateTime, {
  //     tweenedNumber: self.originalNumber,
  //   });
  // }
  self.tweenedNumber = self.originalNumber - 0;
};

export const upStep = (
  val: number | string,
  minValue: number,
  maxValue: number,
  stepValue: number,
  precision: number,
  rat = 1
): number => changeStep(val, minValue, maxValue, stepValue, precision, rat, 1);

export const downStep = (
  val: number | string,
  minValue: number,
  maxValue: number,
  stepValue: number,
  precision: number,
  rat = 1
): number => changeStep(val, minValue, maxValue, stepValue, precision, rat, -1);
