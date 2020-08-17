<template>
  <div class="row service-section">
    <div class="col-12 col-lg-6">
      <div class="service-section__context">
        <div class="service-section__context--border"></div>
        <div class="service-section__context--text">
          <h1>{{ title }}</h1>
          <p>{{ context }}</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="service-section__img">
        <img :src="require('@/assets/' + img + '')" alt="service-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSection",
  props: {
    title: String,
    context: String,
    img: String
  },
  documentElement: "#info-section",
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
      let items = document.querySelectorAll(".service-section");
      for (var i = 0; i < items.length; i++) {
        if (this.isElementInViewport(items[i])) {
          const context = items[i].children.item(0).children.item(0);
          const img = items[i].children.item(1).children.item(0);

          context.classList.add("context-appear");
          img.classList.add("img-appear");
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
