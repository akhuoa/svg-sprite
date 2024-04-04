# MapSvgSpriteColor Live Demo

## Live Demo

<div class="demo-map-container">
  <div class="demo-map-container-inner">
    <ClientOnly>
      <MapSvgSpriteColor />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const MapSvgSpriteColor = defineClientComponent(() => {
  return import("../src/components/MapSvgSpriteColor.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    <MapSvgSpriteColor />
  </div>

  <script>
    import { MapSvgSpriteColor } from '@abi-software/svg-sprite';

    export default {
      components: { MapSvgSpriteColor }
    }
  </script>
```
