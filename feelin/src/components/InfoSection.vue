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
      <div class="info-section__img">
        <img
          :src="require('@/assets/' + img + '')"
          alt="info-img"
          id="img-left"
        />
      </div>
      <div class="info-section__context">
        <div class="info-section__context--border"></div>
        <div class="info-section__context--text">
          <h1>{{ title }}</h1>
          <p>{{ context }}</p>
        </div>
      </div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.info-section {
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  position: relative;
  margin-bottom: 50px;

  &__context {
    display: flex;
    align-items: center;
    width: 50%;
    &--border {
      width: 3px;
      background: #ef2e2e;
      height: 270px;
      border-radius: 10px;
    }

    &--text {
      margin-left: 30px;

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
    width: 50%;
    height: 425px;

    img {
      height: 425px;
      position: absolute;
    }

    #img-right {
      right: -100px;
    }

    #img-left {
      left: auto;
    }
  }
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
