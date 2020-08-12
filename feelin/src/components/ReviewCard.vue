<template>
  <div class="review-card">
    <div class="review-card__title">
      <h1>{{ name }}</h1>
      <img src="../assets/check.svg" alt="check" />
    </div>
    <div class="review-card__location">
      <p>{{ city }}, {{ country }}</p>
    </div>
    <div class="review-card__stars"></div>
    <div class="review-card__content">
      <h1>{{ title }}</h1>
      <p>{{ review }}</p>
      <p class="review-card__content--more">Lees meer...</p>
      <div class="review-card__content--gradient"></div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  name: "ReviewCard",
  props: {
    title: String,
    city: String,
    country: String,
    stars: Number,
    review: String
  }
};
</script>
