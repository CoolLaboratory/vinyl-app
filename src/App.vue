<template>
  <router-view/>
</template>


<script>
export default {
  inject: ['user'],

  mounted() {
    console.log(this.user)
    this.$store.dispatch('getWelcomeMessage')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
