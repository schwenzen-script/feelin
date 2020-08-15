<template>
  <section class="service-sections">
    <service-section
      title="Webdevelopment"
      context="Een onderneming zonder website. Bestaat dat nog wel? Zo ja, geen nood! Wij zijn er voor jou. Wij gaan zelfs verder met uitgebreide en op maat gemaakte functionaliteiten."
    />
    <service-section
      title="Webdevelopment"
      context="Een onderneming zonder website. Bestaat dat nog wel? Zo ja, geen nood! Wij zijn er voor jou. Wij gaan zelfs verder met uitgebreide en op maat gemaakte functionaliteiten."
    />
    <service-section
      title="Webdevelopment"
      context="Een onderneming zonder website. Bestaat dat nog wel? Zo ja, geen nood! Wij zijn er voor jou. Wij gaan zelfs verder met uitgebreide en op maat gemaakte functionaliteiten."
    />
  </section>
</template>

<script>
// Importing some components
import ServiceSection from "../../components/sections/ServiceSection";

export default {
  name: "ServiceSections",
  components: {
    ServiceSection
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
