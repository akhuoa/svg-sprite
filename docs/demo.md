# MapSvgSprite Live Demo

## Live Demo

<div class="demo-map-container">
  <div class="demo-map-container-inner">
    <ClientOnly>
      <MapSvgSpriteColor />
      <p>Magnifying Glass Icon</p>
      &nbsp;
      <MapSvgIcon
        icon="magnifyingGlass"
      />
      <MapSvgSprite />
    </ClientOnly>
  </div>
</div>

<script setup>
import { defineClientComponent } from "vitepress";
import "./demo-styles.css";

const MapSvgSpriteColor = defineClientComponent(() => {
  return import("../src/components/SvgSpriteColor.vue");
})
const MapSvgIcon = defineClientComponent(() => {
  return import("../src/components/SvgIcon.vue");
})
const MapSvgSprite = defineClientComponent(() => {
  return import("../src/components/SvgSprite.vue");
})
</script>


## Code Preview

```js-vue
  <div class="your-outer-container">
    Magnifying Glass Icon
    <MapSvgIcon
      icon="magnifyingGlass"
    />
  </div>

  <script>
    import { MapSvgIcon } from '@abi-software/svg-sprite';

    export default {
      components: { MapSvgIcon }
    }
  </script>
```
