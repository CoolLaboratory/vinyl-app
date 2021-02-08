<template>
  <div class="mdc-banner mdc-banner--centered" role="banner">
    <div class="mdc-banner__fixed">
      <div class="mdc-banner__content" role="status" aria-live="assertive">
        <div class="mdc-banner__graphic-text-wrapper">
          <div class="mdc-banner__text">
            There was a problem processing a transaction on your credit card.
          </div>
        </div>
        <div class="mdc-banner__actions">
          <button type="button" class="mdc-button mdc-banner__primary-action">
            <div class="mdc-button__ripple"></div>
            <div class="mdc-button__label">Fix it</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCBanner } from "@material/banner";

export default {
  data: () => ({
    /**@type {MDCBanner} banner */
    banner: null,
  }),
  mounted() {
    this.banner = new MDCBanner(this.$el);
    this.banner.open()
  },
  unmounted() {
    this.banner.destroy();
  },
};
</script>

<style>
</style>