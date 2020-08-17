<template>
  <div class="succes container">
    <!-- Including the head of this page -->
    <page-head
      title="🙌 Geslaagd! 🙌"
      context="Je bericht is verstuurd! We doen ons uiterste best om zo snel mogelijk te reageren."
    />

    <div class="succes__back">
      <a href="/">Terug naar het begin!</a>
    </div>
  </div>
</template>

<script>
import PageHead from "../partials/Head";

export default {
  name: "Succes",
  components: {
    PageHead
  }
};
</script>

<style lang="scss">
@import "../scss";
</style>
