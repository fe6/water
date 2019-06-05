# Icon 图标
> Vue.js 的 语义化的矢量图形。

## 如何使用
> 图片任意格式，任意标签展示，内置 loading

<w-icon spin />

<br>
<br>

## 自定义 icon

<p>
  <w-icon>
    <svg t="1553777155143" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1304" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M1009.562 454.103c-72.264 88.023-200.049 233.339-200.049 233.339s20.9 159.55 32.614 268.534c5.09 55.51-34.928 79.513-80.25 57.876-86.242-43.325-217.478-110.448-247-125.573-30.044 14.97-162.6 80.988-249.733 124.211-45.844 21.586-86.343-2.416-81.193-57.825 11.869-108.82 32.983-268.216 32.983-268.216S87.685 541.44 14.582 453.529c-25.836-31.928-9.247-77.311 41.697-85.657 103.885-19.64 264.909-50.944 264.909-50.944s88.074-162.335 143.8-261.755C495.657-5.325 516.874 1.66 520.5 3.441c9.452 3.256 24.371 15.022 43.848 51.783 55.091 99.574 142.172 262.124 142.172 262.124s159.13 31.304 261.806 50.995c50.33 8.397 66.765 53.832 41.237 85.76z" fill="" p-id="1305"></path></svg>
  </w-icon>
</p>

<br>
<br>

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|spin|是否有旋转动画|Boolean|否|无|
|prefix|样式的前缀|String|否|无|

<script>
import WIcon from '../water/icon/Icon';

export default {
  components: {
    WIcon,
  },
};
</script>
<style lang="scss">
@import '../water/icon/style/icon.scss';
</style>