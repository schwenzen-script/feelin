<template>
  <section class="home__info container">
    <info-section
      img="phone.png"
      title="Sterk digitaal werk! 🚀"
      context="De wereld verandert snel. Zeer snel. We kunnen dan ook niet op onze luie kont blijven zitten. Wij moeten mee! Door onze gevariëerde kennis binnen de technologische wereld kunnen wij heel wat innoverende en sterke websites leveren."
    ></info-section>
    <info-section
      img="phone.svg"
      title="Mobile, that's the way! 💥"
      context="De smartphone. Een zeer jong product dat in een zeer snelle tijdspanne de wereld overnam. Het is bijna ondenkbaar om geen smartphone op zak te hebben. Wat deze smartphone uniek maakt, zijn zijn applicatie's. Laat dat nu ook één van onze troeven zijn! App's op maat!"
    ></info-section>
  </section>
</template>

<script>
/** Importing all components */
import InfoSection from "../../components/sections/InfoSection";

export default {
  name: "Info",
  components: {
    InfoSection
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
