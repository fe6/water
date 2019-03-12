# Modal 对话框

## 基本

<p>
  <button class="inp-btn" @click="oneStatus = !oneStatus">点击</button>
</p>

<w-modal title="对话框" v-model="oneStatus">
  <div>这是一段内容</div>
  <div>这是一段内容</div>
  <div>这是一段内容</div>
</w-modal>


## 自定义

<p>
  <button class="inp-btn" @click="footerStatus = !footerStatus">点击</button>
</p>

<w-modal v-model="footerStatus" footerName="modal-footer" titleName="modal-title" closeName="modal-close" maskName="modal-mask">
  <div slot="title"><a href="https://github.com/fe6/water">我想去仓库</a></div>
  <w-button type="primary" @click="alertStatus = !alertStatus">我要改变下面的文案</w-button>
  <p>{{alertStatus ? '听说今年国安要夺冠' : '没错，国安就是冠军'}}</p>
  <div><a href="https://github.com/fe6/water">我们的仓库</a></div>
  <button class="inp-btn" slot="footer" @click="footerStatus = !footerStatus">我要关上</button>
</w-modal>

## 确定之前

<p>
  <button class="inp-btn" title="对话框" @click="beforeStatus = !beforeStatus">点击</button>
</p>

<div>
<w-modal title="对话框" v-model="beforeStatus" okText="提交" :loading="isLoading" :before="before">
  姓名：<input type="text" aria-label="姓名">
  密码：<input type="passworld" aria-label="密码">
</w-modal>
</div>

## 改变位置

<p>
  <button class="inp-btn" @click="styleStatus = !styleStatus">距离上面 20px</button>
</p>

<w-modal v-model="styleStatus" title="对话框" :cancelable="false" :modalStyle="{top: '20px', transform: 'translate(-50%, 0)'}">
  <div>这是一段内容</div>
  <div>这是一段内容</div>
  <div>这是一段内容</div>
</w-modal>

## 只有内容

<p>
  <button class="inp-btn" @click="noStatus = !noStatus">点击</button>
</p>

<div>
  <w-modal v-model="noStatus" :closable="false" :okable="false" :cancelable="false">
    <div>这是一段内容</div>
    <div>这是一段内容</div>
    <div>这是一段内容</div>
    <p>
      <button class="inp-btn" slot="footer" @click="noStatus = !noStatus">我要关上</button>
    </p>
  </w-modal>
</div>

## 方法化

<p>
  <button class="inp-btn" @click="showModal">普通版{{timeNumber}}秒自动关</button>
  <button class="inp-btn" @click="showConfirm">确认版</button>
</p>

## API

#### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|title|标题，只支持字符串形式，若想自定制标题，请移步[自定义](#自定义)|String|否|无|
|modalStyle|对话框整体的样式|Object|否|()=>{}|
|bodyStyle|对话框 body 的样式|Object|否|()=>{}|
|loading|是否是加载状态|Boolean|否|无|
|mask|是否有遮罩|Boolean|否|true|
|maskClosable|是否点击遮罩关闭|Boolean|否|true|
|esc|是否键盘 esc 关闭|Boolean|否|true|
|center|是否居中显示|Boolean|否|true|
|transfer|是否转移到 body 下|Boolean|否|true|
|getContainer|浮层渲染父节点，默认渲染到 body 上|Function(triggerNode)|否|() => document.body|
|closable|是否显示关闭小叉子|Boolean|否|true|
|cancelText|取消文案自定义|String|否|取消|
|cancelable|是否显示取消按钮|Boolean|否|true|
|cancel|取消点击之后触发的方法，返回当前状态|Boolean|否|true|
|okText|确定文案自定义|String|否|确定|
|okable|是否显示确定按钮|Boolean|否|true|
|okType|确定按钮样式类型|String|否|primary|
|ok|确定点击之后触发的方法，返回当前状态|Boolean|否|true|
|before|确定之前触发，返回 Promise 对象|Function|否|无|
|modalName|对话框的 class 名|String, Array, Object|否|() => {}|
|titleName|标题的 class 名|String, Array, Object|否|() => {}|
|closeName|关闭的 class 名|String, Array, Object|否|() => {}|
|footerName|底部的 class 名|String, Array, Object|否|() => {}|
|bodyName|中间部分的 class 名|String, Array, Object|否|() => {}|
|maskName|遮罩的 class 名|String, Array, Object|否|() => {}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|ok|确定的时候触发|当前状态|
|cancel|取消的时候触发|当前状态|


<script>
import WIcon from '../water/icon/Icon';
import WModal from '../water/modal/Modal';
import modal from '../water/modal/core';
import WButton from '../water/button/Button';

export default {
  data() {
    return {
      oneStatus: false,
      beforeStatus: false,
      footerStatus: false,
      styleStatus: false,
      noStatus: false,
      isLoading: false,
      alertStatus: true,
      timeNumber: 2,
    };
  },
  mounted() {

  },
  methods: {
    before: async function() {
      this.isLoading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve()
        }, 2000);
      } )
    },
    showModal() {
      let timer = null;
      const closeModal = () => {
        clearTimeout(timer);
        clearInterval(time);
        this.timeNumber = 2;
      };
      const a = modal.open({
        title: '这是一段标题',
        okText: '确定',
        render(h) {
          return h('div', [
            h('div', '这是一段内容'),
            h('div', '这是一段内容'),
            h('div', '这是一段内容'),
          ]);
        },
        ok: closeModal,
        cancel: closeModal,
        close: closeModal,
      });
      let time = setInterval(() => {
        this.timeNumber--;
        if (this.timeNumber < 1) {
          clearInterval(time);
        }
        }, 1000);
      timer = setTimeout(() => {
        a.close();
        this.timeNumber = 2;
      }, 2000);
    },
    showConfirm() {
      modal.confirm({
        title: '这是标题',
        body: '这是水滴库的对话框，源码请移步-> <a href="https://github.com/fe6/water" target="\_blank">water</a>',
      });
    },
  },
  components: {
    WModal,
    WButton,
  },
};
</script>

<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/button/style/button.scss';
@import '../water/modal/style/modal.scss';
</style>
