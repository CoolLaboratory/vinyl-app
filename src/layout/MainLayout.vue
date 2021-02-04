<template>
  <div id="nav">
    <router-link to="/browse">Home</router-link> |
    <router-link to="/about">About</router-link>

    <button @click="openDashboard">Dashboard</button>
  </div>
  <router-view />
</template>


<script>
export default {
  data: () => ({
    dashboardWindow: null
  }),
  methods: {
    openDashboard() {
      const windowFeatures = 'menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes,status=no'
      
      if(!this.dashboardWindow || this.dashboardWindow.closed)
        this.dashboardWindow = window.open("http://localhost:8080/dashboard", "VS_Dashboard", windowFeatures)
      else
        this.dashboardWindow.focus()
    }

  }
}
</script>


<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>