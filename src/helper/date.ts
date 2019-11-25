import moment, { Moment } from 'moment';
import concat from 'lodash/concat';
import { hasOwn } from './o';
import { isUndefined, isFunction } from './type';

export interface DateEntity {
  years: number;
  months: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  isoWeek?: number;
  day?: number; // 当前星期
  status?: string;
  dayText?: string; // 星期对应的文案
  trueMonths?: string; // 真实的月份
  trueValue?: string; // 真实的日期
  value?: string; // 真正的日期
  inputValue?: string; // 真正的显示日期
  disabled?: boolean; // 是否禁用
}

export interface RenderDatesEntity {
  mObject: Moment;
  firstDayOfWeek: number;
  format: string;
  valueFormat: string;
  disabledRender: Function;
}

export interface RenderMonthDatesEntity {
  mJson: DateEntity;
  dateNumbers: number;
  firstDayOfWeek: number;
  format: string;
  valueFormat: string;
  disabledRender: Function;
}

export interface HandleMomentObjectEntity {
  mObject: Moment;
  status: string;
  format: string;
  valueFormat: string;
  disabledRender?: Function;
}

export const WEEK_TEXT: string[] = ['日', '一', '二', '三', '四', '五', '六'];

export const DATE_UNIT_TEXT: string[] = ['年', '月', '日'];

export enum DATE_UNIT_ENUM {
  YEAR_ENUM,
  MONTH_ENUM,
  DATE_ENUM,
}

export const MONTH_TEXT: string[] = [
  `一${DATE_UNIT_TEXT[1]}`,
  `二${DATE_UNIT_TEXT[1]}`,
  `三${DATE_UNIT_TEXT[1]}`,
  `四${DATE_UNIT_TEXT[1]}`,
  `五${DATE_UNIT_TEXT[1]}`,
  `六${DATE_UNIT_TEXT[1]}`,
  `七${DATE_UNIT_TEXT[1]}`,
  `八${DATE_UNIT_TEXT[1]}`,
  `九${DATE_UNIT_TEXT[1]}`,
  `十${DATE_UNIT_TEXT[1]}`,
  `十一${DATE_UNIT_TEXT[1]}`,
  `十二${DATE_UNIT_TEXT[1]}`,
];

export const paddingZero = (number = 0): string =>
  number < 10 ? `0${number}` : String(number);

// 日期对象中添加一些东西
export const handleMomentObject = ({
  mObject,
  status,
  format,
  valueFormat,
  disabledRender,
}: HandleMomentObjectEntity): DateEntity => {
  const mJson = mObject.toObject();
  if (hasOwn(mJson, 'months') && !isUndefined(mJson.months)) {
    const { months, years } = mJson;
    const day = mObject.day();
    const trueMonths = paddingZero(months + 1);
    const trueValue = paddingZero(mJson.date);

    const newMomentJson: DateEntity = Object.assign(mJson, {
      trueMonths,
      day,
      dayText: WEEK_TEXT[day],
      trueValue,
      status,
      value: mObject.format(valueFormat),
      isoWeek: mObject.format(format),
      isoWeekTitle: mObject.format(format),
      inputValue: mObject.format(valueFormat),
      title: `${years}${DATE_UNIT_TEXT[0]}${trueMonths}${DATE_UNIT_TEXT[1]}${trueValue}${DATE_UNIT_TEXT[2]}`,
    });

    return Object.assign(newMomentJson, {
      disabled:
        disabledRender && isFunction(disabledRender)
          ? disabledRender({
              item: newMomentJson,
              current: moment(mObject.format(format)),
              type: 'date',
            })
          : false,
    });
  }
  return mJson;
};

export const formatDateDefault = 'YYYY-MM-DD';
export const formatWeekDefault = 'YYYY 年 WW 周';
export const formatMonthDefault = 'YYYY-MM';
export const formatYearDefault = 'YYYY';
export const formatAgeDefault = 'YYYY - YYYY';

export const valueFormatDateDefault = 'YYYY-MM-DD';
export const valueFormatWeekDefault = 'YYYY-WW';
export const valueFormatMonthDefault = 'YYYY-MM';
export const valueFormatYearDefault = 'YYYY';
export const valueFormatAgeDefault = 'YYYY - YYYY';

export interface FormatDefaultEntity {
  date: string;
  week: string;
  month: string;
  year: string;
  age: string;
}

export const formatDefault: FormatDefaultEntity = {
  date: formatDateDefault,
  week: formatWeekDefault,
  month: formatMonthDefault,
  year: formatYearDefault,
  age: formatAgeDefault,
};

