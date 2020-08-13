<template>
  <div class="review-card" id="review-card">
    <div class="review-card__title">
      <h1>{{ name }}</h1>
      <img src="../assets/check.svg" alt="check" />
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
.review-card-reading {
  height: auto !important;
  overflow: auto !important;

  .review-card__content {
    &--more {
      display: none !important;
    }

    &--less {
      display: flex !important;
    }

    &--gradient {
      display: none !important;
    }
  }
}

.review-card--appear {
  bottom: 0 !important;
  opacity: 1 !important;
}

.review-card {
  background-color: #fff;
  width: 400px;
  height: 365px;
  overflow: hidden;
  box-shadow: 0px 3px 27px rgba($color: #a2a2a2, $alpha: 0.25);
  padding: 40px 30px;
  margin: 10px 0px;
  position: relative;
  transition: ease-in-out 0.5s;
  opacity: 0;
  bottom: -100px;

  &__title {
    display: flex;
    align-items: center;

    h1 {
      font-family: Poppins, sans-serif;
      font-size: 16px;
      color: #484848;
      font-weight: bold;
      margin: 0 5px 0 0;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }

  &__location {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    color: #989898;
    font-weight: 200;
  }

  &__stars {
    display: flex;
    margin-top: 10px;

    &--star {
      width: 30px;
      height: 30px;
      margin-right: 5px;
      fill: #f5f5f5;
      transition: ease-in-out 0.5s;
    }

    &--star.filled {
      fill: #ffde27 !important;
    }
  }

  &__content {
    margin-top: 50px;
    h1 {
      font-family: Poppins, sans-serif;
      font-size: 16px;
      color: #484848;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-family: Open Sans, sans-serif;
      font-size: 12px;
      color: #484848;
      font-weight: 200;
    }

    &--more {
      font-weight: bold !important;
      position: absolute;
      bottom: 0;
      left: 20px;
      cursor: pointer;
      color: #4590db !important;
      z-index: 5;
    }

    &--less {
      font-weight: bold !important;
      position: absolute;
      bottom: 0;
      left: 20px;
      cursor: pointer;
      color: #db4545 !important;
      z-index: 5;
      display: none;
    }

    &--gradient {
      height: 100px;
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(244, 244, 244, 0) 0%,
        rgba(255, 255, 255, 1) 67%
      );
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 4;
    }
  }
}
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
