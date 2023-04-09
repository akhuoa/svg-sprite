<template>
  <div id="app">
    <map-svg-sprite-color/>
    <div>
      Image
    </div>
    <img alt="Vue logo" src="@/../assets/logo.png">
    <div>
      SVG Icons
    </div>
    magnifyingGlass<map-svg-icon icon="magnifyingGlass" class="example-icon"/>
    changeBckgd<map-svg-icon icon="changeBckgd" class="example-icon"/>
    close<map-svg-icon icon="close" class="example-icon"/>
    closeFullScreen<map-svg-icon icon="closeFullScreen" class="example-icon"/>
    dock<map-svg-icon icon="dock" class="example-icon"/>
    pause<map-svg-icon icon="pause" class="example-icon"/>
    permalink<map-svg-icon icon="permalink" class="example-icon"/>
    play<map-svg-icon icon="play" class="example-icon"/>
    resetZoom<map-svg-icon icon="resetZoom" class="example-icon"/>
    tooltips<map-svg-icon icon="tooltips" class="example-icon"/>
    undock<map-svg-icon icon="undock" class="example-icon"/>
    zoomIn<map-svg-icon icon="zoomIn" class="example-icon"/>
    zoomOut<map-svg-icon icon="zoomOut" class="example-icon"/>
    singlepanel<map-svg-icon icon="singlepanel" class="example-icon"/>
    2horpanel<map-svg-icon icon="2horpanel" class="example-icon"/>
    2vertpanel<map-svg-icon icon="2vertpanel" class="example-icon"/>
    3panel<map-svg-icon icon="3panel" class="example-icon"/>
    4panel<map-svg-icon icon="4panel" class="example-icon"/>
    fitWindow<map-svg-icon icon="fitWindow" class="example-icon"/>
    Help<map-svg-icon icon="help" class="example-icon"/>
  </div>
</template>

<script>
import MapSvgSpriteColor from './components/SvgSpriteColor.vue'


export default {
  components: { MapSvgSpriteColor, },
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
}

.map-icon {
  color: red;
}

</style>
