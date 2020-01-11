/** @format */

import { paddingZero } from '@/helper/date';

export const genNumberArray = (length: number) =>
  Array.from({ length }, (item: any, index: number) => paddingZero(index));

export const genHours = (): string[] => genNumberArray(24);

export const genMinutes = (): string[] => genNumberArray(60);

export const genSeconds = (): string[] => genNumberArray(60);

export const TIME_VALUE_FORMAT_DEFAULT = 'HH:mm:ss';

export const TIME_FORMAT_DEFAULT = 'HH:mm:ss';

export const rgHour = /h/gi;

export const rgMin = /m/gi;

export const rgSec = /s/gi;
