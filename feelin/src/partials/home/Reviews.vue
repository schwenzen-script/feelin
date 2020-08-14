<template>
  <div class="home__reviews" id="reviews">
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
  },
  documentElement: "#reviews",
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      offsetTop: 0
    };
  },
  watch: {
    offsetTop() {
      this.callbackFunc();
    }
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    isElementInViewport(elm) {
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    },
    showMore() {
      const card = document.querySelectorAll(".review-card")[this.index];
      card.classList.add("review-card-reading");
    },
    showLess() {
      const card = document.querySelectorAll(".review-card")[this.index];
      card.classList.remove("review-card-reading");
    },
    callbackFunc() {
      const title = document.getElementsByClassName("home__reviews--title")[0];
      if (this.isElementInViewport(title)) {
          title.classList.add("title-appear");
      };
    },
  },
};
</script>
