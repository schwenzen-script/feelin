<template>
  <div class="attention-card" id="attention-card">
    <span>
      <div class="attention-card__img">
        <img :src="require('@/assets/' + img + '')" alt="attention-img" />
        <h1>{{ title }}</h1>
      </div>
    </span>
  </div>
</template>

<style lang="scss">
.card-appear {
  opacity: 1 !important;
  bottom: 0 !important;
}

.attention-card {
  width: 200px;
  height: 200px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 3px 27px rgba($color: #4e4e4e, $alpha: 0.15);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  opacity: 0;
  position: relative;
  bottom: -100px;
  transition: ease-in-out 0.5s;

  img {
    height: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 12px !important;
    font-weight: 700 !important;
    margin: 0;
  }
}
</style>

<script>
export default {
  name: "AttentionCard",
  props: {
    img: String,
    title: String
  },
  documentElement: "#attention-card",
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
    callbackFunc() {
      let card = document.querySelectorAll(".attention-card");

      if (this.isElementInViewport(card[0])) {
        card[0].classList.add("card-appear");
        setTimeout(() => {
          card[1].classList.add("card-appear");
          setTimeout(() => {
            card[2].classList.add("card-appear");
          }, 300);
        }, 300);
      }
    }
  }
};
</script>
