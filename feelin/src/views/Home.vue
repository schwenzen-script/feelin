<template>
  <div class="home">
    <section class="home__landing">
      <span>
        <div class="home__landing--welcome">
          <h1>Let's get digital!</h1>
          <p>
            Bits and bytes. That's the future. Daar helpen wij gerust een handje
            in mee. We bundelen onze sterktes om voor u, als klant, een
            vernieuwend en mooi product af te leveren. Een website, een app, ...
            Het aanbod is zo groot!
          </p>

          <div class="home__landing--welcome--redirect">
            <a href="/contact">Contacteer ons</a>
            <span></span>
          </div>
        </div>

        <div class="home__landing--cards"></div>
      </span>
    </section>
  </div>
</template>

<style lang="scss">
.home {
  min-height: 100vh;
  width: 100%;

  &__landing {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/background.svg");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;

    &--welcome {
      max-width: 400px;
      text-align: center;

      h1 {
        font-family: Poppins, sans-serif;
        color: #484848;
        font-size: 40px;
        font-weight: 900;
      }

      p {
        font-family: Open Sans, sans-serif;
        color: #484848;
        font-size: 11px;
        font-weight: 300;
        margin-top: 20px;
      }

      &--redirect {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: #ef2e2e;
          font-family: Poppins, sans-serif;
          font-weight: 700;
          font-size: 13px;
        }

        a:hover {
          color: #ef2e2e;
          opacity: 0.8;
          text-decoration: none;
        }

        a:hover + span {
          width: 30px;
        }

        span {
          width: 20px;
          height: 1px;
          background-color: #484848;
          margin-left: 10px;
          transition: ease-in-out 0.3s;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Home"
};
</script>
