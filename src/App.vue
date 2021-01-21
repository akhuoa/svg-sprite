<template>
  <div id="app">
    <svg-sprite/>
    <div>
      Image
    </div>
    <img alt="Vue logo" src="@/../assets/logo.png">
    <div>
      SVG Icon
    </div>
    <svg-icon icon="fullScreen" class="example-icon"/>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.example-icon{
  font-size: 30em;
  color: red;
}
</style>
