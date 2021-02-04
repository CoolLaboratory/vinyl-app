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
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

  $font-family: "Inter", sans-serif;

  * {box-sizing: border-box;}
  *::before, 
  *::after {box-sizing: inherit;}

  body {
    font-family: $font-family;
    margin: 0;

    &[layout="main"] {
      
      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
      }
    }
  }

</style>
