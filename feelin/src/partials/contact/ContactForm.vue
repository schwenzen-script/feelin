<template>
  <div class="col-lg-8 col-12">
    <div class="contact-form" id="contact-form">
      <form action="">
        <div class="row">
          <div class="col-12 contact-form__text">
            <h1>Stuur ons een berichtje! 📧</h1>
            <p>
              Feelin staat open voor jouw rake vragen, mooie ideeën en leuke
              babbels.
            </p>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="contact-form__input">
              <label for="name" id="name-label">Naam</label>
              <input
                @focus="changeInputLabel('name')"
                @blur="changeInputLabel('name')"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="contact-form__input">
              <label for="email" id="email-label">Email</label>
              <input
                @focus="changeInputLabel('email')"
                @blur="changeInputLabel('email')"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="contact-form__input">
              <label for="phone" id="phone-label">GSM</label>
              <input
                @focus="changeInputLabel('phone')"
                @blur="changeInputLabel('phone')"
                type="tel"
                name="phone"
                id="phone"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="contact-form__input">
              <label for="message" id="message-label">Bericht</label>
              <textarea
                @focus="changeInputLabel('message')"
                @blur="changeInputLabel('message')"
                name="message"
                id="message"
                required
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 d-flex justify-content-end">
            <input class="contact-form__send" type="submit" value="Verstuur" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  documentElement: "#contact-form",
  watch: {
    checkInput: function() {
      this.animateLabel();
    }
  },
  created: function() {
    this.animateLabel = this.changeInputLabel();
  },
  methods: {
    changeInputLabel: function(val) {
      const name = document.getElementById(val);

      if (name === document.activeElement) {
        const label = document.getElementById(`${val}-label`);
        label.classList.add("label-active");
      } else {
        const label = document.getElementById(`${val}-label`);

        if (!name.value) {
          label.classList.remove("label-active");
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
