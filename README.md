# svg-sprite [![npm version](https://badge.fury.io/js/%40abi-software%2Fsvg-sprite.svg)](https://badge.fury.io/js/%40abi-software%2Fsvg-sprite)
An npm package used to bundle svg icons into the a Vite-Vue3 build. This is opposed to loading svg's from the server at runtime, which can end up SVGs loading last on a site.

View the a live demo and documentation at: https://abi-software.github.io/svg-sprite/

## Using svg-sprite
svg-sprite currently only works for SVGs included in the [assets/icons](https://github.com/ABI-Software/svg-sprite/tree/main/assets/icons) directory

It can however be forked to include any set of SVGs, or in future we can modify svg-sprite to take a prop input that points to an svg folder

### Installation
```
npm install @abi-software/svg-sprite
```
### Setup

To use svg-sprite, we need to load it before any of the SVGs will be loaded in components. A method guaranteed to do this is loading it on the first line of app.py

#### In App.vue - (Options API)
```
<template>
    <div ref="root">
      <MapSvgSpriteColor />
      ... Rest of app ...
    </div>
</template>

<script>
import { MapSvgSpriteColor } from '@abi-software/svg-sprite';
export default {
  name: "App",
  components: {
    SvgSpriteColor,
  },
  ...
}
```

#### When using an svg (this example is in a component)
```
<template>
  <MapSvgIcon icon="close" @click="close"/>
</template>


<script>
/* eslint-disable no-alert, no-console */
import { MapSvgIcon } from '@abi-software/svg-sprite';
import "@abi-software/svg-sprite/dist/style.css";
```

### Change the icon colours
```
<style>
.map-icon {
  color: red;
}
</style>
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Create bundle for npm and publish
```
npm run build-bundle
npm publish
```

### Lints and fixes files
```
npm run lint
```

## API Documentation

The API documentation is developed with `vitepress` and `vuese`. Documentation pages are in the `docs` folder.

### To run in local development mode
```bash
npm run docs:watch
```

This will start the documentation server with `vitepress` on port `:5173` and watch the components' changes.
