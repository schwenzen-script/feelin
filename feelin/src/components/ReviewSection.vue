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
        review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem!"
        v-bind:stars="5"
      />
      <review-card
        name="Zeg Ja!"
        title="Lorem ipsum hé!"
        city="Kortrijk"
        country="België"
        review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem!"
        v-bind:stars="3"
      />
      <review-card
        name="Zeg Ja!"
        title="Lorem ipsum hé!"
        city="Kortrijk"
        country="België"
        review="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus odit vitae eum non. Similique debitis ipsam praesentium explicabo ducimus voluptas accusamus neque totam iste molestias repellat, libero mollitia autem!"
        v-bind:stars="5"
      />
    </div>
  </div>
</template>

<style lang="scss">
.home__reviews {
  margin-top: 200px;
  &--title {
    display: flex;

    h1 {
      font-family: Poppins, sans-serif;
      color: #484848;
      font-size: 30px;
      font-weight: bold;
    }
  }

  &--cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
  }
}

@media (min-width: 992px) {
  .home__reviews {
    padding: 0 100px;
    &--title {
      display: flex;
      align-items: center;

      span {
        width: 3px;
        background: #ef2e2e;
        height: 270px;
        border-radius: 10px;
        margin-right: 30px;
      }
    }
  }
}
</style>

<script>
import ReviewCard from "./ReviewCard";

export default {
  name: "ReviewSection",
  components: {
    ReviewCard
  }
};
</script>
