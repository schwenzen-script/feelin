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
@import "../../scss";
</style>

<script>
export default {
  name: "AttentionCard",
  props: {
    img: String,
    title: String
  }
};
</script>
