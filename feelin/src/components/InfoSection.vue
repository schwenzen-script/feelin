<template>
  <span>
    <div v-if="side === true" class="info-section">
      <div class="info-section__context">
        <div class="info-section__context--border"></div>
        <div class="info-section__context--text">
          <h1>{{ title }}</h1>
          <p>{{ context }}</p>
        </div>
      </div>
      <div class="info-section__img">
        <img
          :src="require('@/assets/' + img + '')"
          alt="info-img"
          id="img-right"
        />
      </div>
    </div>
    <div v-if="side === false" class="info-section">
      <div class="info-section__context">
        <div class="info-section__context--border"></div>
        <div class="info-section__context--text">
          <h1>{{ title }}</h1>
          <p>{{ context }}</p>
        </div>
      </div>
      <div class="info-section__img">
        <img
          :src="require('@/assets/' + img + '')"
          alt="info-img"
          id="img-left"
        />
      </div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.info-section {
  justify-content: space-between;
  position: relative;
  margin-bottom: 100px;
  padding: 0px 30px;

  &__context {
    display: flex;
    align-items: center;
    width: 100%;

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

  &__img {
    margin-top: 50px;

    img {
      width: 100%;
    }

    #img-right {
      right: -100px;
    }

    #img-left {
      left: auto;
    }
  }
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .info-section {
    display: flex;
    padding: 0px 100px;

    &__context {
      width: 50%;

      &--border {
        display: flex;
      }

      &--text {
        text-align: left;
      }
    }
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>

<script>
export default {
  name: "InfoSection",
  props: {
    side: Boolean,
    title: String,
    context: String,
    img: String
  }
};
</script>
