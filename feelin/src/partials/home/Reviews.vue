<template>
  <div class="home__reviews">
    <div class="home__reviews--title">
      <span></span>
      <h1>Nog niet overtuigd?<br />Luister naar onze klanten!</h1>
    </div>
    <div class="home__reviews--cards">
      <review-card
        name="Zeg Ja!"
        title="Lorem ipsum hé!"
        city="Kortrijk"
        country="België"
        review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem!"
        v-bind:stars="5"
        v-bind:index="0"
      />
      <review-card
        name="Zeg Ja!"
        title="Lorem ipsum hé!"
        city="Kortrijk"
        country="België"
        review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem!"
        v-bind:stars="3"
        v-bind:index="1"
      />
      <review-card
        name="Zeg Ja!"
        title="Lorem ipsum hé!"
        city="Kortrijk"
        country="België"
        review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem!"
        v-bind:stars="5"
        v-bind:index="2"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "../../scss";
</style>

<script>
import ReviewCard from "../../components/cards/ReviewCard";

export default {
  name: "ReviewSection",
  components: {
    ReviewCard
  }
};
</script>
