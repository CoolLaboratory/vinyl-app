<template>
  <div class="profile">

    <h1>Profile Page</h1>
    <div class="card flat profile">

      <img src="" :alt="computedAlt">


    </div>


  </div>
</template>

<script>
export default {

  computed: {
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