<template>
  <router-view/>

  <snackbar />
</template>


<script>
export default {
  mounted() {
    this.$store.dispatch('getWelcomeMessage')
    console.log('App component just mounted....');
    console.log(this.$el.parentElement)
    document.body.removeAttribute('v-clock')

    this.$snackbar.show('Welcome to record Mania')
    console.log(this.$auth.currentUser)
  }
}
</script>

<style lang="scss">
  @import "./app.scss";
</style>
