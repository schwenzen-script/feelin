<template>
  <div class="col-md-4">
    <div class="case-card">
      <div class="case-card__img">
        <img src="" alt="" />
      </div>
      <div class="case-card__context">
        <h1>
          {{ title }}
        </h1>

        <p>
          {{ context }}
        </p>
      </div>

      <div class="case-card__link">
        <div class="case-card__link--circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseCard"
};
</script>

<style lang="scss">
@import "../../scss";
</style>
