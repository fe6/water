# Radio 单选
> 表单提交的时候，几个选项只能选择一个的时候使用。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本用法

***output***

<w-radio-group>
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group>
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
```

## defaultChecked 默认不选中
> 添加 defaultChecked 属性即可

***output***

<w-radio-group :defaultChecked="false">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group :defaultChecked="false">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
```

## mode 垂直排版
> 添加 mode 属性即可

***output***

<w-radio-group mode="vertical">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group mode="vertical">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
```

## v-model 双向数据
> 添加 v-model 属性即可

***output***

<p>当前选择： {{more}}</p>
<w-radio-group v-model="more">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group v-model="more">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
```

``` js
export default {
  data() {
    return {
      more: 0,
    }
  },
};
```

## 更多输入
> 根据 v-model 判断

***output***

<p>当前选择： {{more}}</p>
<w-radio-group v-model="more">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1" aria-label="美国">美国</w-radio>
  <w-radio :key="2">
    <span class="input-more-text">更多</span>
    <input type="text" class="input-more" v-if="more === 2">
  </w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group v-model="more">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1" aria-label="美国">美国</w-radio>
  <w-radio :key="2">
    <span class="input-more-text">更多</span>
    <input type="text" class="input-more" v-if="more === 2">
  </w-radio>
</w-radio-group>
```

``` js
export default {
  data() {
    return {
      more: 0,
    }
  },
};
```

## disabled 禁用用法
> 添加 disabled 属性即可

***output***

<w-radio-group :disabled="disabled">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? '禁' : '可'}}用</w-button>

***input***

``` vue
<w-radio-group :disabled="disabled">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? '禁' : '可'}}用</w-button>
```

``` js
export default {
  data() {
    return {
      disabled: true,
    }
  },
  methods: {
    changeDisabledStatus() {
      this.disabled = !this.disabled;
    },
  },
};
```


## disabled 禁用一个用法
> 添加 disabled 属性即可

***output***

<w-radio-group>
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1" :disabled="disabled">美国</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? '禁' : '可'}}用其中一个</w-button>

***input***

``` vue
<w-radio-group>
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1" :disabled="disabled">美国</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? '禁' : '可'}}用</w-button>
```

``` js
export default {
  data() {
    return {
      disabled: true,
    }
  },
  methods: {
    changeDisabledStatus() {
      this.disabled = !this.disabled;
    },
  },
};
```

## loading 加载用法
> 添加 loading 属性即可，配合 before 拦截器

***output***

<w-radio-group :before="beforeLoading" :loading="loading">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
<br>

***input***

``` vue
<w-radio-group :loading="loading">
  <w-radio :key="0">中国</w-radio>
  <w-radio :key="1">美国</w-radio>
</w-radio-group>
<br>
```

``` js
export default {
  data() {
    return {
      loading: true,
    }
  },
  methods: {
  },
};
```

## API

### w-radio 组件

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|name|input[type="radio"] 的 name 属性，优先父节点的 name 设置|String|否|wradio|
|key|每条的索引|Number|String|是|无|
|disabled|按钮处于不可用状态，点击事件失效，样式也会变|Boolean|否|无|

### w-radio-group 组件

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|name|input[type="radio"] 的 name 属性|String|否|wradio|
|on|默认选中第几个|Number|否|0|
|defaultChecked|初始是否选中|Boolean|否|true|
|mode|横向排版(horizontal)或竖向排版(vertical)|Boolean|否|horizontal|
|v-model|双向绑定|Number|否|无|
|before|改变之前触发，返回 Promise 对象|Function|否|function() {return new Promise((resolve, reject) => {resolve();});}|
|change|改变的时候触发。会返回 `Event 对象`, `索引`|Function|否|()=>{}|
|prefix|所有 class 样式名前缀|String|否|无|
|disabled|按钮处于不可用状态，点击事件失效，样式也会变|Boolean|否|无|
|loading|按钮处于加载等待状态，点击事件失效，样式也会变|Boolean|否|无|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|改变的时候触发|`Event 对象`, `索引`|

<script>
import WRadio from './Radio';
import WRadioGroup from './RadioGroup';
import WButton from '../button/Button';


export default {
  data() {
    return {
      more: 0,
      disabled: true,
      loading: false,
    }
  },
  methods: {
    changeDisabledStatus() {
      this.disabled = !this.disabled;
    },
    beforeLoading() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (confirm("你确定选择吗？")) {
            this.loading = false;
            resolve();
          }
          else {
            this.loading = false;
          }
        }, 2000);
      });
    },
  },
  components: {
    WButton,
    WRadio,
    WRadioGroup,
  },
};
</script>
<style lang="scss">
@import '../button/style/button.scss';
@import './style/radio.scss';
@import './style/radiogroup.scss';

.input-more-text {
  display: inline-block;
  vertical-align: middle;
}

.input-more {
  padding: 0;
  margin: 0 0 0 8px;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
}
</style>