<template>
  <ul
    class="mdc-list"
    role="menu"
    aria-hidden="true"
    aria-orientation="vertical"
    tabindex="-1"
  >
    <li class="mdc-list-item" role="menuitem">
      <router-link :to="{name: 'Profile'}">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Profile</span>
      </router-link>
    </li>
    <li class="mdc-list-divider" role="separator"></li>
    <li class="mdc-list-item" role="menuitem" @click="logout">
      <span class="mdc-list-item__ripple"></span>
      <span class="mdc-list-item__text">Logout</span>
    </li>
  </ul>
</template>

<script>
import { MDCList } from '@material/list'
export default {
  data() { return {
    /**@type {MDCList} listEl */
    listEl: null
  }},
  mounted() {
    this.listEl = new MDCList(this.$el)
  },
  unmounted() {
    this.listEl.destroy()
  },
  methods: {
    logout() {
      /**@type {import('@/main').Auth} auth */ 
      const auth = this.$auth
      auth.signOut();
      this.$router.push({name: 'Browse'})
    }
  }
};
</script>

<style lang="scss" scoped>
</style>