<template>
  
  <aside class="drawer as-modal is-open" modal>
    <span>Drawer</span>



  </aside>
  <div class="scrim"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .drawer {
    background-color: white;
    width: 320px;
    height: 100vh;
    border-right: 1px solid lightgrey;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.as-modal {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &.is-open { 
      transform: translateX(0%);
      z-index: 110;


      + .scrim {
        opacity: 1;
        pointer-events: all;
        z-index: 100;
      }
    }
  }
    

    

  .scrim {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
    will-change: opacity;
    transform: opacity .3s ease;
  }


</style>