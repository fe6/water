/** @format */

const timeList = {
  functional: true,
  props: {
    value: String,
    time: String,
    hour: String,
    minute: String,
    second: String,
    disabledRender: Function,
  },
  render(createElement: Function, { props }: any) {
    const { value, time, hour, minute, second, disabledRender } = props;

    return createElement(
      'div',
      {
        class: [
          'w-timelist-lattice',
          {
            'w-timelist-active': value === time,
            'w-timelist-lattice-disabled': disabledRender({
              time,
              hour,
              minute,
              second,
            }),
          },
        ],
      },
      time,
    );
  },
};

export default timeList;
