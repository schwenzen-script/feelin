<template>
  <div class="contact container">
    <!-- Including the head of this page -->
    <page-head
      title="📱 Contact leggen 📱"
      context="Zeg eens een goeiendag! Ik en mijn companen helpen je gerust verder. Misschien met een deugddoende koffie?"
    />
    <!-- Including the contact section -->
    <contact-section />
  </div>
</template>

<script>
// Importing all partials
import PageHead from "../partials/Head";
import ContactSection from "../partials/contact/ContactSection";

export default {
  name: "Contact",
  components: {
    PageHead,
    ContactSection
  },
  created() {
    document.title = "Feelin Development | Contact";
  }
};
</script>

<style lang="scss">
@import "../scss";
</style>
