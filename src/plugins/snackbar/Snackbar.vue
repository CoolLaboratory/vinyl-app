<template>
<div class="mdc-snackbar mdc-snackbar--leading">
  <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
    <div class="mdc-snackbar__label" aria-atomic="false">
    </div>
    <div class="mdc-snackbar__actions" aria-atomic="true">
      <button type="button" class="mdc-button mdc-snackbar__action">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label"></span>
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
    snackbar: null,
    /**@type {string} body */
    // body: ''
  }),
  mounted() {
    window.snackbar = this.snackbar = new MDCSnackbar(this.$el);
  },
  unmounted() {
    delete window.snackbar
    this.snackbar.destroy()
  }
}
</script>

<style lang="scss" scoped>
.mdc-snackbar { padding-bottom: 40px; }
.mdc-snackbar__action:empty { display: none; }
</style>