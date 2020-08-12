<template>
  <div class="chatbox-section">
    <div class="chatbox" id="chatbox">
      <h1 class="chatbox__title">Een gesprek tussen de mensen!</h1>

      <div class="chatbox__messages">
        <div class="chatbox__messages--message" id="firstMessage">
          <div class="chatbox__messages--message--img">
            <img src="../assets/jens.jpg" alt="Jens Deryckere" />
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
            <img src="../assets/jens.jpg" alt="Jens Deryckere" />
          </div>
        </div>
        <div class="chatbox__messages--message" id="thirdMessage">
          <div class="chatbox__messages--message--img">
            <img src="../assets/jens.jpg" alt="Jens Deryckere" />
          </div>
          <div class="chatbox__messages--message--content left-sided">
            <p>En vriendjes onder elkaar, ideale samenwerking! 🥳</p>
          </div>
        </div>
      </div>

      <div class="chatbox__typing">
        <p>
          <strong class="chatbox__typing--name">Jens Deryckere</strong> is
          typing...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chatbox-appear {
  bottom: 0 !important;
  opacity: 1 !important;
}

.title-appear {
  opacity: 1 !important;
}

.message-appear {
  bottom: 0 !important;
  opacity: 1 !important;
}

.message-flex {
  display: flex !important;
}

.chatbox-section {
  padding: 0 30px;
  opacity: 0;
  position: relative;
  bottom: -100px;
  transition: ease-in-out 0.5s;
}

.chatbox {
  background: #f5f5f5;
  width: 100%;
  padding: 50px 10px 10px 10px;
  border-radius: 10px;
  transition: ease-in-out 0.5s;

  h1 {
    font-size: 30px;
    font-family: Poppins, sans-serif;
    font-weight: 900;
    text-align: center;
    color: #484848;
    opacity: 0;
    transition: ease-in-out 1s;
  }

  &__messages {
    margin-top: 80px;

    &--message {
      display: none;
      opacity: 0;
      align-items: center;
      position: relative;
      bottom: -100px;
      margin-top: 10px;
      transition: ease-in-out 1s;

      &--img {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 100%;

        img {
          width: 100%;
        }
      }

      &--content {
        background-color: #f25a5a;
        padding: 10px 20px;
        border-radius: 30px;

        p {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-size: 10px;
          color: #fff;
        }
      }

      .left-sided {
        margin-left: 10px;
      }

      .right-sided {
        margin-right: 10px;
      }
    }

    &--message.right-side {
      justify-content: flex-end;

      .chatbox__messages--message--content {
        background: rgba($color: #4ba2ef, $alpha: 1) !important;
      }
    }
  }

  &__typing {
    margin-top: 50px;

    p {
      text-align: center;
      margin: 0;
      font-size: 15px;
      color: #484848;
      font-family: "Helvetica Neue";
    }
  }
}

@media (min-width: 992px) {
  .chatbox-section {
    padding: 0 100px;
  }

  .chatbox {
    padding: 50px 90px 10px 90px;
    h1 {
      font-size: 2vw;
    }

    &__messages {
      &--message {
        &--content {
          p {
            font-size: 1vw;
          }
        }
      }
    }

    &__typing {
      font-size: 1vw;
    }
  }
}
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
      let typing = document.getElementsByClassName("chatbox__typing--name")[0];

      if (this.isElementInViewport(chatbox[0])) {
        chatbox[0].classList.add("chatbox-appear");
        chatboxTitle[0].classList.add("title-appear");

        setTimeout(() => {
          messages[0].classList.add("message-flex");
          setTimeout(() => {
            messages[0].classList.add("message-appear");
            typing.innerHTML = "Hans Vertriest";

            setTimeout(() => {
              messages[1].classList.add("message-flex");
              setTimeout(() => {
                messages[1].classList.add("message-appear");
                typing.innerHTML = "Jens Deryckere";

                setTimeout(() => {
                  messages[2].classList.add("message-flex");
                  setTimeout(() => {
                    messages[2].classList.add("message-appear");
                    typing.innerHTML = "Jens Deryckere";
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
