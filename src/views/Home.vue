<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  title: 'Home Page',
  components: {
    HelloWorld
  },
  computed: {
    message() { return this.$store.getters.getMsg }
  }
}
</script>