export const valueFormatDefault: FormatDefaultEntity = {
  date: valueFormatDateDefault,
  week: valueFormatWeekDefault,
  month: valueFormatMonthDefault,
  year: valueFormatYearDefault,
  age: valueFormatAgeDefault,
};

// 渲染上月日期
export const renderPrevDates = ({
  mJson,
  firstDayOfWeek,
  format,
  valueFormat,
  disabledRender,
}: RenderMonthDatesEntity): DateEntity[] => {
  const { trueMonths, years } = mJson;
  const dates: DateEntity[] = [];

  let prevDateNumbers = 0;
  const currentMonth = Number(trueMonths);
  const prevMonth = currentMonth > 1 ? currentMonth - 1 : 12;
  const currentYear = currentMonth > 0 ? years : years - 1;

  const prevDateAllNumbers = moment(
    `${currentYear}-${prevMonth}`,
    formatMonthDefault
  ).daysInMonth();
  const maxNumber =
    Number(moment(`${currentYear}-${trueMonths}-01`, formatDateDefault).day()) -
    firstDayOfWeek;

  while (prevDateNumbers < maxNumber) {
    const momentLastItem = moment(
      `${currentYear}-${paddingZero(prevMonth)}-${paddingZero(
        prevDateAllNumbers - prevDateNumbers
      )}`,
      formatDateDefault
    );
    dates.unshift(
      handleMomentObject({
        mObject: momentLastItem,
        status: 'prev',
        format,
        valueFormat,
        disabledRender,
      })
    );
    prevDateNumbers++;
  }

  return dates;
};

// 渲染当月日期
export const renderCurrentDates = ({
  mJson,
  dateNumbers,
  format,
  valueFormat,
  disabledRender,
}: RenderMonthDatesEntity): DateEntity[] => {
  const { trueMonths, years } = mJson;
  const dates: DateEntity[] = [];

  for (let index = 1; index <= dateNumbers; index++) {
    const momentItem = moment(
      `${years}-${trueMonths}-${paddingZero(index)}`,
      formatDateDefault
    );
    dates.push(
      handleMomentObject({
        mObject: momentItem,
        status: 'current',
        format,
        valueFormat,
        disabledRender,
      })
    );
  }

  return dates;
};

// 渲染下月日期
export const renderNextDates = ({
  mJson,
  dateNumbers,
  firstDayOfWeek,
  format,
  valueFormat,
  disabledRender,
}: RenderMonthDatesEntity): DateEntity[] => {
  const { trueMonths, years } = mJson;
  const dates: DateEntity[] = [];

  let nextDateNumbers = 0;
  const currentMonth = Number(trueMonths);
  const nextMonth = currentMonth < 12 ? currentMonth + 1 : 1;
  const nextYear = currentMonth < 12 ? years : years + 1;

  const weekNumber: number = WEEK_TEXT.length; // 一周 7 天
  const maxNumber =
    weekNumber -
    Number(
      moment(`${years}-${trueMonths}-${dateNumbers}`, formatDateDefault).day()
    ) -
    firstDayOfWeek;

  while (nextDateNumbers < maxNumber - 1) {
    nextDateNumbers++;
    const momentLastItem = moment(
      `${nextYear}-${paddingZero(nextMonth)}-${paddingZero(nextDateNumbers)}`,
      formatDateDefault
    );
    dates.push(
      handleMomentObject({
        mObject: momentLastItem,
        status: 'next',
        format,
        valueFormat,
        disabledRender,
      })
    );
  }

  return dates;
};

export interface PaddingDatesWithToSixLinesEntity {
  allDates: DateEntity[];
  disabledRender: Function;
  format: string;
  valueFormat: string;
}

// 不够 6 行 补齐
export const paddingDatesWithToSixLines = ({
  allDates,
  disabledRender,
  format,
  valueFormat,
}: PaddingDatesWithToSixLinesEntity): DateEntity[] => {
  const allLines = 6;
  const nowLines: number = allDates.length / WEEK_TEXT.length;
  const { trueMonths, trueValue, years, value } = allDates[allDates.length - 1];
  const date6: DateEntity[] = [];

  if (trueMonths && nowLines < allLines) {
    let dateNumbers = 0;
    let startMonths = Number(trueMonths);
    let startDates = Number(trueValue);
    // 如果是当前月份，说明整行当月结束
    if (Number(trueValue) === moment(value, valueFormat).daysInMonth()) {
      startMonths++;
      startDates = 1;
    } else {
      startDates++;
    }

    while (dateNumbers < WEEK_TEXT.length) {
      const momentItem = moment(
        `${years}-${paddingZero(startMonths)}-${paddingZero(startDates)}`,
        formatDateDefault
      );

      date6.push(
        handleMomentObject({
          mObject: momentItem,
          status: 'next',
          format,
          valueFormat,
          disabledRender,
        })
      );

      dateNumbers++;
      startDates++;
    }
  }

  return date6;
};

