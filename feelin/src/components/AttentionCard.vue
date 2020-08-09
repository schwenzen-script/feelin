<template>
  <div class="attention-card">
    <span>
      <div class="attention-card__img">
        <img :src="require('@/assets/' + img + '')" alt="attention-img" />
        <h1>{{ title }}</h1>
      </div>
    </span>
  </div>
</template>

<style lang="scss">
.attention-card {
  width: 200px;
  height: 200px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 3px 27px rgba($color: #4e4e4e, $alpha: 0.15);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  img {
    height: 50px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 12px !important;
    font-weight: 700 !important;
    margin: 0;
  }
}
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
