<template>
  <div id="app">
    <header-feelin />
    <router-view />
    <footer-feelin />
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
import FooterFeelin from "./components/Footer";

export default {
  components: {
    HeaderFeelin,
    FooterFeelin
  }
};
</script>
