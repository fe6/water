# Message 全局提示

## 基本使用

<br>
<p>
  <w-button prefix="message" v-bind:click="success">success</w-button>
  <w-button prefix="message" v-bind:click="info">info</w-button>
  <w-button prefix="message" v-bind:click="warning">warning</w-button>
  <w-button prefix="message" v-bind:click="error">error</w-button>
</p>

## 方法

<br>
<div>Message.info(params)</div>
<div>Message.success(params)</div>
<div>Message.warning(params)</div>
<div>Message.error(params)</div>
<div>Message.config(params)</div>

## API



|函数名|说明|参数|
|---|---|---|---|
|success|成功|有|
|info|信息|有|
|warning|提醒|有|
|error|报错|有|

另外方法的参数(都是可选参数)说明如下：

|属性|说明|类型|默认|
|---|---|---|---|
|delayTime|延时几毫秒关闭提示。单位：毫秒|Number|5000|
|content|提示内容。目前不支持标签渲染，只支持纯字符串。|String|无|
|style|提示框的样式。|String|无|
|close|关闭触发，返回当前弹框元素|Function|() => {}|

<script>
import message from '../water/message/index';
import WButton from '../water/button/Button';

export default {
  data() {
    const text = '这是一段描述文案';
    return {
      text,
      title: '这是标题',
      content: `<p style="color: yellow; margin: 0;">${text}，详情请移步<a href="https://github.com/fe6/water" target="_blank" style="color: purple;">水滴</a></p>`,
    };
  },
  methods: {
    success() {
      message.success({
        title: this.title,
        content: this.content,
      });
    },
    info() {
      message.info({
        title: this.title,
        content: this.content,
      });
    },
    warning() {
      message.warning({
        title: this.title,
        content: this.content,
      });
    },
    error() {
      message.error({
        title: this.title,
        content: this.content,
      });
    },
  },
  components: {
    message,
    WButton,
  },
}
</script>
<style lang="scss">
@import '../water/button/style/button.scss';
@import '../water/message/style/message.scss';
</style>
