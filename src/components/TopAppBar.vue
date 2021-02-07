<template>
  <header class="top-app-bar">
    <div class="row">
      <section class="justify_start">
        <router-link :to="{name: 'Browse'}">
          <img src="@/assets/logo.svg" alt="logo" height="50"  />
        </router-link>
      </section>
      <section class="justify_end">
        <nav>
          <div v-if="!authenticated">
            <!-- <router-link :to="{name: 'SignIn'}" >Sign in</router-link> -->
            <button class="as-link" @click="navigate({ name: 'SignIn' })">
              Sign in
            </button>
            <button @click="navigate({ name: 'SignUp' })">Sign up</button>
          </div>
          <div v-else>
            <AccountMenu />
          </div>
        </nav>
      </section>
    </div>
  </header>
</template>

<script>
import AccountMenu from "@/components/AccountMenu.vue";

export default {
  name: "TopAppBar",
  components: { AccountMenu },
  methods: {
    navigate(to) {
      this.$router.push(to);
    },
    async logout() {
      const { auth } = await import("@/firebase");
      auth.signOut();
    },
    log(it) {
      console.log('log(it)')
      console.log(it)
      it = true
    }
  },
  computed: {
    authenticated() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '~@material/elevation';

.top-app-bar {
  position: fixed;
  background: white;
  color: black;
  top: 0;
  width: 100%;
  box-shadow: elevation.elevation-box-shadow(4);

  .row {
    display: flex;
    height: 60px;
    margin: 0 16px;
  }
  section {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100%;

    &.justify_start {
      justify-content: flex-start;
    }
    &.justify_end {
      justify-content: flex-end;
    }
  }
}

.dropdown {
  position: relative;

  .dropdown_surface {
    position: absolute;
    display: none;
    background: white;
    flex-direction: column;
    top: 0;
    right: 0;
    min-width: 150px;
    border-radius: 4px;
    padding: 8px;
  }

  &.opened .dropdown_surface {
    display: flex;
    box-shadow: elevation.elevation-box-shadow(6);
  }
}
</style>