// 渲染当前面板信息
export const renderDates = ({
  mObject,
  firstDayOfWeek,
  format,
  valueFormat,
  disabledRender,
}: RenderDatesEntity): DateEntity[] => {
  const newParams: RenderMonthDatesEntity = Object.assign(
    {},
    {
      firstDayOfWeek,
      format,
      valueFormat,
      dateNumbers: mObject.daysInMonth(),
      disabledRender,
      mJson: handleMomentObject({
        mObject,
        status: 'default',
        format,
        valueFormat,
        disabledRender,
      }),
    }
  );

  const allDates: DateEntity[] = concat(
    renderPrevDates(newParams),
    renderCurrentDates(newParams),
    renderNextDates(newParams)
  );

  return concat(
    allDates,
    paddingDatesWithToSixLines({
      allDates,
      disabledRender,
      format,
      valueFormat,
    })
  );
};

export interface YearInYearsEntity {
  title: string;
  value: string;
  trueValue: number;
  inputValue: string;
  status: string;
  disabled: boolean;
}

export interface YearsEntity {
  years: YearInYearsEntity[];
  range: string;
}

export interface RenderYearsByRangeYearEntity {
  yearStart: number;
  yearEnd: number;
  format: string;
  valueFormat: string;
  disabledRender: Function;
}

export interface GenerateRangeEntity {
  value: string | number;
  status: string;
  format: string;
  valueFormat: string;
  years: YearInYearsEntity[];
  disabledRender: Function;
}

export const generateRangeYear = ({
  value,
  years,
  format,
  valueFormat,
  disabledRender,
  status,
}: GenerateRangeEntity) => {
  const newValue = String(value);
  const disabledMoment = moment(newValue, formatYearDefault);
  years.push({
    value: disabledMoment.format(valueFormat),
    trueValue: Number(value),
    inputValue: disabledMoment.format(format),
    title: String(value),
    status,
    disabled: isFunction(disabledRender)
      ? disabledRender({
          item: disabledMoment.toObject(),
          type: 'year',
          current: disabledMoment,
        })
      : false,
  });
};

// 通过年份区间渲染年份 [2009,2011, ..., 2020]
export const renderYearsByRangeYear = ({
  yearStart,
  yearEnd,
  format,
  valueFormat,
  disabledRender,
}: RenderYearsByRangeYearEntity): YearsEntity => {
  const years: YearInYearsEntity[] = [];
  let year = yearStart;

  generateRangeYear({
    value: yearStart - 1,
    status: 'prev',
    format,
    valueFormat,
    years,
    disabledRender,
  });

  while (year <= yearEnd) {
    generateRangeYear({
      value: year,
      status: 'current',
      years,
      format,
      valueFormat,
      disabledRender,
    });
    year++;
  }

  generateRangeYear({
    value: yearEnd + 1,
    status: 'next',
    years,
    format,
    valueFormat,
    disabledRender,
  });

  return {
    years,
    range: `${yearStart} - ${yearEnd}`,
  };
};

export interface RangeYearEntity {
  range: string;
  yearStart: number;
  yearEnd: number;
}

// 通过年算出当前年代
export const getRangeYear = (nowYear: number): RangeYearEntity => {
  const yearHeader: string = String(nowYear).slice(0, 3);
  const yearStart = Number(`${yearHeader}0`);
  const yearEnd: number = yearStart + 9;

  return {
    range: `${yearStart} - ${yearEnd}`,
    yearStart,
    yearEnd,
  };
};

export interface RenderYearsByYear {
  nowYear: number;
  format: string;
  valueFormat: string;
  disabledRender: Function;
}

// 通过某年渲染年份 [2009,2011, ..., 2020]
export const renderYearsByYear = ({
  nowYear,
  format,
  valueFormat,
  disabledRender,
}: RenderYearsByYear): YearsEntity => {
  const yearHeader: string = String(nowYear).slice(0, 3);
  const yearStart = Number(`${yearHeader}0`);
  const yearEnd: number = yearStart + 9;

  return renderYearsByRangeYear({
    yearStart,
    yearEnd,
    format,
    valueFormat,
    disabledRender,
  });
};

