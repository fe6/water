import { TITLE } from '@/views/common/constant';

export default [
  {
    path: '/tinput',
    name: 'TestInput',
    meta: {
      title: TITLE.Input,
    },
    component: () =>
      import(/* webpackChunkName: "input" */ '@/views/test/Input.vue'),
  },
  {
    path: '/tmodal',
    name: 'TestModal',
    meta: {
      title: TITLE.Modal,
    },
    component: () =>
      import(/* webpackChunkName: "modal" */ '@/views/test/Modal.vue'),
  },
  {
    path: '/tstatistic',
    name: 'TestStatistic',
    meta: {
      title: TITLE.Statistic,
    },
    component: () =>
      import(/* webpackChunkName: "statistic" */ '@/views/test/Statistic.vue'),
  },
  {
    path: '/tpopconfirm',
    name: 'TestPopconfirm',
    meta: {
      title: TITLE.Popconfirm,
    },
    component: () =>
      import(
        /* webpackChunkName: "popconfirm" */ '@/views/test/Popconfirm.vue'
      ),
  },
  {
    path: '/tcountdown',
    name: 'TestCountdown',
    meta: {
      title: TITLE.Countdown,
    },
    component: () =>
      import(/* webpackChunkName: "countdown" */ '@/views/test/Countdown.vue'),
  },
  {
    path: '/tdatepicker',
    name: 'TestDatePicker',
    meta: {
      title: TITLE.DatePicker,
    },
    component: () =>
      import(
        /* webpackChunkName: "datepicker" */ '@/views/test/DatePicker.vue'
      ),
  },
  {
    path: '/tcascader',
    name: 'TestCascader',
    meta: {
      title: TITLE.Cascader,
    },
    component: () =>
      import(/* webpackChunkName: "cascader" */ '@/views/test/Cascader.vue'),
  },
  {
    path: '/tprogress',
    name: 'TestProgress',
    meta: {
      title: TITLE.Progress,
    },
    component: () =>
      import(/* webpackChunkName: "progress" */ '@/views/test/Progress.vue'),
  },
  {
    path: '/tscroll',
    name: 'TestScroll',
    meta: {
      title: TITLE.Scroll,
    },
    component: () =>
      import(/* webpackChunkName: "scroll" */ '@/views/test/Scroll.vue'),
  },
  {
    path: '/ttimeline',
    name: 'TestTimeline',
    meta: {
      title: TITLE.Timeline,
    },
    component: () =>
      import(/* webpackChunkName: "timeline" */ '@/views/test/Timeline.vue'),
  },
  {
    path: '/tneed',
    name: 'TestNeed',
    meta: {
      title: TITLE.Progress,
    },
    component: () =>
      import(/* webpackChunkName: "need" */ '@/views/test/Need.vue'),
  },
  {
    path: '/ttimepicker',
    name: 'TestTimepicker',
    meta: {
      title: TITLE.Timepicker,
    },
    component: () =>
      import(
        /* webpackChunkName: "timepicker" */ '@/views/test/Timepicker.vue'
      ),
  },
  {
    path: '/tselect',
    name: 'TestSelect',
    meta: {
      title: TITLE.Select,
    },
    component: () =>
      import(/* webpackChunkName: "select" */ '@/views/test/Select.vue'),
  },
  {
    path: '/ttext',
    name: 'TestText',
    meta: {
      title: TITLE.Text,
    },
    component: () =>
      import(/* webpackChunkName: "text" */ '@/views/test/Text.vue'),
  },
  {
    path: '/tcalendar',
    name: 'TestCalendar',
    meta: {
      title: TITLE.Calendar,
    },
    component: () =>
      import(/* webpackChunkName: "calendar" */ '@/views/test/Calendar.vue'),
  },
  {
    path: '/ttable',
    name: 'TestTable',
    meta: {
      title: TITLE.Table,
    },
    component: () =>
      import(/* webpackChunkName: "table" */ '@/views/test/Table.vue'),
  },
  {
    path: '/ttag',
    name: 'TestTag',
    meta: {
      title: TITLE.Tag,
    },
    component: () =>
      import(/* webpackChunkName: "tag" */ '@/views/test/Tag.vue'),
  },
];
