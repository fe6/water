# Loadbar
> Create a loading progress bar that displays page loads, asynchronous requests, file uploads, and so on.

## Code Demo

***output***
<br>
<br>
<w-button prefix="demo" v-bind:click="start">Start</w-button>
<w-button prefix="demo" type="primary" v-bind:click="finish">Finish</w-button>
<w-button prefix="demo" type="danger" v-bind:click="fail">Error</w-button>
<w-button prefix="demo" type="dash" v-bind:click="update">Update</w-button>

***input***
``` vue
<template>
  <div>
    <w-button prefix="demo" v-bind:click="start">Start</w-button>
    <w-button prefix="demo" type="primary" v-bind:click="finish">Finish</w-button>
    <w-button prefix="demo" type="danger" v-bind:click="fail">Error</w-button>
    <w-button prefix="demo" type="dash" v-bind:click="update">Update</w-button>
  </div>
</template>
<script>
  export default {
    methods: {
      start () {
        this.$Loading.start();
      },
      finish () {
        this.$Loading.finish();
      },
      error () {
        this.$Loading.error();
      },
      update () {
        this.$Loading.update(10);
      }
    }
  }
</script>
```

## Description
The Loadbar will only create one globally, so methods called anywhere will control the same component. The main usage scenarios are route switching and Ajax, because neither of them can get accurate progress, Loadbar will simulate the progress, of course, you can also pass an exact progress through the `update()` method, such as when the file is uploaded. Very useful, see [API](#api).

``` js
// Partial code omitting
import water from '@fe6/water';

Vue.use(water);

water.WLoadbar.init();

router.beforeEach((to, from, next) => {
  water.WLoadbar.start();
  next();
});

router.afterEach(route => {
  water.WLoadbar.finish();
});
```

``` js
// Take jQuery's Ajax as an example, some code is omitted.
import $ from 'jquery';
export default {
  methods: {
    getData () {
      // Progress bar starts
      this.$WLoadbar.start();
      $.ajax({
        url: '/api/someurl',
        type: 'get',
        success: () => {
          // Progress bar success end
          this.$WLoadbar.finish();
        }
        error: () => {
          // Progress bar failed end
          this.$WLoadbar.fail();
        }
      });
    }
  }
}
```

## API

Use the component by calling the following methods directly:

``` js
this.$Loading.init({
  height: '2px',
  color: '#1996f9',
  failedColor: '#ff0000',
  duration: 3000,
})
this.$Loading.start()
this.$Loading.finish()
this.$Loading.fail()
this.$Loading.update(percent)
```

The above method implicitly creates and maintains the Vue component. The function and parameters are as follows:

|Method Name|Description|Parameter|
|---|---|---|---|
|init|Initialization. Can be configured with some progress bars.|Have|
|finish|End the progress bar and automatically complete the remaining progress|-|
|fail|End the progress bar with the wrong type and automatically complete the remaining progress.|-|
|update|Accurately load to the specified progress, in % |Specified progress percentage|

In addition, the parameters of the init method are described as follows:

|Property|Description|Type|Required|Default|
|---|---|---|---|---|
|height|Progress bar height, the unit must be taken|String|No|'2px'|
|color|Progress bar color|String|No|'#1996f9'|
|failedColor|Progress bar color when it fails|String|No|'#ff0000'|
|duration|Progress bar enhancement parameters|Number|No|3000|

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
