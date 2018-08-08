# Icon
> Semantic vector graphics.

## How To Use

Use tag to create an icon and set its type in the type prop, for example:
```` vue
<w-icon type="forward" />
````

## List of icons

|Example|Type|Code|
|---|---|---|
|<w-icon type="forward" />|forward|`<w-icon type="forward" />`|
|<w-icon type="back" />|back|`<w-icon type="back" />`|
|<w-icon type="loading1" />|loading1|`<w-icon type="loading1" />`|
|<w-icon type="loading2" />|loading2|`<w-icon type="loading2" />`|
|<w-icon type="loading3" />|loading3|`<w-icon type="loading3" />`|
|<w-icon type="loading4" />|loading4|`<w-icon type="loading4" />`|
|<w-icon type="heart" />|heart|`<w-icon type="heart" />`|
|<w-icon type="star" />|star|`<w-icon type="star" />`|

## Local deployment

he icon is hosted by default on [iconfont.cn] (http://iconfont.cn) and is accessible by default public network. For local deployment, please refer to [Example] (https://github.com/fe6/vue-icon/tree/master/example).

## API

Since the icon font is essentially text, you can use `style` and `class` to set the size and color of the icon.

<p>
  <w-icon type="loading1" spin />
</p>

|Property|Description|Type|Required|Default|
|---|----|---|-------|-----|
|type|Icon type. If it is empty, it will not be displayed.|String|Yes|-|
|spin|Is there a rotation animation?|Boolean|No|-|
|prefix|Style prefix|String|No|-|

<script>
import WIcon from '../water/icon/Icon';

export default {
  components: {
    WIcon,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/icon/style/icon.scss';
</style>
