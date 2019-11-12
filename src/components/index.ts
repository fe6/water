// 组件
import Affix from './affix/Affix.vue';
import Badge from './badge/Badge.vue';
import Breadcrumb from './breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from './breadcrumb/BreadcrumbItem.vue';
import Button from './button/Button.vue';
import ButtonGroup from './button/ButtonGroup.vue';
import Cascader from './cascader/Cascader.vue';
import Checkbox from './checkbox/Checkbox.vue';
import CheckboxGroup from './checkbox/CheckboxGroup.vue';
import Datepicker from './datepicker/DatePicker.vue';
import Empty from './empty/Empty.vue';
import Row from './grid/Row.vue';
import Col from './grid/Col.vue';
import Icon from './icon/Icon.vue';
import Input from './input/Input.vue';
import InputNumber from './inputnumber/InputNumber.vue';
import Link from './link/Link.vue';
import Modal from './modal/Modal.vue';
import Page from './page/Page.vue';
import PageJump from './page/PageJump.vue';
import Popconfirm from './popconfirm/Popconfirm.vue';
import Popover from './popover/Popover.vue';
import Progress from './progress/Progress.vue';
import Radio from './radio/Radio.vue';
import RadioGroup from './radio/RadioGroup.vue';
import Select from './select/Select.vue';
import Spin from './spin/Spin.vue';
import Switch from './switch/Switch.vue';
import Table from './table/Table.vue';
import Tag from './tag/Tag.vue';
import CheckTag from './tag/CheckTag.vue';
import NewTag from './tag/NewTag.vue';
import Tooltip from './tooltip/Tooltip.vue';

import confirm from '@/components/modal/confirm';

const waterCpt = {
  Affix,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Empty,
  Row,
  Col,
  Icon,
  Input,
  InputNumber,
  Link,
  Modal,
  Page,
  PageJump,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Spin,
  Switch,
  Table,
  Tag,
  CheckTag,
  NewTag,
  Tooltip,
};

const install = (Vue: any) => {
  if ((install as any).installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(`W${key}`, (waterCpt as any)[key]);
  });

  if (!Vue.prototype.$WConfirm) {
    Object.defineProperties(Vue.prototype, {
      $WConfirm: {
        get() {
          return confirm;
        },
      },
    });
  }
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  version: '1.0.0',
  install,
};
