# svg-sprite [![npm version](https://badge.fury.io/js/%40abi-software%2Fsvg-sprite.svg)](https://badge.fury.io/js/%40abi-software%2Fsvg-sprite)
An npm package used to bundle svg icons into the a Vue build. This is opposed to loading svg's from the server at runtime, which can end up svgs loading last on a site.

## Using svg-sprite
svg-sprite currently only works for svgs included in the [assets/icons](https://github.com/ABI-Software/svg-sprite/tree/main/assets/icons) directory

It can however be forked to inlcude any set of svgs, or in future we can modify svg-sprite to take a prop input that points to an svg folder

### Installation
```
npm install @abi-software/svg-sprite
```
### Setup

To use svg-sprite, we need to load it before any of the svgs will be loaded in components. A method gauranteed to do this is loading it on the first line of app.py

#### In App.vue
```
<template>
    <div ref="root">
      <SvgSpriteColor/>
      ... Rest of app ...
    </div>
</template>

<script>
import {SvgSpriteColor} from '@abi-software/svg-sprite';
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
  <svg-icon icon="close" @click.native="close"/>
</template>


<script>
/* eslint-disable no-alert, no-console */
import Vue from "vue";
import {SvgIcon} from '@abi-software/svg-sprite';
Vue.component('svg-icon', SvgIcon);
``` 

### Change the icon colours
```
<style>
.map-icon {
  color: red;
}
</style>
``` 

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
