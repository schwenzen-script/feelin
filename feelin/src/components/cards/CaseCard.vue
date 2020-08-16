<template>
  <div class="col-md-4">
    <div class="case-card">
      <div class="case-card__img">
        <img :src="require('@/assets/' + img + '')" alt="case-img" />
      </div>
      <div class="case-card__context">
        <h1>
          {{ title }}
        </h1>

        <p>
          {{ context }}
        </p>
      </div>

      <div v-if="online" class="case-card__link">
        <a :href="route" target="_blank">
          <div class="case-card__link--circle"><p>🔗</p></div>
          <p class="case-card__link--text">Check et ut!</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseCard",
  props: {
    title: String,
    context: String,
    img: String,
    online: Boolean,
    route: String
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
