<template>
  <section class="case-sections">
    <div class="row d-flex justify-content-center">
      <case-card />
      <case-card />
      <case-card />
    </div>
  </section>
</template>

<script>
// Importing components
import CaseCard from "../../components/cards/CaseCard";

export default {
  name: "CasesSections",
  components: {
    CaseCard
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
