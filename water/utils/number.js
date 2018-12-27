import { TweenLite } from 'gsap';
// 参照 https://github.com/react-component/input-number/blob/master/src/index.js
// '1.' '1x' 'xx' '' => are not complete numbers
export const isNotCompleteNumber = num => (
  Number.isNaN(num)
    || num === ''
    || num === null
    || (num && num.toString().indexOf('.') === num.toString().length - 1)
);

export const isNegativeZero = number => number === 0 && (1 / number) === -Infinity;

export const getValueFromEvent = (e = window.event, decimalSeparator) => {
  // optimize for chinese input expierence
  // https://github.com/ant-design/ant-design/issues/8196
  let value = e.target.value.trim().replace(/。/g, '.');

  value = value.replace(decimalSeparator, '.');

  return value;
};

export const formatWrapper = (num, formatter) => {
  if (isNegativeZero(num)) {
    return '-0';
  }
  return formatter(num);
};

export const getPrecision = (value, precision) => {
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

export const toNumber = (num, precision) => {
  if (isNotCompleteNumber(num)) {
    return num;
  }
  return Number(Number(num).toFixed(getPrecision(num, precision)));
};

export const getMaxPrecision = (currentValue, stepValue, precision, ratio = 1) => {
  const ratioPrecision = getPrecision(ratio, precision);
  const stepPrecision = getPrecision(stepValue, precision);
  const currentValuePrecision = getPrecision(currentValue, precision);
  if (!currentValue) {
    return ratioPrecision + stepPrecision;
  }
  return precision || Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
};

// 10 ** 2 就是 Math.pow(10, 2)
export const getPrecisionFactor = (
  currentValue, stepValue, precision, ratio = 1,
) => 10 ** getMaxPrecision(currentValue, stepValue, precision, ratio);

export const changeStep = (val, minValue, maxValue, stepValue, precision, rat = 1, direction) => {
  let newValue;
  // 如果输入的数字超过边界
  if (newValue >= maxValue) {
    newValue = maxValue;
  } else if (newValue <= minValue) {
    newValue = minValue;
  } else {
    newValue = val;
  }

  const precisionFactor = getPrecisionFactor(newValue, stepValue, precision, rat);
  const newPrecision = Math.abs(getMaxPrecision(newValue, stepValue, precision, rat));
  let result;

  if (typeof newValue === 'number') {
    result = ((precisionFactor * newValue + precisionFactor * stepValue * rat * direction)
      / precisionFactor).toFixed(newPrecision);
  } else {
    result = minValue === -Infinity ? stepValue : minValue;
  }

  if (newValue + stepValue >= maxValue && direction === 1) {
    result = maxValue;
  } else if (newValue - stepValue <= minValue && direction === -1) {
    result = minValue;
  }

  return toNumber(result, precision);
};

export const watchNumber = (self) => {
  if (self.write) {
    self.tweenedNumber = self.originalNumber - 0;
  } else {
    TweenLite.to(self.$data, self.animateTime, { tweenedNumber: self.originalNumber });
  }
};

export const upStep = (
  val, minValue, maxValue, stepValue, precision, rat = 1,
) => changeStep(
  val, minValue, maxValue, stepValue, precision, rat, 1,
);

export const downStep = (
  val, minValue, maxValue, stepValue, precision, rat = 1,
) => changeStep(
  val, minValue, maxValue, stepValue, precision, rat, -1,
);
