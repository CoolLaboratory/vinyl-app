<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import titleMixin from '@/mixins/titleMixin'

export default {
  name: 'About',
  mixins: [titleMixin],
  title() { return `About Page — ${this.someValue}`},
  data () {
    return {
      someValue: 'bar'
    }
  }
}
</script>