<template>
  <div id="app">
    <!-- Header inserted here! -->
    <header-feelin />
    <!-- Main content -->
    <router-view />
    <!-- Footer inserted here! -->
    <footer-feelin />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>

<script>
// Including footer and header into our website
import HeaderFeelin from "./partials/Header";
import FooterFeelin from "./partials/Footer";

export default {
  components: {
    HeaderFeelin,
    FooterFeelin
  }
};
</script>
