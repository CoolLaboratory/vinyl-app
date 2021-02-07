<template>
  <router-view />
</template>

<script>
export default {
  name: 'AuthLayout',
  setup() {
    document.body.setAttribute('layout', 'auth')
  }
}
</script>

<style>

</style>