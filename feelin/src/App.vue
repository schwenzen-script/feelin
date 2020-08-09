<template>
  <div id="app">
    <header>
      <a href="/">
        <img src="./assets/logo.svg" alt="logo" />
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
                ><img src="./assets/instagram.svg" alt=""
              /></a>
            </li>
            <li>
              <a href="" target="_blank"
                ><img src="./assets/facebook.svg" alt=""
              /></a>
            </li>
            <li>
              <a href="" target="_blank"
                ><img src="./assets/linkedin.svg" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

header {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;

  img {
    width: 80px;
    transition: ease-in-out 0.5s;
  }

  img:hover {
    opacity: 0.8;
  }

  nav {
    display: flex;
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
}

@media (min-width: 1200px) {
  header {
    padding: 40px 90px;
  }
}
</style>
