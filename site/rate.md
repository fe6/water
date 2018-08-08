# Rate
> Rate component.

## When To Use

- Show evaluation.
- A quick rating operation on something.

## Basic usage

***output***
<br>
<w-rate />

***input***
``` vue
<w-rate />
```

## Half star

***output***
<br>
<w-rate half v-model="halfRate" />

***input***

``` vue
<w-rate half v-model="halfRate" />
```

``` js
import WRate from './Rate';

export default {
  data() {
    return {
      halfRate: 1.5,
    };
  },
  components: {
    WRate,
  },
};
```

## Other characters
> You can replace stars with other characters, such as letters, numbers, font icons, or even Chinese.

***output***
<br>
<w-rate character="Water" />

***input***

``` vue
<w-rate character="Water" />
```

## Change Value
> Not only can it be selected, but it can be modified later.

***output***
<br>
<w-button size="small" v-bind:click="click">The current number is </w-button> -> {{number}} -> The corresponding rating is ->
<w-rate character="Water" v-model="number"></w-rate>

***input***

``` vue
<w-button size="small" v-bind:click="click">The current number is </w-button> -> {{number}} -> The corresponding rating is ->
<w-rate character="Water" v-model="number"></w-rate>
```

``` js
import WRate from './Rate';
import WButton from '../button/Button';

export default {
  data() {
    return {
      number: 3,
    };
  },
  methods: {
    click() {
      this.number = Math.floor((Math.random() * 5) + 1);
    },
  },
  components: {
    WRate,
    WButton,
  },
};
```

## API

### Props

|Property|Description|Type|Required|Default|
|---|----|---|-------|-----|
|count|Star total|Number|Yes|-|
|half|Whether semi-selection is allowed|Boolean|No|false|
|color|Highlight color|String|No|'#fadb14'|
|character|Custom characters, support strings, html format not supported|String|No|-|
|icon|Custom icon type|String|No|star|
|prefix|Style prefix|String|No|-|
|change|Callback when selecting|Function(value: number)|No|() => {}|
|hover|Callback of numerical changes as the mouse passes|Function(value: number)|No|() => {}|

### Methods

|Name|Description|Return Value|
|-----|---|-----|
|change|Callback when selecting|Currently selected number|
|hover|Callback of numerical changes as the mouse passes|Currently selected number|

<script>
import WRate from '../water/rate/Rate';
import WButton from '../water/button/Button';

export default {
  data() {
    return {
      halfRate: 1.5,
      number: 3,
    };
  },
  methods: {
    click() {
      this.number = Math.floor((Math.random() * 5) + 1);
    },
  },
  components: {
    WRate,
    WButton,
  },
};
</script>
<style lang="scss">
$font-path: '../water/font/';
@import '../water/button/style/button.scss';
@import '../water/icon/style/icon.scss';
@import '../water/rate/style/rate.scss';
</style>
