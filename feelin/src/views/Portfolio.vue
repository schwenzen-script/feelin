<template>
  <div class="portfolio container">
    <!-- Including the head of this page -->
    <page-head
      title="😎 Enkele cases 😎"
      context="Bekijk wat we ondertussen allemaal al hebben gemaakt. Misschien wat inspiratie voor jouw komende investering?"
    />
    <!-- Including all finished projects -->
    <case-sections />
  </div>
</template>

<script>
// Importing all partials
import PageHead from "../partials/Head";
import CaseSections from "../partials/portfolio/CasesSections";

export default {
  name: "Portfolio",
  components: {
    PageHead,
    CaseSections
  },
  created() {
    document.title = "Feelin Development | Portfolio";
  }
};
</script>

<style lang="scss">
@import "../scss";
</style>
