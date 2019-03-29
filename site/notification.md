# Notification 通知提醒框

## 基本使用

<br>
<p>
  <w-button prefix="notification" v-bind:click="open">open</w-button>
</p>

## 不自动关闭
> 间隔参数 `duration` 设置为 0 即可。

<p>
  <w-button v-bind:click="noAutoClose">不会自己关</w-button>
</p>

## 位置

<br>
<p>
  <select class="notice-sel" @change="dirSelFn" aria-label="direction">
    <option v-for="(direction, directionIndex) in directions" :key="directionIndex" :value="direction">{{direction}}</option>
  </select>
  <w-button prefix="notification" v-bind:click="changePlacement">打开</w-button>
</p>

## 自定义消息内容
> 间隔参数 `render` ，具体请移步[官方文档](https://cn.vuejs.org/v2/api/#render)。

<p>
  <w-button v-bind:click="setRender">自定义</w-button>
</p>

## API



|函数名|说明|参数|
|---|---|---|---|
|open|打开弹框|有|

另外 open 方法的参数(都是可选参数)说明如下：

|属性|说明|类型|默认|
|---|---|---|---|
|placement|弹出位置，可选 `topLeft`, 'topRight', `bottomLeft`, `bottomRight`|String|'topRight'|
|space|屏幕的距离|Number|24|
|duration|默认自动关闭延时，单位毫秒秒|String|600|
|hoverStopClose|移入区域延迟关闭取消，移出之后重新延迟关闭 的 开关|Boolean|true|
|close|关闭触发，返回当前弹框元素|Function|() => {}|
|click|点击消息触发，返回 `event` 对象|Function|() => {}|

<script>
import WIcon from '../water/icon/Icon';
import notice from '../water/notification/index';
import WButton from '../water/button/Button';

export default {
  data() {
    const text = '这是一段描述文案';
    return {
      text,
      title: '这是标题',
      content: `<p style="color: #1996f9; margin: 0;">${text}，详情请移步<a href="https://github.com/fe6/water" target="_blank">水滴</a></p>`,
      placement: 'topLeft',
      directions: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
    };
  },
  methods: {
    open() {
      notice.open({
        title: this.title,
        placement: this.placement,
        render: h => {
          return h('p', [h(WIcon, {
            props: {
              type: 'heart',
            },
          }), ` ${this.text}`]);
        },
      });
    },
    changePlacement() {
      notice.open({
        title: this.title,
        placement: this.placement,
        content: this.content,
      });
    },
    noAutoClose() {
      notice.open({
        title: this.title,
        duration: 0,
        content: this.content,
      });
    },
    setRender() {
      notice.open({
        title: this.title,
        render: h => {
          return h('p', [h(WIcon), ` ${this.text}`]);
        },
      });
    },
    dirSelFn(event) {
      this.placement = event.target.value;
    },
  },
  components: {
    notice,
    WButton,
    WIcon,
  },
}
</script>
<style lang="scss">
@import '../water/icon/style/icon.scss';
@import '../water/button/style/button.scss';
@import '../water/notification/style/notification.scss';

</style>
