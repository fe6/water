<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'Badge'}">Badge</router-link> |
      <router-link :to="{name: 'Loadbar'}">Loadbar</router-link> |
      <router-link :to="{name: 'Grid'}">Grid</router-link> |
      <router-link :to="{name: 'Icon'}">Icon</router-link> |
      <router-link :to="{name: 'Affix'}">Affix</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

table {
  margin: 0 auto;
}
</style>
