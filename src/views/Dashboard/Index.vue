<template>

  <h1>Dashboard</h1>
  <section class="row">

    <div class="card">
      foo
    </div>
    
    <div class="card">
      bar
    </div>
  </section>
  
  <br />

  <section class="row">

    <div class="card">
      foo
    </div>
    
    <div class="card">
      bar
    </div>
  </section>

</template>


<style lang="scss">
  
  @use "~@material/elevation";
  
  .row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 24px;

  .card {
    background: rgb(66, 43, 88);
    background: -moz-radial-gradient(circle, rgba(90,55,122,1) 0%, rgba(66,43,88,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(90,55,122,1) 0%, rgba(66,43,88,1) 100%);
    background: radial-gradient(circle, rgba(90,55,122,1) 0%, rgba(66,43,88,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5a377a",endColorstr="#422b58",GradientType=1);
    height: 400px;
    border-radius: 6px;
    box-shadow: elevation.elevation-box-shadow(6);
  }


  }


</style>