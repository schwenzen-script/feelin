<template>
  <header class="header">
    <!-- Logo into the header -->
    <a href="/" class="header__img">
      <img src="../assets/logo.png" alt="logo" />
    </a>

    <!-- Navigation into the header -->
    <nav>
      <ul class="header__links">
        <li><a href="/">Home</a></li>
        <li><a href="/diensten">Diensten</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <ul class="header__socials">
        <li>
          <a href="" target="_blank"
            ><img src="../assets/instagram.svg" alt="instagram"
          /></a>
        </li>
        <li>
          <a href="" target="_blank"
            ><img src="../assets/facebook.svg" alt="facebook"
          /></a>
        </li>
        <li>
          <a href="" target="_blank"
            ><img src="../assets/linkedin.svg" alt="linkedin"
          /></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
// Import variables
@import "../scss";
</style>
