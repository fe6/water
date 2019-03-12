# Spin 加载中

## 基本

<br>
<w-spin :value="true" type="loading1" />

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
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
@import '../water/spin/style/spin.scss';
</style>
