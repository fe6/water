# Rate 评分
> 评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

``` html
<p>
  <div>{{number}}<w-rate prefix="o" half v-model="number"></w-rate></div>
  <div>{{number1}}<w-rate prefix="a" v-model="number1"></w-rate></div>
  <div><w-rate :count="10"></w-rate></div>
  <div>
    <p><w-button size="small" @click="click">当前数字是</w-button> -> {{number3}} -> 对应的评分是 -> </p>
    <w-rate character="我的" v-model="number3"></w-rate>
  </div>
  <div>
    <p>当前改变的值->{{numberClick}}->当前移动的值->{{numberHover}}-></p>
    <w-rate half character="w-icon" @change="changeValue" :hover="changeHover"></w-rate>
  </div>
  <div>
    <p>当前改变的值->{{numberClick}}->当前移动的值->{{numberHover}}-></p>
    <w-rate half character="我的我人" :change="changeValue" :hover="changeHover"></w-rate>
  </div>
</p>
```

<script>
export default {
  data() {
    return {
      number: 1.5,
      number1: 1,
      number3: 3,
      numberClick: -1,
      numberHover: -1,
    };
  },
  methods: {
    click() {
      this.number3 = Math.floor((Math.random() * 5) + 1);
    },
    changeValue(val) {
      this.numberClick = val;
    },
    changeHover(val) {
      this.numberHover = val;
    },
  },
};
</script>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|count|star 总数|Number|是|无|
|half|是否允许半选|Boolean|否|false|
|character|自定义字符，支持字符串，不支持html格式|String|否|无|
|icon|自定义 icon 类型|String|否|star|
|prefix|样式的前缀|String|否|无|
|change|选择时的回调|Function(value: number)|否|() => {}|
|hover|鼠标经过时数值变化的回调|Function(value: number)|否|() => {}|

### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|选择时的回调|当前选择的数字|
|hover|鼠标经过时的回调|当前选择的数字|
