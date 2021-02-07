<template>
  <router-view/>
</template>


<script>
export default {
  mounted() {
    this.$store.dispatch('getWelcomeMessage')
    console.log('App component just mounted....');
    console.log(this.$el.parentElement)
    document.body.removeAttribute('v-clock')

    console.log(this.$auth.currentUser)
  }
}
</script>

<style lang="scss">
  @import "./app.scss";
</style>
