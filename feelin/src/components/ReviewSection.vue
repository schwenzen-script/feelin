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
.home__reviews {
  margin-top: 200px;
  &--title {
    display: flex;

    h1 {
      width: 100%;
      font-family: Poppins, sans-serif;
      color: #484848;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }
  }

  &--cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 50px;
  }
}

@media (min-width: 992px) {
  .home__reviews {
    padding: 0 100px;
    &--title {
      display: flex;
      align-items: center;

      span {
        width: 1px;
        background: #ef2e2e;
        height: 270px;
        border-radius: 10px;
        margin-right: 50px;
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