export interface AgesInAgesEntity {
  value: string;
  inputValue: string;
  trueValue: string;
  title: string;
  status: string;
  disabled: boolean;
}

export interface AgesEntity {
  ages: AgesInAgesEntity[];
  range: string;
}

export interface RenderAgesEntity {
  range: string;
  format: string;
  valueFormat: string;
  disabledRender: Function;
}

export interface GenerateAgesEntity {
  value: string;
  status: string;
  format: string;
  valueFormat: string;
  ages: AgesInAgesEntity[];
  disabledRender: Function;
}

export const generateAges = ({
  value,
  ages,
  format,
  valueFormat,
  disabledRender,
  status,
}: GenerateAgesEntity): void => {
  const valueList = value.split('-');
  if (valueList.length === 2) {
    const [startYear, endYear] = valueList;
    const disabledStartMoment = moment(startYear, formatYearDefault);
    const disabledEndMoment = moment(endYear, formatYearDefault);
    const trueValueMoment = moment(value, valueFormat);
    const valueMoment = moment(value, format);

    ages.push({
      value: trueValueMoment.isValid()
        ? trueValueMoment.format(valueFormat)
        : value, // 因为 无效日期
      trueValue: trueValueMoment.isValid()
        ? trueValueMoment.format(valueFormat)
        : value,
      title: value,
      inputValue: valueMoment.isValid()
        ? trueValueMoment.format(format)
        : value, // 因为 无效日期
      status,
      disabled: isFunction(disabledRender)
        ? disabledRender({
            item: {
              start: disabledStartMoment.toObject(),
              end: disabledEndMoment.toObject(),
            },
            type: 'age',
            current: {
              start: disabledStartMoment,
              end: disabledEndMoment,
            },
          })
        : false,
    });
  }
};

// 渲染年代 ['1890-1899', '1900-1909', ..., '1800-1809']
export const renderAges = ({
  range,
  format,
  valueFormat,
  disabledRender,
}: RenderAgesEntity): AgesEntity => {
  const ages: AgesInAgesEntity[] = [];
  const ageHeader: string = range.split(' - ')[0].slice(0, 2);
  const ageStart = Number(`${ageHeader}00`);
  const step = 10;
  let whileIndex = 0;
  const ageEnd: number = ageStart + step - 1;

  generateAges({
    value: `${ageStart - step}-${ageEnd - step}`,
    ages,
    format,
    valueFormat,
    disabledRender,
    status: 'prev',
  });

  while (whileIndex < step) {
    generateAges({
      value: `${ageStart + whileIndex * step} - ${ageEnd + whileIndex * step}`,
      ages,
      format,
      valueFormat,
      disabledRender,
      status: 'current',
    });
    whileIndex++;
  }

  generateAges({
    value: `${ageStart + whileIndex * step} - ${ageEnd + whileIndex * step}`,
    ages,
    format,
    valueFormat,
    disabledRender,
    status: 'next',
  });

  return {
    ages,
    range: `${ageStart} - ${ageEnd + (whileIndex - 1) * step}`,
  };
};

export interface MonthInMonthsEntity {
  value: string;
  inputValue: string;
  trueValue: number;
  status: string;
  title: string;
  disabled: boolean;
}

export interface MonthsEntity {
  months: MonthInMonthsEntity[];
  year: number;
}

export interface RenderMonthsEntity {
  year: number;
  format: string;
  valueFormat: string;
  disabledRender: Function;
}

// 渲染月份
export const renderMonths = ({
  year,
  format,
  valueFormat,
  disabledRender,
}: RenderMonthsEntity): MonthsEntity => {
  const months: MonthInMonthsEntity[] = MONTH_TEXT.map(
    (value: string, valueIndex: number): MonthInMonthsEntity => {
      const monthMoment = moment(
        `${year}-${paddingZero(valueIndex + 1)}`,
        formatMonthDefault
      );
      return {
        value: monthMoment.format(valueFormat),
        inputValue: value,
        trueValue: monthMoment.month() + 1,
        title: value,
        status: 'current',
        disabled: isFunction(disabledRender)
          ? disabledRender({
              item: handleMomentObject({
                mObject: monthMoment,
                status: 'current',
                format,
                valueFormat,
              }),
              type: 'month',
              current: monthMoment,
            })
          : false,
      };
    }
  );

  return {
    months,
    year,
  };
};
