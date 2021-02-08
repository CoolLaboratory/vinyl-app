<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg">

    {{$auth.currentUser?.email}}
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
// @ is an alias to /src
import titleMixin from '@/mixins/titleMixin'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  mixins: [titleMixin],
  title: 'Home Page',
  components: {
    HelloWorld
  },
  computed: {
    message() { 
      return this.$store.getters.getMsg
    }
  }
}
</script>
