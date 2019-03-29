# Button 按钮
> 按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 按钮类型用法

<br>

<p>
<w-button prefix="demo" type="primary">Primary</w-button>
<w-button prefix="demo">Default</w-button>
<w-button prefix="demo" type="dashed">Dashed</w-button>
<w-button prefix="demo" type="danger">Danger</w-button>
</p>

## 图标按钮用法

<br>

<p>
  <w-button prefix="demo" type="primary" circle>
    <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  </w-button>
  <w-button prefix="demo" type="primary" icon="loading3">Search</w-button>
  <w-button prefix="demo" circle>
    <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  </w-button>
  <w-button prefix="demo" icon="loading3">Search</w-button>
  <br />
  <w-button prefix="demo" type="danger" circle>
    <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  </w-button>
  <w-button prefix="demo" type="danger" icon="loading3">Search</w-button>
  <w-button prefix="demo" type="dashed" circle>
    <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  </w-button>
  <w-button prefix="demo" type="dashed" icon="loading3">Search</w-button>
</p>


## 加载中状态

<br>

<p>
  <w-button prefix="demo" :size="groupConfig[groupStatus]" :loading="loadStatus" @click="changeLoadStatus">{{loadStatus?'':'点击'}}加载{{loadStatus?'中':''}}</w-button>
  <w-button prefix="demo" :size="groupConfig[groupStatus]" :disabled="disableStatus" @click="changeDisableStatus">点击{{disableStatus?'起':'禁'}}用</w-button>
</p>

## 按钮组合

<br>

<p>当前选中：{{groupStatus}}， 按钮大小为： {{groupConfig[groupStatus] || 'default'}}</p>
<p>
  <w-button-group :on="groupStatus">
    <w-button prefix="demo" :key="0" @click="changeGroupStatus">小</w-button>
    <w-button prefix="demo" :key="1" @click="changeGroupStatus">中</w-button>
    <w-button prefix="demo" :key="2" @click="changeGroupStatus">大</w-button>
  </w-button-group>
</p>

<p>
  <w-button-group>
    <w-button prefix="demo" :size="groupConfig[groupStatus]" :key="1">普通按钮</w-button>
    <w-button prefix="demo" type="danger" :size="groupConfig[groupStatus]" :key="2">
      <svg slot="icon" viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
      <span>图标按钮</span>
    </w-button>
    <w-button prefix="demo" type="dashed" :size="groupConfig[groupStatus]" circle :key="3">
      <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
    </w-button>
  </w-button-group>
</p>

## 幽灵按钮

<br>

<p class="ghost">
  <w-button prefix="demo" ghost>普通按钮</w-button>
  <w-button prefix="demo" type="danger" ghost>图标按钮</w-button>
  <w-button prefix="demo" type="primary" ghost circle>
    <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  </w-button>
  <w-button prefix="demo" type="dashed" ghost>
    <svg viewBox="64 64 896 896" slot="icon" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  </w-button>
</p>

## API

### w-button 组件

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|type|设置按钮类型，可选值为 `primary`,`dashed`,`danger`|String|否|无|
|size|设置按钮大小，可选值为 `small`,`large`|String|否|无|
|icon|设置按钮的图标类型|String|否|无|
|loading|设置按钮载入状态|Boolean|否|无|
|circle|设置按钮形状为圆形|Boolean|否|无|
|ghost|幽灵属性，使按钮背景透明|Boolean|否|无|
|disabled|按钮处于不可用状态，点击事件失效，样式也会变|Boolean|否|无|
|htmlType|设置 button 原生的 type 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)|String|否|button|
|prefix|自定义样式的前缀|String|否|无|
|className|自定义样式的 class 名|String\|Object|否|无|
|click|绑定按钮点击事件，循环中 this 改变并传参时使用。会返回 `Event 对象`, `索引`|Function|否|() => {}|
|mouseover|绑定按钮鼠标移入事件，循环中 this 改变并传参时使用。会返回 `Event 对象`, `索引`|Function|否|() => {}|
|mouseout|绑定按钮鼠标移出事件，循环中 this 改变并传参时使用。会返回 `Event 对象`, `索引`|Function|否|() => {}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|click|绑定按钮点击事件|`Event 对象`, `索引`|
|mouseover|绑定按钮鼠标移入事件|`Event 对象`, `索引`|
|mouseout|绑定按钮鼠标移出事件|`Event 对象`, `索引`|

### w-button-group 组件

> 如果需要自定义索引( on )，需要与子组件的 key 值对应。

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|prefix|自定义样式的前缀|String|否|无|
|className|自定义样式的 class 名|String\|Object|否|无|
|on|定义当前选中的索引。必须子组件 key 对应|Number|否|0|

<script>
import WButton from '../water/button/Button';
import WButtonGroup from '../water/button/ButtonGroup';

export default {
  data() {
    return {
      groupStatus: 2,
      loadStatus: false,
      disableStatus: false,
      groupConfig: ['small', '', 'large',],
    };
  },
  methods: {
    changeGroupStatus($event, index) {
      this.groupStatus = index;
    },
    changeLoadStatus() {
      this.loadStatus = true;
    },
    changeDisableStatus() {
      this.disableStatus = true;
    },
  },
  components: {
    WButton,
    WButtonGroup,
  },
};
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
</style>
