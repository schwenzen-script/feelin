<template>
  <header class="header" id="header">
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
    <hamburger-button @click.native="toggleHamburger" />
    <hamburger-menu />
  </header>
</template>

<script>
import HamburgerButton from "../components/buttons/HamburgerButton";
import HamburgerMenu from "../partials/HamburgerMenu";

export default {
  name: "Header",
  documentElement: "#header",
  components: {
    HamburgerButton,
    HamburgerMenu
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      offsetTop: 0,
      visible: false
    };
  },
  watch: {
    fixHeader() {
      this.onscroll();
    }
  },
  methods: {
    toggleHamburger() {
      const hamburgerButton = document.querySelectorAll(".hamburger-button")[0];
      const hamburgerMenu = document.querySelectorAll(".hamburger-menu")[0];
      const header = document.querySelectorAll(".header")[0];

      this.visible = !this.visible;

      if (this.visible === true) {
        hamburgerButton.classList.add("close");
        header.classList.add("show-hamburger");
        hamburgerMenu.style.display = "flex";

        setTimeout(() => {
          hamburgerMenu.classList.add("show-hamburger-menu");
        }, 200);
      } else {
        hamburgerButton.classList.remove("close");
        header.classList.remove("show-hamburger");
        hamburgerMenu.classList.remove("show-hamburger-menu");

        setTimeout(() => {
          hamburgerMenu.style.display = "none";
        }, 200);
      }
    },
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      let header = document.getElementById("header");

      if (this.offsetTop > 50) {
        header.classList.add("header-dissapear");
      } else {
        header.classList.remove("header-dissapear");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// Import variables
@import "../scss";
</style>
