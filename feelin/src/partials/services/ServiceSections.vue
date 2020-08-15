<template>
  <section class="service-sections">
    <service-section
      title="Webdevelopment"
      context="Een onderneming zonder website. Bestaat dat nog wel? Zo ja, geen nood! Wij zijn er voor jou. Wij gaan zelfs verder met uitgebreide en op maat gemaakte functionaliteiten."
    />
    <service-section
      title="Appdevelopment"
      context="Het ontwikkelen van een mobiele applicatie? Zowel voor Android als IOS? Geen probleem! Wij maken een applicatie op maat voor de klant en dit binnen ieders budget."
    />
    <service-section
      title="Webdesign"
      context="Een website bevat natuurlijk meer dan alleen wat code. Het bevat uren van onderzoek, wetenschap en misschien ook wel wat bloed, zweet en tranen. Die nemen we dan ook gerust op ons."
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
