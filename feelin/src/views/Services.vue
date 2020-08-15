<!-- Services page -->
<template>
  <div class="services container">
    <!-- Including the head of the page -->
    <page-head
      title="🔔 Onze diensten 🔔"
      context="Tijd voor verandering? Daar helpen wij gerust een handje mee. Neem een kijkje binnen ons aanbod!"
    />
    <!-- Including all services here -->
    <main-services />
    <!-- Bit more info about the services -->
    <service-sections />
  </div>
</template>

<script>
// Importing all partials and components
import PageHead from "../partials/Head";
import MainServices from "../partials/services/MainServices";
import ServiceSections from "../partials/services/ServiceSections";

export default {
  name: "Services",
  components: {
    PageHead,
    MainServices,
    ServiceSections
  }
};
</script>

<style lang="scss">
@import "../scss";
</style>
