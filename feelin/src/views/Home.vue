<template>
  <div class="home">
    <section class="home__landing">
      <span>
        <div class="home__landing--welcome">
          <h1>Let's get digital!</h1>
          <span>
            <p>
              Bits and bytes. That's the future. Daar helpen wij gerust een
              handje in mee. We bundelen onze sterktes om voor u, als klant, een
              vernieuwend en mooi product af te leveren. Een website, een app,
              ... Het aanbod is zo groot!
            </p>
          </span>

          <div class="home__landing--welcome--redirect">
            <a href="/contact">Contacteer ons</a>
            <span></span>
          </div>

          <div class="home__landing--cards">
            <attention-card
              img="eyes.svg"
              title="Let's get visible!"
            ></attention-card>
            <attention-card
              img="profit.svg"
              title="Let's get profitable!"
            ></attention-card>
            <attention-card
              img="connect.svg"
              title="Let's get connected!"
            ></attention-card>
          </div>
        </div>
      </span>
    </section>

    <section class="home__info">
      <info-section
        v-bind:side="true"
        img="pc.svg"
        title="Sterk digitaal werk"
        context="De wereld verandert snel. Zeer snel. We kunnen dan ook niet op onze luie kont blijven zitten. Wij moeten mee! Door onze gevariëerde kennis binnen de technologische wereld kunnen wij heel wat innoverende en sterke websites leveren."
      ></info-section>
      <info-section
        v-bind:side="false"
        img="phone.svg"
        title="Mobile, that's the way!"
        context="De smartphone. Een zeer jong product dat in een zeer snelle tijdspanne de wereld overnam. Het is bijna ondenkbaar om gen smartphone op zak te hebben. Wat deze smartphone uniek maakt, zijn zijn applicatie's. Laat dat nu ook één van onze troeven zijn! App's op maat!"
      ></info-section>
    </section>

    <section class="home__chat"></section>

    <section class="home__reviews"></section>
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
    padding-top: 150px;

    &--welcome {
      text-align: center;

      h1 {
        font-family: Poppins, sans-serif;
        color: #484848;
        font-size: 40px;
        font-weight: 900;
      }

      span {
        max-width: 400px;
        display: inline-block;

        p {
          font-family: Open Sans, sans-serif;
          color: #484848;
          font-size: 13px;
          font-weight: 300;
          margin-top: 20px;
        }
      }

      &--redirect {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;

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

    &--cards {
      display: none;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  &__info {
    margin-top: 200px;
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .home {
    &__landing {
      &--cards {
        display: flex;
      }
    }
  }
}

@media (min-width: 1200px) {
}
</style>

<script>
import AttentionCard from "../components/AttentionCard";
import InfoSection from "../components/InfoSection";

export default {
  name: "Home",
  components: {
    AttentionCard,
    InfoSection
  }
};
</script>
