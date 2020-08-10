<template>
  <header id="header" :class="{ 'header-gone': !showNavbar }">
    <a href="/" class="header__img">
      <img src="../assets/logo.svg" alt="logo" />
    </a>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Diensten</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div class="header__socials">
        <ul>
          <li>
            <a href="" target="_blank"
              ><img src="../assets/instagram.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="" target="_blank"
              ><img src="../assets/facebook.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="" target="_blank"
              ><img src="../assets/linkedin.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header-gone {
  top: -200px;
}

header {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  transition: ease-in-out 0.3s;
  padding: 30px 20px;

  .header__img {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 80px;
      transition: ease-in-out 0.5s;
    }

    img:hover {
      opacity: 0.8;
    }
  }

  nav {
    display: none;
    justify-content: flex-end;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
        margin-right: 60px;

        a {
          color: #989898;
          font-family: Poppins, sans-serif;
          font-weight: 100;
          font-size: 15px;
        }

        a:hover {
          color: #989898;
          opacity: 0.8;
          text-decoration: none;
        }
      }
    }

    .header__socials {
      background: #f5f5f5;
      border-radius: 30px;
      padding: 5px 15px;

      ul {
        li {
          margin: 0px 2px;
          a {
            img {
              width: 17px;
              height: 17px;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  header {
    .header__img {
      display: block;
    }

    nav {
      display: flex;
    }
  }
}

@media (min-width: 1200px) {
  header {
    padding: 40px 90px;
  }
}
</style>

<script>
export default {
  name: "HeaderFeelin",
  documentElement: "#header",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 20) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>
