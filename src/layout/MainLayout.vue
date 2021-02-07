<template>
  <top-app-bar />
  
  <router-view class="page" />

  <info-bar />
</template>


<script>
import TopAppBar from '@/components/TopAppBar.vue'
import InfoBar from '@/components/InfoBar.vue'

export default {
  components: { TopAppBar, InfoBar },
  name: 'MainLayout',
  data: () => ({ dashboardWindow: null }),
  setup() {
    document.body.setAttribute('layout', 'main')
  },
  methods: {
    /** Open the Dashboard page in a new window */
    openDashboard() {
      const windowFeatures = 'menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes,status=no'
      
      if(!this.dashboardWindow || this.dashboardWindow.closed)
        this.dashboardWindow = window.open('/dashboard', "VS_Dashboard", windowFeatures)
      else
        this.dashboardWindow.focus()
    }

  }
}
</script>


<style lang="scss">

</style>