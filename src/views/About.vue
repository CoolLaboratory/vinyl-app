<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: 'About',
  title() { return `About Page — ${this.someValue}`},
  data () {
    return {
      someValue: 'bar'
    }
  }
}
</script>