<template>
  <DBTopBar />

  <DBNavBar />
  
  <main class="main">
    <router-view />
  </main>
</template>

<script>
import DBTopBar from '@/components/DBToolbar.vue'
import DBNavBar from '@/components/DBNavBar.vue'

export default {
  components: { DBTopBar, DBNavBar },
  inject: ['user'],
  setup() {
    document.body.setAttribute('layout', 'dashboard')
  }
}
</script>

<style lang="scss">
[layout="dashboard"] {
  background-color: rgb(41, 24, 58);
  color: rgb(245, 209, 239);
  margin: 0;
  overflow: hidden;


  #app {
    display: grid;
    grid-template-columns: 80px auto;
    grid-template-rows: 104px auto;
    grid-template-areas: 
        ". header "
        "navbar main ";
    width: 100vw;
    height: 100vh;

    .main { 
      grid-area: main; 
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100vw - 104px);
      height: 100vh;
      padding: 80px 24px 0 0;
      margin: 0 0 0 24px; 
      overflow: hidden scroll; 
    }
  }
}


</style>