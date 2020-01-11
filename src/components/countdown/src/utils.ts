/** @format */

import moment, { Moment, MomentFormatSpecification } from 'moment';
import padStart from 'lodash/padStart';
import { isNumber } from '@/helper/type';

export const interopDefault = (m: any) => m.default || m;

export const REFRESH_INTERVAL = 1000 / 30;

export const MS_FORMAT = 'HH:mm:ss:SSS';

// Countdown
const timeUnits: [string, number, string][] = [
  ['Y', 1000 * 60 * 60 * 24 * 365, 'year'], // years
  ['M', 1000 * 60 * 60 * 24 * 30, 'month'], // months
  ['D', 1000 * 60 * 60 * 24, 'day'], // days
  ['H', 1000 * 60 * 60, 'hour'], // hours
  ['m', 1000 * 60, 'minute'], // minutes
  ['s', 1000, 'second'], // seconds
  ['S', 1, 'millisecond'], // million seconds
];

export function formatTimeStr(duration: number, format: string) {
  let leftDuration: number = duration;

  const escapeRegex = /\[[^\]]*\]/g;
  const keepList: string[] = (format.match(escapeRegex) || []).map((str) =>
    str.slice(1, -1),
  );
  const templateText = format.replace(escapeRegex, '[]');

  const replacedText = timeUnits.reduce((current, [name, unit]) => {
    if (current.indexOf(name) !== -1) {
      const value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
        const len = match.length;
        return padStart(value.toString(), len, '0');
      });
    }
    return current;
  }, templateText);

  let index = 0;

  return replacedText.replace(escapeRegex, () => {
    const match = keepList[index];
    index += 1;
    return match;
  });
}

export function formatCountdown(value: any, format: string) {
  const target = interopDefault(moment)(value).valueOf();
  const current = interopDefault(moment)().valueOf();
  const diff = Math.max(target - current, 0);
  return {
    value: formatTimeStr(diff, format),
    isGo: diff > 0,
  };
}

export const getTime = (
  value?: number | Moment | string,
  format?: MomentFormatSpecification,
) => interopDefault(moment)(value, isNumber(value) ? '' : format).valueOf();
