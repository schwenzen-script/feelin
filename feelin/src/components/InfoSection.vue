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
            <img
              :src="require('@/assets/' + img + '')"
              alt="info-img"
            />        
        </div>
      </div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.context-appear {
  left: 0 !important;
  opacity: 1 !important;
}

.img-appear {
  right: 0 !important;
  opacity: 1 !important;
}

.info-section {
  justify-content: space-between;
  margin-bottom: 100px;
  padding: 0px 30px;
  position: relative;

  &__img {
    height: 425px;
    width: 100%;
    margin-top: 30px;
    position: relative;
    right: -150px;
    opacity: 0;
    transition: ease-in-out 1.5s;

    &--background {
      background: #f5f5f5;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
      }
    }
  }

  &__context {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    left: -150px;
    opacity: 0;
    transition: ease-in-out 1.5s;

    &--border {
      width: 3px;
      background: #ef2e2e;
      height: 270px;
      border-radius: 10px;
      display: none;
    }

    &--text {
      text-align: center;

      h1 {
        font-family: Poppins, sans-serif;
        color: #484848;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 20px;
      }

      p {
        font-family: Open Sans, sans-serif;
        color: #484848;
        font-weight: 200;
        font-size: 13px;
      }
    }
  }
}

@media (min-width: 992px) {
    .info-section {
    display: flex;
    padding: 0px 100px;

    &__img {
      width: 50%;
      padding-left: 30px;
      margin-top: 0;

      &--background {
        width: 100%;
      }
    }

    &__context {
      width: 50%;
      padding-right: 30px;

      &--border {
        display: flex;
        margin-right: 50px;
        width: 0.2vw;
      }

      &--text {
        text-align: left;

        h1 {
          font-size: 2vw;
        }

        p {
          font-size: 1vw;
        }
      }
    }
  }
}
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
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  data () {
    return {
      offsetTop: 0
    }
  },
  watch: {
    offsetTop () {
       this.callbackFunc()
    }
  },
  methods: {
    onScroll () {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    isElementInViewport(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
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
