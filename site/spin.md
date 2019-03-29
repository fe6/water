# Spin 加载中

## 基本

<br>
<w-spin :value="true" type="loading1">
  <svg slot="icon" viewBox="64 64 896 896" class="" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
</w-spin>

## 遮罩某一部分

<br>
<w-spin tip="加载中..." :value="true">
  <div class="panel">
    <h3>这是标题</h3>
    <p>这是描述</p>
  </div>
</w-spin>

## 受控制

<br>
<div>
  <span>控制：</span>
  <button :key="0" @click="changeGroupStatus($event, 0)" class="inp-btn" :class="{'on': sizeStatus === 0}">小</button>
  <button :key="1" @click="changeGroupStatus($event, 1)" class="inp-btn" :class="{'on': sizeStatus === 1}">中</button>
  <button :key="2" @click="changeGroupStatus($event, 2)" class="inp-btn" :class="{'on': sizeStatus === 2}">大</button>
  <button @click="status = !status" class="inp-btn" :class="{'on': status}">加载中</button>
</div>
<br>
- 简单的加载
<div style="margin-top: 15px;">
  <div v-if="!status" style="font-size: 12px;">本身的内容</div>
  <w-spin v-else v-model="status" :size="groupConfig[sizeStatus]" />
</div>
<br>
- 遮罩的加载
<w-spin tip="加载中..." v-model="status" :size="groupConfig[sizeStatus]" style="margin-top: 15px;">
  <div class="panel">
    <h3>这是标题</h3>
    <p>这是描述</p>
    <p>这是描述</p>
    <p>这是描述</p>
    <p><input aria-label="text" type="text"></p>
    <p>这是描述</p>
    <p>这是描述</p>
  </div>
</w-spin>

## API

### 属性

|属性|说明|类型|是否必须|默认|
|---|---|----|-------|---|
|type|图标类型。如果为空则不显示|String|是|无|
|tip|当作为包裹元素时，可以自定义描述文案|String|否|无|
|size|尺寸设置。可选 large || small|String|否|无|

<script>
import WSpin from '../water/spin/Spin';

export default {
  data() {
    return {
      sizeStatus: 0,
      status: true,
      groupConfig: ['small', '', 'large',],
    }
  },
  methods: {
    changeGroupStatus($event, index) {
      this.sizeStatus = index;
    },
  },
  components: {
    WSpin,
  },
};
</script>
<style lang="scss">
@import '../water/spin/style/spin.scss';
</style>
