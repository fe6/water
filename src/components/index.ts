// 组件
import Affix from './affix/Affix.vue';
import Badge from './badge/Badge.vue';
import Breadcrumb from './breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from './breadcrumb/BreadcrumbItem.vue';
import Button from './button/Button.vue';
import ButtonGroup from './button/ButtonGroup.vue';
import Checkbox from './checkbox/Checkbox.vue';
import CheckboxGroup from './checkbox/CheckboxGroup.vue';
import Row from './grid/Row.vue';
import Col from './grid/Col.vue';
import Icon from './icon/Icon.vue';
import Input from './input/Input.vue';
import Link from './link/Link.vue';
import Radio from './radio/Radio.vue';
import RadioGroup from './radio/RadioGroup.vue';

const waterCpt = {
  Affix,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Row,
  Col,
  Icon,
  Input,
  Link,
  Radio,
  RadioGroup,
};

const install = (Vue: any) => {
  if ((install as any).installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(`W${key}`, (waterCpt as any)[key]);
  });
};


if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  version: '1.0.0',
  install,
};
