<template>
  <div class="review-card" id="review-card">
    <div class="review-card__title">
      <h1>{{ name }}</h1>
      <img src="../../assets/check.svg" alt="check" />
    </div>
    <div class="review-card__location">
      <p>{{ city }}, {{ country }}</p>
    </div>
    <div class="review-card__stars">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.966"
        height="28.5"
        viewBox="0 0 29.966 28.5"
        class="review-card__stars--star"
      >
        <path
          id="star"
          d="M14.983,0l4.63,9.381,10.353,1.5-7.491,7.3L24.243,28.5l-9.26-4.868L5.723,28.5,7.491,18.188,0,10.886l10.353-1.5Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.966"
        height="28.5"
        viewBox="0 0 29.966 28.5"
        class="review-card__stars--star"
      >
        <path
          id="star"
          d="M14.983,0l4.63,9.381,10.353,1.5-7.491,7.3L24.243,28.5l-9.26-4.868L5.723,28.5,7.491,18.188,0,10.886l10.353-1.5Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.966"
        height="28.5"
        viewBox="0 0 29.966 28.5"
        class="review-card__stars--star"
      >
        <path
          id="star"
          d="M14.983,0l4.63,9.381,10.353,1.5-7.491,7.3L24.243,28.5l-9.26-4.868L5.723,28.5,7.491,18.188,0,10.886l10.353-1.5Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.966"
        height="28.5"
        viewBox="0 0 29.966 28.5"
        class="review-card__stars--star"
      >
        <path
          id="star"
          d="M14.983,0l4.63,9.381,10.353,1.5-7.491,7.3L24.243,28.5l-9.26-4.868L5.723,28.5,7.491,18.188,0,10.886l10.353-1.5Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29.966"
        height="28.5"
        viewBox="0 0 29.966 28.5"
        class="review-card__stars--star"
      >
        <path
          id="star"
          d="M14.983,0l4.63,9.381,10.353,1.5-7.491,7.3L24.243,28.5l-9.26-4.868L5.723,28.5,7.491,18.188,0,10.886l10.353-1.5Z"
        />
      </svg>
    </div>
    <div class="review-card__content">
      <h1>"{{ title }}"</h1>
      <p>{{ review }}</p>
      <p class="review-card__content--more" v-on:click="showMore">
        Lees meer...
      </p>
      <p class="review-card__content--less" v-on:click="showLess">
        Lees minder...
      </p>
      <div class="review-card__content--gradient"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../scss";
</style>

<script>
export default {
  name: "ReviewCard",
  props: {
    name: String,
    title: String,
    city: String,
    country: String,
    stars: Number,
    review: String,
    index: Number
  },
  documentElement: "#review-card",
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
      const cards = document.querySelectorAll(".review-card");

      if (this.isElementInViewport(cards[0])) {
        cards[0].classList.add("review-card--appear");
        setTimeout(() => {
          cards[1].classList.add("review-card--appear");
          setTimeout(() => {
            cards[2].classList.add("review-card--appear");
          }, 500);
        }, 500);
        for (let i = 0; i < cards.length; i++) {
          const starContainer = cards[i].children[2];
          for (let j = 0; j < Number(this.stars); j++) {
            const oneStar = starContainer.children[j];
            oneStar.classList.add("filled");
          }
        }
      }
    }
  }
};
</script>
