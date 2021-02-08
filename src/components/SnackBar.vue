<template>
<div class="mdc-snackbar">
  <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
    <div class="mdc-snackbar__label" aria-atomic="false">
      Can't send photo. Retry in 5 seconds.
    </div>
    <div class="mdc-snackbar__actions" aria-atomic="true">
      <button type="button" class="mdc-button mdc-snackbar__action">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Retry</span>
      </button>
    </div>
  </div>
</div>
</template>

<script>
import {MDCSnackbar} from '@material/snackbar';

export default {
  data: () => ({
    /**@type {MDCSnackbar} snackbar */
    snackbar: null
  }),
  mounted() {
    this.snackbar = new MDCSnackbar(this.$el);
  },
  unmounted() {
    this.snackbar.destroy()
  }
}
</script>

<style lang="scss" scoped>
@use "@material/snackbar";

@media (max-width: snackbar.$mobile-breakpoint) {
  .mdc-snackbar {
    @include snackbar.layout-stacked;
  }
}

@media (min-width: snackbar.$mobile-breakpoint) {
  .mdc-snackbar {
    @include snackbar.position-leading;
  }
}
</style>