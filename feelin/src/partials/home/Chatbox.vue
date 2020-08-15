<template>
  <section class="home__chatbox">
    <div class="chatbox-section container">
      <div class="chatbox" id="chatbox">
        <h1 class="chatbox__title">Een gesprek tussen de mensen!</h1>

        <div class="chatbox__messages">
          <div class="chatbox__messages--message" id="firstMessage">
            <div class="chatbox__messages--message--img">
              <img src="../../assets/jens.jpg" alt="Jens Deryckere" />
            </div>
            <div class="chatbox__messages--message--content left-sided">
              <p>Inzetbaar voor jouw applicatie's en websites!</p>
            </div>
          </div>
          <div class="chatbox__messages--message right-side" id="secondMessage">
            <div class="chatbox__messages--message--content right-sided">
              <p>Creatief, innoverend en jong 😄</p>
            </div>
            <div class="chatbox__messages--message--img">
              <img src="../../assets/jens.jpg" alt="Jens Deryckere" />
            </div>
          </div>
          <div class="chatbox__messages--message" id="thirdMessage">
            <div class="chatbox__messages--message--img">
              <img src="../../assets/jens.jpg" alt="Jens Deryckere" />
            </div>
            <div class="chatbox__messages--message--content left-sided">
              <p>En vriendjes onder elkaar, ideale samenwerking! 🥳</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../scss";
</style>

<script>
export default {
  name: "ChatBox",
  documentElement: "#chatbox",
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      offsetTop: 0
    };
  },
  watch: {
    offsetTop() {
      this.callbackFunc();
    }
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    isElementInViewport(elm) {
      var rect = elm.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    },
    callbackFunc() {
      let chatbox = document.getElementsByClassName("chatbox-section");
      let messages = document.querySelectorAll(".chatbox__messages--message");
      let chatboxTitle = document.getElementsByClassName("chatbox__title");

      if (this.isElementInViewport(chatbox[0])) {
        chatbox[0].classList.add("chatbox-appear");
        chatboxTitle[0].classList.add("title-appear");

        setTimeout(() => {
          messages[0].classList.add("message-flex");
          setTimeout(() => {
            messages[0].classList.add("message-appear");
            setTimeout(() => {
              messages[1].classList.add("message-flex");
              setTimeout(() => {
                messages[1].classList.add("message-appear");
                setTimeout(() => {
                  messages[2].classList.add("message-flex");
                  setTimeout(() => {
                    messages[2].classList.add("message-appear");
                  }, 500);
                }, 2000);
              }, 500);
            }, 2000);
          }, 500);
        }, 1000);
      }
    }
  }
};
</script>
