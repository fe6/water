# Rate 评分
> 评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 基本使用
> 最简单的用法。

<br>
<w-rate />

## 半星
> 支持选中半星。

<br>
<w-rate half v-model="halfRate" />

## 其他字符
> 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

<br>
<w-rate character="水滴" />

## 随时改变设置的值
> 不仅可以上来选中，也可以之后修改。

<br>
<w-button size="small" v-bind:click="click">当前数字是</w-button> -> {{number}} -> 对应的评分是 ->
<w-rate character="水滴" v-model="number"></w-rate>


## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|count|star 总数|Number|是|无|
|half|是否允许半选|Boolean|否|false|
|color|高亮颜色|String|否|'#fadb14'|
|character|自定义字符，支持字符串，不支持html格式|String|否|无|
|prefix|样式的前缀|String|否|无|
|change|选择时的回调|Function(value: number)|否|() => {}|
|hover|鼠标经过时数值变化的回调|Function(value: number)|否|() => {}|

### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|选择时的回调|当前选择的数字|
|hover|鼠标经过时的回调|当前选择的数字|

<script>
import WRate from '../water/rate/Rate';
import WButton from '../water/button/Button';

export default {
  data() {
    return {
      halfRate: 1.5,
      number: 3,
    };
  },
  methods: {
    click() {
      this.number = Math.floor((Math.random() * 5) + 1);
    },
  },
  components: {
    WRate,
    WButton,
  },
};
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
@import '../water/rate/style/rate.scss';
</style>
