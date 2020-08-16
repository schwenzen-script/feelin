<template>
  <section class="contact-section">
    <div class="row">
      <contact-form />
      <contact-info />
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default {
  name: "ContactSection",
  components: {
    ContactForm,
    ContactInfo
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
