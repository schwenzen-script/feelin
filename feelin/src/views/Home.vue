<template>
  <!-- Homepage -->
  <div class="home" id="home">
    <!-- Head -->
    <home-head
      title="Let's get digital!"
      text="Bits and bytes. That's the future. Daar helpen wij gerust een handje in mee. We bundelen onze sterktes om voor u, als klant, een vernieuwend en mooi product af te leveren. Een website, een app, ... Het aanbod is zo groot!"
    />
    <!-- Info section -->
    <info />
    <!-- Chatbox section -->
    <chat-box />
    <!-- Review section -->
    <reviews />
  </div>
</template>

<script>
/** Importing all partials in here! */
import HomeHead from "../partials/home/Head";
import Info from "../partials/home/Info";
import ChatBox from "../partials/home/Chatbox";
import Reviews from "../partials/home/Reviews";

export default {
  name: "Home",
  components: {
    HomeHead,
    Info,
    ChatBox,
    Reviews
  },
  created() {
    document.title = "Feelin Development | Home";
  }
};
</script>

<style lang="scss"></style>
