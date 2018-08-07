# Radio
> When the form is submitted, several options can only be used when one is selected.

## When To Use

- Used to select a single state among multiple alternatives.
- The difference between Select and Select is that all Radio options are visible by default, making it easy for users to choose between comparisons, so the options should not be too much.

## Basic usage

***output***

<w-radio-group>
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group>
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>
```

## defaultChecked
> Add the defaultChecked property to set the default selection.

***output***

<w-radio-group :defaultChecked="false">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group :defaultChecked="false">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>
```

## mode
> Add the mode attribute to set up vertical layout

***output***

<w-radio-group mode="vertical">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group mode="vertical">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>
```

## v-model
> Add v-model property to set up bidirectional data

***output***

<p>Current: {{more}}</p>
<w-radio-group v-model="more">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group v-model="more">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
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

## More input
> Judging by v-model

***output***

<p>Current {{more}}</p>
<w-radio-group v-model="more">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1" aria-label="United States">United States</w-radio>
  <w-radio :key="2">
    <span class="input-more-text">More</span>
    <input type="text" class="input-more" v-if="more === 2">
  </w-radio>
</w-radio-group>

***input***

``` vue
<w-radio-group v-model="more">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1" aria-label="United States">United States</w-radio>
  <w-radio :key="2">
    <span class="input-more-text">More</span>
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

## disabled
> Add the disabled attribute to set the disable

***output***

<w-radio-group :disabled="disabled">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? 'Disable' : 'Available'}}</w-button>

***input***

``` vue
<w-radio-group :disabled="disabled">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? 'Disable' : 'Available'}}</w-button>
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


## Disable one usage
> Add the disabled attribute to set one of them to disable

***output***

<w-radio-group>
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1" :disabled="disabled">United States</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? 'Disable' : 'Available'}}One of the</w-button>

***input***

``` vue
<w-radio-group>
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1" :disabled="disabled">United States</w-radio>
</w-radio-group>
<br>
<w-button @click="changeDisabledStatus">{{disabled ? 'Disable' : 'Available'}}One of the</w-button>
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

## loading
> Add the loading property to match the before interceptor

***output***

<w-radio-group :before="beforeLoading" :loading="loading">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
</w-radio-group>
<br>

***input***

``` vue
<w-radio-group :loading="loading">
  <w-radio :key="0">China</w-radio>
  <w-radio :key="1">United States</w-radio>
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

### w-radio

#### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|name|The name attribute of input[type="radio"], prioritize the parent node's name setting|String|No|wradio|
|key|Index of each item|Number|String|Yes|-|
|disabled|The button is not available, the click event is invalid, and the style changes.|Boolean|No|-|

### w-radio-group

#### Props

|Property|Description|Type|Required|Default|
|---|---|----|-------|---|
|name|The name attribute of input[type="radio"]|String|No|wradio|
|on|Default selected index|Number|No|0|
|defaultChecked|Set default selection|Boolean|No|true|
|mode|set horizontal or vertical|Boolean|No|horizontal|
|v-model|Two-way binding|Number|No|-|
|before|Trigger before the change, return the Promise object|Function|No|function() {return new Promise((resolve, reject) => {resolve();});}|
|change|Triggered when changing. Will return `Event object`, `index`|Function|No|()=>{}|
|prefix|Style prefix|String|No|-|
|disabled|The button is not available, the click event is invalid, and the style changes.|Boolean|No|-|
|loading|The button is in the wait state of loading, the click event is invalid, and the style is also changed.|Boolean|No|-|

#### Methods

|Name|Description|Return Value|
|-----|---|-----|
|change|Triggered when changing|`Event object`, `index`|

<script>
import WRadio from '../water/radio/Radio';
import WRadioGroup from '../water/radio/RadioGroup';
import WButton from '../water/button/Button';


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
          if (confirm("Are you sure to choose?")) {
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
@import '../water/button/style/button.scss';
@import '../water/radio/style/radio.scss';
@import '../water/radio/style/radiogroup.scss';

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
