<template>
  <section class="head">
    <div
      class="head__background"
      :style="{
        'background-image': 'url(' + require('../assets/background.svg') + ')'
      }"
    ></div>
    <div class="row d-flex justify-content-center w-100">
      <div class="col-md-5 col-12 head__content">
        <h1>{{ title }}</h1>
        <p>{{ context }}</p>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Head",
  props: {
    title: String,
    context: String
  }
};
</script>

<style lang="scss">
@import "../scss";
</style>
