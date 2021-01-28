<template>
  <div id="app">
    <svg-sprite-color/>
    <div>
      Image
    </div>
    <img alt="Vue logo" src="@/../assets/logo.png">
    <div>
      SVG Icons
    </div>
    changeBckgd<svg-icon icon="changeBckgd" class="example-icon"/>
    close<svg-icon icon="close" class="example-icon"/>
    closeFullScreen<svg-icon icon="closeFullScreen" class="example-icon"/>
    dock<svg-icon icon="dock" class="example-icon"/>
    pause<svg-icon icon="pause" class="example-icon"/>
    permalink<svg-icon icon="permalink" class="example-icon"/>
    play<svg-icon icon="play" class="example-icon"/>
    resetZoom<svg-icon icon="resetZoom" class="example-icon"/>
    tooltips<svg-icon icon="tooltips" class="example-icon"/>
    undock<svg-icon icon="undock" class="example-icon"/>
    zoomIn<svg-icon icon="zoomIn" class="example-icon"/>
    zoomOut<svg-icon icon="zoomOut" class="example-icon"/>
  </div>
</template>

<script>
import SvgSpriteColor from './components/SvgSpriteColor.vue'


export default {
  components: { SvgSpriteColor, },
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
