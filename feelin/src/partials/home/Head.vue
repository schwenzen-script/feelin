<template>
  <section
    class="home__head"
    :style="{
      'background-image': 'url(' + require('../../assets/background.svg') + ')'
    }"
  >
    <span class="container">
      <div class="home__head--welcome fadeIn">
        <h1>
          {{ title }}
        </h1>
        <span>
          <p>
            {{ text }}
          </p>
        </span>
        <div class="home__head--welcome--redirect">
          <a href="/contact">
            Contacteer ons
          </a>
          <span></span>
        </div>
        <div class="home__head--cards">
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
</template>

<script>
// Importing some cards
import AttentionCard from "../../components/cards/AttentionCard";

export default {
  name: "Head",
  props: {
    title: String,
    text: String
  },
  components: {
    AttentionCard
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss";
</style>
