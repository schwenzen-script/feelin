<template>
  <section class="hamburger-menu">
    <span>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/diensten">Diensten</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div class="hamburger-menu__socials">
        <p>Volg ons via</p>
        <span>
          <a href=""><img src="../assets/facebook.svg" alt="facebook"/></a>
          <a href=""><img src="../assets/linkedin.svg" alt="linkedin"/></a>
          <a href=""><img src="../assets/instagram.svg" alt="instagram"/></a>
        </span>
      </div>
    </span>
  </section>
</template>

<script>
export default {
  name: "HamburgerMenu"
};
</script>

<style lang="scss">
@import "../scss";
</style>
