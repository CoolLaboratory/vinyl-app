<template>
  <div class="toolbar-wrapper">
    <header class="toolbar">
      <div class="row">
        <section></section>
        <section></section>
        <section></section>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @use "~@material/elevation";

  .toolbar-wrapper {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(2,0,36);
    background: -moz-linear-gradient(180deg, #29183a  0%, #29183a  30%, rgba(0,212,255,0) 100%);
    background: -webkit-linear-gradient(180deg, #29183a  0%, #29183a  30%, rgba(0,212,255,0) 100%);
    background: linear-gradient(180deg, #29183a  0%, #29183a  30%, rgba(0,212,255,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
    margin-right: 17px;
    z-index: 1;

    .toolbar {
      background: #422b58;
      height: 60px;
      width: 98%;
      box-shadow: elevation.elevation-box-shadow(12);
      border-radius: 8px;
      z-index: 1;
    }
  }
</style>