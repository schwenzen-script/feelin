<template>
  <section class="case-sections">
    <div class="row d-flex justify-content-center">
      <case-card
        title="Connus"
        context='Samen met Connus maakten we een mooie landingspagina in een mum van tijd. Connus benoemt zichzelf als: "the social network where new opportunities and insights are created. Influencers and companies can spontaneously express their interest in a cooperation." Met deze gedachte werd er gewerkt aan een prachtig design. Ik en mijn fellow developer Hans Vertriest brachten dit prachtig plaatje tot werkelijkheid.'
        v-bind:online="true"
        route="https://www.connus.app"
        img="connus-mock.png"
      />
      <case-card
        title="Zeg Ja"
        context="De Zeg Ja-webapp is een platform waarbij mensen dagelijks hun eigen stress- en energiewaarden in kunnen vullen. Aan de hand van deze waarden worden een aantal belangrijke conlussie's getrokken en grafisch voorgesteld. Deze webapp word voornamelijk gebruikt tijdens events van Zeg Ja. "
        img="zegja-mock.png"
      />
      <case-card
        title="Jens Deryckere"
        context="Website gemaakt als portfolio voor de chef van Feelin Development. Gebruikt als korte introductie tegenover bedrijven."
        v-bind:online="true"
        route="https://www.jensderyckere.be"
        img="jens-mock.png"
      />
    </div>
  </section>
</template>

<script>
// Importing components
import CaseCard from "../../components/cards/CaseCard";

export default {
  name: "CasesSections",
  components: {
    CaseCard
  }
};
</script>

<style lang="scss">
@import "../../scss";
</style>
