<template>
  <span>
    <div class="info-section" id="info-section">
      <div class="info-section__context">
        <div class="info-section__context--border"></div>
        <div class="info-section__context--text">
          <h1>{{ title }}</h1>
          <p>{{ context }}</p>
        </div>
      </div>
      <div class="info-section__img">
        <div class="info-section__img--background">
          <img :src="require('@/assets/' + img + '')" alt="info-img" />
        </div>
      </div>
    </div>
  </span>
</template>

<style lang="scss">
@import "../../scss";
</style>

<script>
export default {
  name: "InfoSection",
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
      let items = document.querySelectorAll(".info-section");
      for (var i = 0; i < items.length; i++) {
        if (this.isElementInViewport(items[i])) {
          const context = items[i].children.item(0);
          const img = items[i].children.item(1);

          context.classList.add("context-appear");
          img.classList.add("img-appear");
        }
      }
    }
  }
};
</script>
