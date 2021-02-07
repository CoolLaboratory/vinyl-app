<template>
  <div class="info_bar">
    <div class="row">
      <section class="justify_start">
        <span>Battery: {{level}}</span>
      </section>

      <section class="justify_end">
        <span>Status: <span 
                        class="status"
                        :class="onLine">{{ onLine ? 'online' : 'offline' }}</span></span>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ 
    batteryManager: null,
    batteryLevel: 0,
    onLine: navigator.onLine
  }),
  async mounted() {
    /**@type {Navigatore} batteryManager */
    this.batteryManager = await window.navigator.getBattery()
    this.batteryLevel = this.batteryManager.level
    this.batteryManager.onlevelchange = this.onLevelChange
  },
  methods: {
    onLevelChange: function (e) {
      console.log('batteryManager:levelChange')
      this.batteryLevel = e.target.level
    }
  },
  computed: {
    level() {
      return `${this.batteryLevel * 100}%`      
    }
  }

}
</script>

<style lang="scss" scoped>

.info_bar {
  position: fixed;
  background: black;
  color: white;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 24px;

  .row {
    display: flex;
    height: 100%;
    padding: 0 16px;

  }
  section {
    display: flex;
    flex-grow: 1;
    height: 100%;
    align-items: center;

    &.justify_start {justify-content: flex-start;}
    &.justify_end {justify-content: flex-end;}
  }
}

</style>