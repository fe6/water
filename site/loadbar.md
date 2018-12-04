# Loadbar 全局加载进度条

## 概述
全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

## 代码演示

### 基本使用

<br>
<br>
<w-button prefix="demo" v-bind:click="start">开始</w-button>
<w-button prefix="demo" type="primary" v-bind:click="finish">完成</w-button>
<w-button prefix="demo" type="danger" v-bind:click="fail">报错</w-button>
<w-button prefix="demo" type="dash" v-bind:click="update">更新</w-button>

## 说明
Loadbar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和 Ajax，因为这两者都不能拿到精确的进度，Loadbar 会模拟进度，当然也可以通过 `update()` 方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

## API

通过直接调用以下方法来使用组件：

``` js
this.$Loading.init({
  height: '2px',
  color: '#1996f9',
  failedColor: '#ff0000',
  duration: 3000,
});
this.$Loading.start();
this.$Loading.finish();
this.$Loading.fail();
this.$Loading.update(10);
```

以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

|函数名|说明|参数|
|---|---|---|---|
|init|初始化。可配一些进度条的配置|有|
|finish|结束进度条，自动补全剩余进度|无|
|fail|以错误的类型结束进度条，自动补全剩余进度|无|
|update|精确加载到指定的进度，单位 % |percent，指定的进度百分比|

另外 init 方法的参数(都是可选参数)说明如下：

|属性|说明|类型|默认|
|---|---|---|---|
|height|进度条高度，单位必须带上|String|'2px'|
|color|进度条的颜色|String|'#1996f9'|
|failedColor|失败时的进度条颜色|String|'#ff0000'|
|duration|进度条增进的参数|Number|3000|

<script>
import WLoadbar from '../water/loadbar/index';
import WButton from '../water/button/Button';

export default {
  mounted() {
    WLoadbar.init();
  },
  methods: {
    start() {
      WLoadbar.start();
    },
    finish() {
      WLoadbar.finish();
    },
    fail() {
      WLoadbar.fail();
    },
    update () {
      WLoadbar.update(10);
    },
  },
  components: {
    WLoadbar,
    WButton,
  },
}
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
@import '../water/loadbar/style/loadbar.scss';

.demo-button {
  margin: 0 8px 8px 0;
  vertical-align: middle;
}
</style>
