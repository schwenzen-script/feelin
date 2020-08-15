<template>
  <div class="row service-section">
    <div class="col-12 col-md-6">
      <div class="service-section__context">
        <div class="service-section__context--border"></div>
        <div class="service-section__context--text">
          <h1>{{ title }}</h1>
          <p>{{ context }}</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="service-section__img"></div>
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
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
