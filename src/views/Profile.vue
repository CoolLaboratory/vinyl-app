<template>
  <div class="profile">
    <Banner v-if="!verified">
      <p>Your Email address has not been verified.</p>
    </Banner>
    <div class="card flat profile">

      <img src="" :alt="computedAlt">

      <div>
        <span>{{email}}</span>
      </div>
    </div>


  </div>
</template>

<script>
import titleMixin from '@/mixins/titleMixin'
import Banner from '@/components/Banner.vue'
export default {
  mixins: [titleMixin],
  components: { Banner },
  title: 'myProfile',
  computed: {
    verified() {
      return this.$auth.currentUser.emailVerified
    },
    email() {
      return this.$auth.currentUser.email
    },
    computedAlt() {
      return `${this.$auth.currentUser.displayName} Profile Picture`
    }
  }
}
</script>

<style lang="scss">

.card {

  padding: 8px;

  &.flat {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}

</style>