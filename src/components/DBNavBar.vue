<template>
  <aside class="navbar">

    <router-link to="/dashboard">
      dashboard
    </router-link>
  
    <RouterLink to="/dashboard/users">
      Users
    </RouterLink>
  </aside>
</template>

<script>
export default {

}
</script>

<style>

  .navbar {
    grid-area: navbar;
  }

</style>