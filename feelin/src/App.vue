<template>
  <div id="app">
    <header-feelin></header-feelin>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
import HeaderFeelin from "./components/Header";

export default {
  components: {
    HeaderFeelin
  }
};
</script>
